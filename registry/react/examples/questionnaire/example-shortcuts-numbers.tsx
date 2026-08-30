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

const QuestionnaireNumberShortcutsDemo = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const answer = String(new FormData(event.currentTarget).get("priority"));
    const label = items[0].choices.find(
      (choice) => choice.value === answer
    )?.label;

    toast.create({
      description: label,
      title: "Priority saved",
      type: "success",
    });
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Questionnaire items={items} onSubmit={handleSubmit} shortcuts="numbers">
        <QuestionnaireProgress />
        <QuestionnaireItem name="priority">
          <QuestionnaireTitle>What is the priority?</QuestionnaireTitle>
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
          <QuestionnaireSubmit>Save priority</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  );
};

const items = [
  {
    choices: [
      { label: "Low", value: "low" },
      { label: "Medium", value: "medium" },
      { label: "High", value: "high" },
    ],
    name: "priority",
    required: true,
  },
] as const;

export default QuestionnaireNumberShortcutsDemo;
