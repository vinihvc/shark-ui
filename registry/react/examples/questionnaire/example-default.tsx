"use client";

import type React from "react";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceShortcut,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/registry/react/components/questionnaire";
import { toast } from "@/registry/react/components/toast";

const QuestionnaireDemo = () => {
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const answers = new FormData(event.currentTarget);

    const selections = items.flatMap((question) => {
      const labels = answers.getAll(question.name).map((value) => {
        const answer = String(value);

        return (
          question.choices.find((choice) => choice.value === answer)?.label ??
          answer
        );
      });

      return labels.length ? [labels.join("\n")] : [];
    });

    toast.create({
      description: selections.join(" · "),
      title: "Plan saved",
      type: "success",
    });
  };

  return (
    <div className="flex w-full max-w-lg flex-col gap-4">
      <Questionnaire items={items} onSubmit={handleSubmit} shortcuts="letters">
        <QuestionnaireProgress />
        {items.map((question) => (
          <QuestionnaireItem key={question.name} name={question.name}>
            <QuestionnaireTitle>{question.title}</QuestionnaireTitle>
            <QuestionnaireDescription>
              {question.description}
            </QuestionnaireDescription>
            <QuestionnaireChoices>
              {question.choices.map((choice) => (
                <QuestionnaireChoice
                  className="py-1.5"
                  key={choice.value}
                  value={choice.value}
                >
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="font-medium">{choice.label}</span>
                    <span className="text-muted-foreground">
                      {choice.description}
                    </span>
                  </span>
                  <QuestionnaireChoiceShortcut />
                </QuestionnaireChoice>
              ))}
              {question.input ? (
                <QuestionnaireInput
                  aria-label={question.input.label}
                  placeholder={question.input.placeholder}
                />
              ) : null}
            </QuestionnaireChoices>
            <QuestionnaireError />
          </QuestionnaireItem>
        ))}
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireNext />
          <QuestionnaireSubmit>Save preferences</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  );
};

const items = [
  {
    choices: [
      {
        description: "Show what the agent ran and what came back.",
        label: "Tool call timeline",
        value: "timeline",
      },
      {
        description: "Ask before sensitive or destructive actions.",
        label: "Approval checkpoints",
        value: "approval",
      },
      {
        description: "Make delegated work and results easier to follow.",
        label: "Sub-agent handoffs",
        value: "handoffs",
      },
    ],
    description: "Choose a direction or describe another task.",
    input: {
      label: "Describe another feature",
      placeholder: "Describe another feature…",
    },
    name: "direction",
    required: true,
    title: "What should the agent build next?",
  },
  {
    choices: [
      {
        description: "A short note after each milestone.",
        label: "Concise",
        value: "concise",
      },
      {
        description: "Decisions, risks, and next steps.",
        label: "Detailed",
        value: "detailed",
      },
      {
        description: "A complete engineering handoff.",
        label: "Full review",
        value: "full",
      },
    ],
    description: "Choose how much context every update should include.",
    input: undefined,
    name: "progress",
    required: true,
    title: "What should every progress update include?",
  },
  {
    choices: [
      {
        description: "Begin as soon as approval is received.",
        label: "Start now",
        value: "now",
      },
      {
        description: "Schedule it after the current work.",
        label: "Next development cycle",
        value: "next",
      },
      {
        description: "Keep it ready for a later decision.",
        label: "Add it to the backlog",
        value: "backlog",
      },
    ],
    description: "Choose when the work should begin.",
    input: undefined,
    name: "start",
    required: true,
    title: "When should work begin?",
  },
] as const;

export default QuestionnaireDemo;
