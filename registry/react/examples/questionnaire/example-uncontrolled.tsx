"use client";

import type React from "react";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/registry/react/components/questionnaire";
import { toast } from "@/registry/react/components/toast";

const QuestionnaireUncontrolledDemo = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const answers = new FormData(event.currentTarget);
    const selections = items.map((question) => {
      const answer = String(answers.get(question.name));
      return question.choices.find((choice) => choice.value === answer)?.label;
    });

    toast.create({
      description: selections.filter(Boolean).join(" · "),
      title: "Preferences saved",
      type: "success",
    });
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Questionnaire
        defaultItem="updates"
        defaultValue={{
          updates: { input: "", values: ["weekly"] },
          workspace: { input: "", values: ["team"] },
        }}
        items={items}
        onSubmit={handleSubmit}
      >
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
                </QuestionnaireChoice>
              ))}
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
      { label: "Personal projects", value: "personal" },
      { label: "With a team", value: "team" },
      { label: "Client work", value: "clients" },
    ],
    description: "Choose the setup that fits your day-to-day work.",
    name: "workspace",
    required: true,
    title: "How will you use your workspace?",
  },
  {
    choices: [
      { label: "Daily digest", value: "daily" },
      { label: "Weekly summary", value: "weekly" },
      { label: "No email updates", value: "none" },
    ],
    description: "You can change this preference later.",
    name: "updates",
    required: true,
    title: "How often would you like updates?",
  },
] as const;

export default QuestionnaireUncontrolledDemo;
