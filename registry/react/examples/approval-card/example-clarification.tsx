"use client";

import { MessageCircleQuestionIcon } from "lucide-react";
import React from "react";
import {
  ApprovalCard,
  ApprovalCardAction,
  ApprovalCardChoice,
  ApprovalCardChoiceShortcut,
  ApprovalCardChoices,
  ApprovalCardContent,
  ApprovalCardError,
  ApprovalCardFooter,
  ApprovalCardHeader,
  ApprovalCardInput,
  ApprovalCardItem,
  type ApprovalCardItemChangeDetails,
  ApprovalCardItemDescription,
  ApprovalCardItemTitle,
  ApprovalCardNext,
  ApprovalCardPrevious,
  ApprovalCardProgress,
  ApprovalCardReject,
  ApprovalCardSubmit,
  ApprovalCardTitle,
} from "@/registry/react/components/approval-card";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const [item, setItem] = React.useState<string>(items[0].name);

  const handleItemChange = (details: ApprovalCardItemChangeDetails) =>
    setItem(details.item);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const answers = new FormData(event.currentTarget);

    const summary = items.map((question) =>
      answers
        .getAll(question.name)
        .map(
          (answer) =>
            question.choices.find((choice) => choice.value === answer)?.label ??
            String(answer)
        )
        .join(", ")
    );
    toast.create({
      description: `${summary.join(" · ")}. Ready to draft a plan.`,
      title: "Requirements confirmed",
      type: "success",
    });
  };
  const handleReject = () => {
    toast.create({
      description: "No requirements were confirmed.",
      title: "Questions dismissed",
      type: "info",
    });
  };

  return (
    <div className="w-full max-w-lg">
      <ApprovalCard
        item={item}
        items={items}
        onItemChange={handleItemChange}
        onReject={handleReject}
        onSubmit={handleSubmit}
        shortcuts="letters"
      >
        <ApprovalCardHeader>
          <MessageCircleQuestionIcon aria-hidden="true" />
          <ApprovalCardTitle>
            A couple of details before I plan
          </ApprovalCardTitle>
          <ApprovalCardAction>
            <ApprovalCardProgress className="text-xs" />
          </ApprovalCardAction>
        </ApprovalCardHeader>
        <ApprovalCardContent>
          {items.map((question) => (
            <ApprovalCardItem key={question.name} name={question.name}>
              <ApprovalCardItemTitle>{question.title}</ApprovalCardItemTitle>
              <ApprovalCardItemDescription>
                {question.description}
              </ApprovalCardItemDescription>
              <ApprovalCardChoices>
                {question.choices.map((choice) => (
                  <ApprovalCardChoice key={choice.value} value={choice.value}>
                    {choice.label}
                    <span className="text-muted-foreground">
                      {choice.description}
                    </span>
                    <ApprovalCardChoiceShortcut />
                  </ApprovalCardChoice>
                ))}
                {"input" in question && question.input ? (
                  <ApprovalCardInput
                    aria-label={question.input.label}
                    placeholder={question.input.placeholder}
                  />
                ) : null}
              </ApprovalCardChoices>
              <ApprovalCardError />
            </ApprovalCardItem>
          ))}
        </ApprovalCardContent>
        <ApprovalCardFooter>
          <ApprovalCardPrevious />
          <ApprovalCardReject>Cancel</ApprovalCardReject>
          <ApprovalCardNext />
          <ApprovalCardSubmit>Confirm requirements</ApprovalCardSubmit>
        </ApprovalCardFooter>
      </ApprovalCard>
    </div>
  );
};

const items = [
  {
    choices: [
      {
        description: "Open in Sheets or Excel.",
        label: "CSV for spreadsheets",
        value: "csv",
      },
      {
        description: "Pipe into another system.",
        label: "JSON for integrations",
        value: "json",
      },
    ],
    description: "Choose one or more formats.",
    multiple: true,
    name: "formats",
    required: true,
    title: "Which export formats do you need?",
  },
  {
    choices: [
      {
        description: "Honor search, date, and status filters.",
        label: "Orders matching the current filters",
        value: "filtered",
      },
      {
        description: "Export only the rows you selected.",
        label: "Only the selected rows",
        value: "selected",
      },
      {
        description: "Leave later pages out of this export.",
        label: "Only the current page",
        value: "page",
      },
    ],
    description: "Choose a scope or describe a different requirement.",
    input: {
      label: "Another export scope",
      placeholder: "Describe another export scope…",
    },
    name: "scope",
    required: true,
    title: "Which orders should be exported?",
  },
] as const;

export default Example;
