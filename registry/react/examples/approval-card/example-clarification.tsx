"use client";

import { MessageCircleQuestionIcon } from "lucide-react";
import { type SubmitEvent, useState } from "react";
import {
  ApprovalCard,
  ApprovalCardActions,
  ApprovalCardApprove,
  ApprovalCardContent,
  ApprovalCardDescription,
  ApprovalCardFooter,
  ApprovalCardHeader,
  ApprovalCardIcon,
  ApprovalCardReject,
  ApprovalCardTitle,
} from "@/registry/react/components/approval-card";
import {
  QuestionnaireChoice,
  QuestionnaireChoiceShortcut,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  type QuestionnaireItemChangeDetails,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireTitle,
} from "@/registry/react/components/questionnaire";

const ApprovalCardClarificationDemo = () => {
  const [item, setItem] = useState<string>(items[0].name);
  const [result, setResult] = useState("");
  const handleItemChange = (details: QuestionnaireItemChangeDetails) =>
    setItem(details.item);
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
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
    setResult(
      `Requirements confirmed: ${summary.join(" · ")}. Ready to draft a plan.`
    );
  };
  const handleReject = () =>
    setResult("Questions dismissed. No requirements confirmed.");

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <ApprovalCard
        item={item}
        items={items}
        onItemChange={handleItemChange}
        onReject={handleReject}
        onSubmit={handleSubmit}
        shortcuts="letters"
      >
        <ApprovalCardHeader>
          <ApprovalCardIcon>
            <MessageCircleQuestionIcon aria-hidden="true" />
          </ApprovalCardIcon>
          <div className="flex min-w-0 flex-col gap-1">
            <ApprovalCardTitle>
              A couple of details before I plan
            </ApprovalCardTitle>
            <ApprovalCardDescription>
              Confirm what the orders export should include.
            </ApprovalCardDescription>
          </div>
        </ApprovalCardHeader>
        <ApprovalCardContent className="flex flex-col gap-4">
          <QuestionnaireProgress />
          {items.map((question) => (
            <QuestionnaireItem key={question.name} name={question.name}>
              <QuestionnaireTitle>{question.title}</QuestionnaireTitle>
              <QuestionnaireDescription>
                {question.description}
              </QuestionnaireDescription>
              <QuestionnaireChoices>
                {question.choices.map((choice) => (
                  <QuestionnaireChoice key={choice.value} value={choice.value}>
                    {choice.label}
                    <QuestionnaireChoiceShortcut />
                  </QuestionnaireChoice>
                ))}
                {question.name === "scope" ? (
                  <QuestionnaireInput
                    aria-label="Another export scope"
                    placeholder="Describe another export scope…"
                  />
                ) : null}
              </QuestionnaireChoices>
              <QuestionnaireError />
            </QuestionnaireItem>
          ))}
        </ApprovalCardContent>
        <ApprovalCardFooter>
          <QuestionnairePrevious />
          <ApprovalCardActions>
            <ApprovalCardReject>Cancel</ApprovalCardReject>
            <QuestionnaireNext />
            {item === items.at(-1)?.name ? (
              <ApprovalCardApprove>Confirm requirements</ApprovalCardApprove>
            ) : null}
          </ApprovalCardActions>
        </ApprovalCardFooter>
      </ApprovalCard>
      <p aria-live="polite" className="text-muted-foreground text-sm">
        {result}
      </p>
    </div>
  );
};

const items = [
  {
    choices: [
      { label: "CSV for spreadsheets", value: "csv" },
      { label: "JSON for integrations", value: "json" },
    ],
    description: "Choose one or more formats.",
    multiple: true,
    name: "formats",
    required: true,
    title: "Which export formats do you need?",
  },
  {
    choices: [
      { label: "All orders matching the active filters", value: "filtered" },
      { label: "Only the selected rows", value: "selected" },
      { label: "Only the current page", value: "page" },
    ],
    description: "Choose a scope or describe a different requirement.",
    name: "scope",
    required: true,
    title: "Which orders should be exported?",
  },
] as const;

export default ApprovalCardClarificationDemo;
