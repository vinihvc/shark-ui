import type { ChatMessage } from "./components/chat-thread";

export const LAUNCH_PLAN_MESSAGES: readonly ChatMessage[] = [
  {
    attachment: {
      description: "PDF · 1.2 MB",
      name: "launch-brief.pdf",
    },
    content: "Turn this launch brief into a concise plan for the product team.",
    id: "launch-user",
    role: "user",
  },
  {
    approvalPlan: {
      steps: [
        { id: "1", title: "Confirm audience and release boundary" },
        { id: "2", title: "Assign owners to launch risks" },
        { id: "3", title: "Draft weekly milestone reviews" },
        { id: "4", title: "Publish one-page summary" },
      ],
      summary:
        "Lock scope, assign risk owners, and turn the brief into weekly milestones.",
      title: "Launch plan",
    },
    confirmation: "Allow reading launch-brief.pdf for planning context?",
    content:
      "Start with three decisions: confirm the audience, lock the release boundary, and assign one owner to each launch risk. Then turn the brief into milestones that can be reviewed weekly.",
    id: "launch-assistant",
    plan: {
      description: "Audience, risks, then weekly milestones.",
      tasks: [
        {
          file: "launch-brief.pdf",
          status: "completed",
          title: "Extract decisions from the brief",
        },
        {
          status: "in-progress",
          title: "Draft milestone checklist",
        },
      ],
      title: "Launch readiness",
    },
    reasoning: {
      content:
        "The brief already names the audience and three launch risks. I should convert those into owned decisions and a weekly review cadence instead of inventing new workstreams.",
      duration: 6,
    },
    role: "assistant",
    sources: [
      {
        href: "https://shark.vini.one/docs",
        title: "Shark UI Docs",
      },
      {
        href: "https://ark-ui.com",
        title: "Ark UI",
      },
    ],
    tool: {
      file: "launch-brief.pdf",
      name: "Read",
      pathLabel: "File",
    },
  },
];
