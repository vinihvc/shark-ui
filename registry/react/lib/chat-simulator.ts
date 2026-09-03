import type { StreamChunk } from "@tanstack/ai/client";
import type {
  ConnectConnectionAdapter,
  UIMessage as TanStackUIMessage,
} from "@tanstack/ai-client";
import type { ChatTransport, InferUIMessageChunk, UIMessage } from "ai";

export interface ChatSimulatorAssistantOptions {
  /** Delay before the assistant response starts streaming. */
  delayMs?: number;
  /** Stable ID for matching a streamed response to this scripted turn. */
  id?: string;
}

export interface ChatSimulatorTransportOptions {
  /** Delay between text chunks. Pass `0` to stream immediately. */
  delayMs?: number;
}

export interface TanStackChatSimulator {
  assistant: (
    text: string,
    options?: ChatSimulatorAssistantOptions
  ) => TanStackChatSimulator;
  get: (count?: number) => TanStackUIMessage[];
  next: (messages: readonly TanStackUIMessage[]) => TanStackUIMessage | null;
  transport: (
    options?: ChatSimulatorTransportOptions
  ) => ConnectConnectionAdapter;
  user: (text: string, options?: { id?: string }) => TanStackChatSimulator;
}

interface ChatSimulatorTurn<UI_MESSAGE extends UIMessage> {
  delayMs: number;
  message: UI_MESSAGE;
}

export interface ChatSimulator<UI_MESSAGE extends UIMessage = UIMessage> {
  assistant: (
    text: string,
    options?: ChatSimulatorAssistantOptions
  ) => ChatSimulator<UI_MESSAGE>;
  get: (count?: number) => UI_MESSAGE[];
  next: (messages: readonly UI_MESSAGE[]) => UI_MESSAGE | null;
  transport: (
    options?: ChatSimulatorTransportOptions
  ) => ChatTransport<UI_MESSAGE>;
  user: (text: string, options?: { id?: string }) => ChatSimulator<UI_MESSAGE>;
}

const clone = <VALUE>(value: VALUE): VALUE => structuredClone(value);

const wait = (delayMs: number, signal?: AbortSignal) =>
  new Promise<void>((resolve) => {
    if (delayMs <= 0 || signal?.aborted) {
      resolve();
      return;
    }

    const timeout = setTimeout(resolve, delayMs);
    signal?.addEventListener(
      "abort",
      () => {
        clearTimeout(timeout);
        resolve();
      },
      { once: true }
    );
  });

const textChunks = (text: string) => text.match(/\S+\s*/g) ?? [text];

/**
 * Creates a deterministic, local conversation for AI SDK previews and tests.
 * It is intentionally limited to text messages; use a production transport for
 * tools, sources, files, and model-generated content.
 */
export const createAiSdkChatSimulator = <
  UI_MESSAGE extends UIMessage = UIMessage,
>(): ChatSimulator<UI_MESSAGE> => {
  const turns: ChatSimulatorTurn<UI_MESSAGE>[] = [];
  let messageIndex = 0;

  const createMessage = (
    role: "user" | "assistant",
    text: string,
    id?: string
  ) => {
    if (id === undefined) {
      messageIndex += 1;
    }

    return {
      id: id ?? `chat-simulator-message-${messageIndex}`,
      parts:
        role === "user"
          ? [{ text, type: "text" }]
          : [{ state: "done", text, type: "text" }],
      role,
    } as UI_MESSAGE;
  };

  const latestTurnIndex = (messages: readonly UI_MESSAGE[]) => {
    const ids = new Set(messages.map((message) => message.id));
    let index = -1;

    for (const [turnIndex, turn] of turns.entries()) {
      if (ids.has(turn.message.id)) {
        index = turnIndex;
      }
    }

    return index;
  };

  const api: ChatSimulator<UI_MESSAGE> = {
    assistant(text, options) {
      turns.push({
        delayMs: options?.delayMs ?? 0,
        message: createMessage("assistant", text, options?.id),
      });
      return api;
    },
    get(count = turns.length) {
      if (!Number.isInteger(count) || count < 0) {
        throw new RangeError("count must be a non-negative integer.");
      }
      return turns.slice(0, count).map((turn) => clone(turn.message));
    },
    next(messages) {
      const nextTurn = turns
        .slice(latestTurnIndex(messages) + 1)
        .find((turn) => turn.message.role === "user");
      return nextTurn ? clone(nextTurn.message) : null;
    },
    transport(options = {}) {
      return {
        reconnectToStream: () => Promise.resolve(null),
        sendMessages: ({ abortSignal, messages }) => {
          const userTurnIndex = latestTurnIndex(messages);
          const assistantTurn = turns
            .slice(userTurnIndex + 1)
            .find((turn) => turn.message.role === "assistant");

          if (!assistantTurn) {
            throw new Error("No simulated assistant response found.");
          }

          const text = assistantTurn.message.parts
            .filter((part) => part.type === "text")
            .map((part) => part.text)
            .join("");
          const chunks: InferUIMessageChunk<UI_MESSAGE>[] = [
            { messageId: assistantTurn.message.id, type: "start" },
            { id: `${assistantTurn.message.id}-text`, type: "text-start" },
          ] as InferUIMessageChunk<UI_MESSAGE>[];

          for (const delta of textChunks(text)) {
            chunks.push({
              delta,
              id: `${assistantTurn.message.id}-text`,
              type: "text-delta",
            } as InferUIMessageChunk<UI_MESSAGE>);
          }

          chunks.push(
            {
              id: `${assistantTurn.message.id}-text`,
              type: "text-end",
            } as InferUIMessageChunk<UI_MESSAGE>,
            {
              finishReason: "stop",
              type: "finish",
            } as InferUIMessageChunk<UI_MESSAGE>
          );

          return Promise.resolve(
            new ReadableStream<InferUIMessageChunk<UI_MESSAGE>>({
              start(controller) {
                const enqueue = async (index: number): Promise<void> => {
                  await wait(
                    index === 0
                      ? assistantTurn.delayMs
                      : (options.delayMs ?? 50),
                    abortSignal
                  );

                  if (abortSignal?.aborted) {
                    controller.enqueue({
                      type: "abort",
                    } as InferUIMessageChunk<UI_MESSAGE>);
                    controller.close();
                    return;
                  }

                  controller.enqueue(chunks[index]);
                  if (index === chunks.length - 1) {
                    controller.close();
                    return;
                  }

                  enqueue(index + 1).catch((error: unknown) =>
                    controller.error(error)
                  );
                };

                enqueue(0).catch((error: unknown) => controller.error(error));
              },
            })
          );
        },
      } satisfies ChatTransport<UI_MESSAGE>;
    },
    user(text, options) {
      turns.push({
        delayMs: 0,
        message: createMessage("user", text, options?.id),
      });
      return api;
    },
  };

  return api;
};

