"use client";

import { CornerDownLeftIcon, MessageCircleQuestionIcon } from "lucide-react";
import type React from "react";
import {
  ApprovalCard,
  ApprovalCardAction,
  ApprovalCardChoice,
  ApprovalCardChoiceShortcut,
  ApprovalCardChoices,
  ApprovalCardContent,
  ApprovalCardFooter,
  ApprovalCardHeader,
  ApprovalCardItem,
  ApprovalCardItemDescription,
  ApprovalCardItemTitle,
  ApprovalCardNext,
  ApprovalCardPrevious,
  ApprovalCardProgress,
  ApprovalCardSkip,
  ApprovalCardSubmit,
  ApprovalCardTitle,
} from "@/registry/react/components/approval-card";
import { toast } from "@/registry/react/components/toast";

const ApprovalCardDemo = () => {
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const answers = {
      direction: formData.get("direction"),
      signals: formData.getAll("signals"),
      timing: formData.get("timing"),
    };

    toast.create({
      description: `${answers.direction} · ${answers.signals.length} signals · ${answers.timing}`,
      title: "Handoff approved",
      type: "success",
    });
  };

  return (
    <div className="w-full max-w-lg">
      <ApprovalCard items={items} onSubmit={handleSubmit} shortcuts="letters">
        <ApprovalCardHeader>
          <MessageCircleQuestionIcon aria-hidden="true" />
          <ApprovalCardTitle>Prepare the handoff</ApprovalCardTitle>
          <ApprovalCardAction>
            <ApprovalCardProgress />
          </ApprovalCardAction>
        </ApprovalCardHeader>
        <ApprovalCardContent>
          {items.map((item) => (
            <ApprovalCardItem key={item.name} name={item.name}>
              <ApprovalCardItemTitle>{item.title}</ApprovalCardItemTitle>
              <ApprovalCardItemDescription>
                {item.description}
              </ApprovalCardItemDescription>
              <ApprovalCardChoices>
                {item.choices.map((choice) => (
                  <ApprovalCardChoice key={choice.value} value={choice.value}>
                    {choice.label}
                    <ApprovalCardChoiceShortcut />
                  </ApprovalCardChoice>
                ))}
              </ApprovalCardChoices>
            </ApprovalCardItem>
          ))}
        </ApprovalCardContent>
        <ApprovalCardFooter>
          <ApprovalCardPrevious />
          <ApprovalCardSkip />
          <ApprovalCardNext>
            Next
            <CornerDownLeftIcon />
          </ApprovalCardNext>
          <ApprovalCardSubmit>
            Approve handoff
            <CornerDownLeftIcon />
          </ApprovalCardSubmit>
        </ApprovalCardFooter>
      </ApprovalCard>
    </div>
  );
};

const items = [
  {
    choices: [
      {
        description: "Show what the agent ran and what came back.",
        label: "Tool call timeline",
        value: "tool-calls",
      },
      {
        description: "Ask before sensitive or destructive actions.",
        label: "Approval checkpoints",
        value: "approvals",
      },
      {
        description: "Make delegated work and results easier to follow.",
        label: "Sub-agent handoffs",
        value: "handoffs",
      },
    ],
    description: "Choose a direction or describe another task.",
    input: {
      label: "Another agent feature",
      placeholder: "Describe another feature…",
    },
    name: "direction",
    required: true,
    title: "What should the agent build next?",
  },
  {
    choices: [
      { label: "Progress", value: "progress" },
      { label: "Decisions", value: "decisions" },
      { label: "Risks", value: "risks" },
      { label: "Next step", value: "next-step" },
    ],
    description: "Select all that apply, or skip this question.",
    multiple: true,
    name: "signals",
    required: false,
    title: "What should every progress update include?",
  },
  {
    choices: [
      { label: "Start now", value: "now" },
      { label: "Next development cycle", value: "next-cycle" },
      { label: "Add it to the backlog", value: "backlog" },
    ],
    description: "Choose when the agent should begin the work.",
    name: "timing",
    required: true,
    title: "When should work begin?",
  },
] as const;

export default ApprovalCardDemo;
