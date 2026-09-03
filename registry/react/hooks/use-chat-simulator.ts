"use client";

import { useChat } from "@ai-sdk/react";
import { useChat as useTanStackChat } from "@tanstack/ai-react";
import type { UIMessage } from "ai";
import { useCallback, useMemo } from "react";
import type {
  ChatSimulator,
  ChatSimulatorTransportOptions,
  TanStackChatSimulator,
} from "@/registry/react/lib/chat-simulator";

interface BaseUseChatSimulatorOptions {
  initialMessageCount?: number;
  transport?: ChatSimulatorTransportOptions;
}

export type UseChatSimulatorOptions =
  | (BaseUseChatSimulatorOptions & {
      adapter: "ai-sdk";
      chat: ChatSimulator;
    })
  | (BaseUseChatSimulatorOptions & {
      adapter: "tanstack-ai";
      chat: TanStackChatSimulator;
    });

const useAiSdkChatSimulator = <UI_MESSAGE extends UIMessage = UIMessage>(
  chat: ChatSimulator<UI_MESSAGE>,
  options: BaseUseChatSimulatorOptions = {}
) => {
  const initialMessages = useMemo(
    () => chat.get(options.initialMessageCount ?? 0),
    [chat, options.initialMessageCount]
  );
  const transport = useMemo(
    () => chat.transport(options.transport),
    [chat, options.transport]
  );
  const chatState = useChat<UI_MESSAGE>({
    messages: initialMessages,
    transport,
  });
  const nextMessage = chat.next(chatState.messages);
  const sendNext = useCallback(() => {
    if (nextMessage) {
      return chatState.sendMessage(nextMessage);
    }
  }, [chatState.sendMessage, nextMessage]);

  return {
    ...chatState,
    canSendNext: nextMessage !== null,
    nextMessage,
    sendNext,
  };
};

const useTanStackAdapter = (
  chat: TanStackChatSimulator,
  options: BaseUseChatSimulatorOptions = {}
) => {
  const initialMessages = useMemo(
    () => chat.get(options.initialMessageCount ?? 0),
    [chat, options.initialMessageCount]
  );
  const connection = useMemo(
    () => chat.transport(options.transport),
    [chat, options.transport]
  );
  const chatState = useTanStackChat({
    connection,
    initialMessages,
  });
  const nextMessage = chat.next(chatState.messages);
  const sendNext = useCallback(() => {
    if (nextMessage) {
      return chatState.append(nextMessage);
    }
  }, [chatState.append, nextMessage]);

  return {
    ...chatState,
    canSendNext: nextMessage !== null,
    nextMessage,
    sendNext,
  };
};

/**
 * Connects a simulator to the selected runtime. Keep `adapter` constant for
 * the lifetime of the component, as required by React's Rules of Hooks.
 */
export const useChatSimulator = (options: UseChatSimulatorOptions) => {
  const useAdapter =
    options.adapter === "ai-sdk" ? useAiSdkChatSimulator : useTanStackAdapter;

  return useAdapter(options.chat as never, options);
};
