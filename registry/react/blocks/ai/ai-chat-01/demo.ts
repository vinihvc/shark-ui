import { createChatSimulator } from "@/registry/react/lib/chat-simulator";

export interface DemoAttachment {
  description: string;
  name: string;
}

export interface DemoCode {
  code: string;
  title: string;
}

export interface DemoDiffLine {
  line: number;
  text: string;
  type: "add" | "context" | "delete";
}

export interface DemoPlanTask {
  file?: string;
  status: "completed" | "in-progress" | "pending";
  title: string;
}

export interface DemoSource {
  href: string;
  title: string;
}

export interface DemoMessageExtras {
  approval?: string;
  attachment?: DemoAttachment;
  code?: DemoCode;
  diff?: { file: string; lines: DemoDiffLine[] };
  plan?: {
    description: string;
    tasks: DemoPlanTask[];
    title: string;
  };
  reasoning?: { content: string; duration: number };
  sources?: DemoSource[];
  terminal?: { header: string; output: string };
  tool?: { file: string; name: string };
}

export interface DemoSuggestion {
  label: string;
  text: string;
}

export interface DemoUserTurn {
  id: string;
  label: string;
  text: string;
}

export const MODEL_OPTIONS = [
  {
    group: "OpenAI",
    label: "GPT-4.1",
    value: "gpt-4.1",
  },
  {
    group: "OpenAI",
    label: "GPT-4.1 Mini",
    value: "gpt-4.1-mini",
  },
  {
    group: "Anthropic",
    label: "Claude Sonnet 4",
    value: "claude-sonnet-4",
  },
] as const;

export const CONTEXT_USAGE = [
  { title: "Input", value: 4200 },
  { title: "Output", value: 860 },
  { title: "Reasoning", value: 640 },
  { title: "Cache", value: 1200 },
] as const;

export const USER_TURNS: readonly DemoUserTurn[] = [
  {
    id: "user-scroll",
    label: "Fix streaming scroll",
    text: "I'm building a chat for our app and the scroll behavior is driving me nuts. Every time the AI streams a reply, the whole thread jumps around.",
  },
  {
    id: "user-inspect",
    label: "Inspect the thread",
    text: "Inspect the thread component and show me the failing test.",
  },
  {
    id: "user-plan",
    label: "Draft an approval plan",
    text: "Turn that into a plan I can approve.",
  },
];

export const SUGGESTIONS: readonly DemoSuggestion[] = USER_TURNS.map(
  (turn) => ({
    label: turn.label,
    text: turn.text,
  })
);

export const MESSAGE_EXTRAS: Record<string, DemoMessageExtras> = {
  "assistant-plan": {
    approval: "Allow applying the viewport pin and adding a regression test?",
    code: {
      code: `export function pinLatestTurn(node: HTMLElement) {
  node.scrollTop = node.scrollHeight;
}`,
      title: "lib/pin-latest-turn.ts",
    },
    plan: {
      description:
        "Pin the viewport, cover the jump with a test, then document the composer.",
      tasks: [
        {
          file: "message-scroller.tsx",
          status: "completed",
          title: "Keep the viewport on the latest turn",
        },
        {
          status: "in-progress",
          title: "Add a streaming scroll regression test",
        },
        {
          status: "pending",
          title: "Document composer layout outside the scrollport",
        },
      ],
      title: "Scroll fix rollout",
    },
  },
  "assistant-scroll": {
    reasoning: {
      content:
        "The jump happens because layout commits while tokens stream. MessageScroller should own the pin, and the composer should sit outside the scrollport.",
      duration: 4,
    },
    sources: [
      {
        href: "https://shark.vini.one/docs/ai-elements/message-scroller",
        title: "Message Scroller",
      },
      {
        href: "https://shark.vini.one/docs/ai-elements/prompt-input",
        title: "Prompt Input",
      },
    ],
  },
  "assistant-test": {
    diff: {
      file: "registry/react/components/message-scroller.tsx",
      lines: [
        { line: 48, text: "  stickToBottom();", type: "context" },
        { line: 49, text: "  restoreScroll();", type: "delete" },
        { line: 49, text: "  pinLatestTurn(viewport);", type: "add" },
        { line: 50, text: "}", type: "context" },
      ],
    },
    terminal: {
      header: "zsh · pnpm test",
      output: [
        "\u001B[34mRunning tests...\u001B[0m",
        "",
        " \u001B[32m✓\u001B[0m message-scroller › pins while streaming",
        " \u001B[31m✗\u001B[0m message-scroller › restores after layout",
        "",
        "\u001B[90m1 passed, 1 failed\u001B[0m",
      ].join("\n"),
    },
    tool: { file: "message-scroller.test.tsx", name: "Read" },
  },
  "user-scroll": {
    attachment: {
      description: "Markdown · 6 KB",
      name: "scroll-notes.md",
    },
  },
};

export const chat = createChatSimulator({ adapter: "ai-sdk" })
  .user(USER_TURNS[0].text, { id: USER_TURNS[0].id })
  .assistant(
    "MessageScroller keeps the viewport pinned to the latest turn while tokens stream, so the thread does not jump. Keep the composer outside the scrollport and show MessageScrollerButton when the user scrolls up.",
    { delayMs: 400, id: "assistant-scroll" }
  )
  .user(USER_TURNS[1].text, { id: USER_TURNS[1].id })
  .assistant(
    "The follow test fails because scroll restoration runs after layout. Pin the viewport during the stream and cover that path with a regression test.",
    { delayMs: 300, id: "assistant-test" }
  )
  .user(USER_TURNS[2].text, { id: USER_TURNS[2].id })
  .assistant(
    "Approve this rollout and I will apply the viewport pin, add the regression test, and document the composer layout.",
    { delayMs: 280, id: "assistant-plan" }
  );

export const getMessageText = (message: {
  parts: readonly { text?: string; type: string }[];
}) =>
  message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text ?? "")
    .join("");