/**
 * Creates a deterministic TanStack AI conversation for previews and tests.
 * The connection replays each assistant response as AG-UI text events.
 */
export const createTanStackChatSimulator = (): TanStackChatSimulator => {
  const turns: Array<{ delayMs: number; message: TanStackUIMessage }> = [];
  let messageIndex = 0;

  const createMessage = (
    role: "user" | "assistant",
    text: string,
    id?: string
  ) => {
    if (id === undefined) {
      messageIndex += 1;
    }

    return {
      id: id ?? `chat-simulator-message-${messageIndex}`,
      parts: [{ content: text, type: "text" }],
      role,
    } as TanStackUIMessage;
  };
  const latestTurnIndex = (messages: readonly TanStackUIMessage[]) => {
    const ids = new Set(messages.map((message) => message.id));
    let index = -1;

    for (const [turnIndex, turn] of turns.entries()) {
      if (ids.has(turn.message.id)) {
        index = turnIndex;
      }
    }

    return index;
  };
  const api: TanStackChatSimulator = {
    assistant(text, options) {
      turns.push({
        delayMs: options?.delayMs ?? 0,
        message: createMessage("assistant", text, options?.id),
      });
      return api;
    },
    get(count = turns.length) {
      if (!Number.isInteger(count) || count < 0) {
        throw new RangeError("count must be a non-negative integer.");
      }
      return turns.slice(0, count).map((turn) => clone(turn.message));
    },
    next(messages) {
      const nextTurn = turns
        .slice(latestTurnIndex(messages) + 1)
        .find((turn) => turn.message.role === "user");
      return nextTurn ? clone(nextTurn.message) : null;
    },
    transport(options = {}) {
      return {
        connect(messages, _data, abortSignal, runContext) {
          const userTurnIndex = latestTurnIndex(
            messages as TanStackUIMessage[]
          );
          const assistantTurn = turns
            .slice(userTurnIndex + 1)
            .find((turn) => turn.message.role === "assistant");

          if (!assistantTurn) {
            throw new Error("No simulated assistant response found.");
          }

          const text = assistantTurn.message.parts
            .filter((part) => part.type === "text")
            .map((part) => part.content)
            .join("");
          const chunks = [
            {
              runId: runContext?.runId ?? "run-chat-simulator",
              threadId: runContext?.threadId ?? "thread-chat-simulator",
              type: "RUN_STARTED",
            },
            {
              messageId: assistantTurn.message.id,
              role: "assistant",
              type: "TEXT_MESSAGE_START",
            },
            ...textChunks(text).map((delta) => ({
              delta,
              messageId: assistantTurn.message.id,
              type: "TEXT_MESSAGE_CONTENT",
            })),
            {
              messageId: assistantTurn.message.id,
              type: "TEXT_MESSAGE_END",
            },
            {
              finishReason: "stop",
              runId: runContext?.runId ?? "run-chat-simulator",
              threadId: runContext?.threadId ?? "thread-chat-simulator",
              type: "RUN_FINISHED",
            },
          ] as StreamChunk[];

          const stream = async function* (
            index = 0
          ): AsyncGenerator<StreamChunk> {
            await wait(
              index === 0 ? assistantTurn.delayMs : (options.delayMs ?? 50),
              abortSignal
            );

            if (abortSignal?.aborted) {
              return;
            }

            yield chunks[index];
            if (index < chunks.length - 1) {
              yield* stream(index + 1);
            }
          };

          return stream();
        },
      } satisfies ConnectConnectionAdapter;
    },
    user(text, options) {
      turns.push({
        delayMs: 0,
        message: createMessage("user", text, options?.id),
      });
      return api;
    },
  };

  return api;
};

export type ChatSimulatorAdapter = "ai-sdk" | "tanstack-ai";

export function createChatSimulator(options: {
  adapter: "ai-sdk";
}): ChatSimulator;
export function createChatSimulator(options: {
  adapter: "tanstack-ai";
}): TanStackChatSimulator;
/** Creates a text-only simulator for the selected AI chat runtime. */
export function createChatSimulator(options: {
  adapter: ChatSimulatorAdapter;
}) {
  return options.adapter === "ai-sdk"
    ? createAiSdkChatSimulator()
    : createTanStackChatSimulator();
}
