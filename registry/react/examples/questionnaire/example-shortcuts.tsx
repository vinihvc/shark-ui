"use client";

import type React from "react";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceShortcut,
  QuestionnaireChoices,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/registry/react/components/questionnaire";
import { toast } from "@/registry/react/components/toast";

const QuestionnaireLetterShortcutsDemo = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const answer = String(new FormData(event.currentTarget).get("format"));
    const label = items[0].choices.find(
      (choice) => choice.value === answer
    )?.label;

    toast.create({
      description: label,
      title: "Format saved",
      type: "success",
    });
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Questionnaire items={items} onSubmit={handleSubmit} shortcuts="letters">
        <QuestionnaireProgress />
        <QuestionnaireItem name="format">
          <QuestionnaireTitle>Which format should we use?</QuestionnaireTitle>
          <QuestionnaireChoices>
            {items[0].choices.map((choice) => (
              <QuestionnaireChoice key={choice.value} value={choice.value}>
                {choice.label}
                <QuestionnaireChoiceShortcut />
              </QuestionnaireChoice>
            ))}
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnaireNext />
          <QuestionnaireSubmit>Save format</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  );
};

const items = [
  {
    choices: [
      { label: "Short update", value: "short" },
      { label: "Detailed brief", value: "detailed" },
      { label: "Slide deck", value: "slides" },
    ],
    name: "format",
    required: true,
  },
] as const;

export default QuestionnaireLetterShortcutsDemo;
