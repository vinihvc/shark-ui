"use client";

import { SlidersHorizontalIcon } from "lucide-react";
import { type SubmitEvent, useState } from "react";
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
  type ApprovalCardValue,
  type ApprovalCardValueChangeDetails,
} from "@/registry/react/components/approval-card";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const [item, setItem] = useState(items[0].name);
  const [value, setValue] = useState<ApprovalCardValue>({});

  const handleItemChange = (details: ApprovalCardItemChangeDetails) => {
    setItem(details.item);
  };

  const handleValueChange = (details: ApprovalCardValueChangeDetails) => {
    setValue(details.value);
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const selections = items.map((question) => {
      const answer = String(formData.get(question.name));
      return question.choices.find((choice) => choice.value === answer)?.label;
    });

    toast.create({
      description: selections.filter(Boolean).join(" · "),
      title: "Preferences saved",
      type: "success",
    });
  };

  const handleReject = () => {
    toast.create({
      description: "No preferences were saved.",
      title: "Changes discarded",
      type: "info",
    });
  };

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <p className="text-muted-foreground text-sm">Current question: {item}</p>
      <ApprovalCard
        item={item}
        items={items}
        onItemChange={handleItemChange}
        onReject={handleReject}
        onSubmit={handleSubmit}
        onValueChange={handleValueChange}
        shortcuts="letters"
        value={value}
      >
        <ApprovalCardHeader>
          <SlidersHorizontalIcon aria-hidden="true" />
          <ApprovalCardTitle>Configure review preferences</ApprovalCardTitle>
          <ApprovalCardAction>
            <ApprovalCardProgress />
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
                    <ApprovalCardChoiceShortcut />
                  </ApprovalCardChoice>
                ))}
              </ApprovalCardChoices>
              <ApprovalCardError />
            </ApprovalCardItem>
          ))}
        </ApprovalCardContent>
        <ApprovalCardFooter>
          <ApprovalCardPrevious />
          <ApprovalCardReject className="col-start-2">
            Discard
          </ApprovalCardReject>
          <ApprovalCardNext />
          <ApprovalCardSubmit>Save preferences</ApprovalCardSubmit>
        </ApprovalCardFooter>
      </ApprovalCard>
    </div>
  );
};

const items = [
  {
    choices: [
      { label: "Before every command", value: "always" },
      { label: "Only for risky commands", value: "risky" },
      { label: "Never ask again", value: "never" },
    ],
    description: "Choose when the agent should request confirmation.",
    name: "approvals",
    required: true,
    title: "When should the agent ask for approval?",
  },
  {
    choices: [
      { label: "Show a concise summary", value: "summary" },
      { label: "Include commands and changed files", value: "detailed" },
      { label: "Only report failures", value: "failures" },
    ],
    description: "Choose the level of detail for completed work.",
    name: "updates",
    required: true,
    title: "What should progress updates include?",
  },
] as const;

export default Example;
