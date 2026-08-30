"use client";

import type React from "react";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/registry/react/components/questionnaire";
import { toast } from "@/registry/react/components/toast";

const QuestionnaireDemo = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const answers = new FormData(event.currentTarget);
    const selections = items.flatMap((question) =>
      answers.getAll(question.name).map((value) => String(value))
    );

    toast.create({
      description: selections.join(" · ") || "No additional feedback",
      title: "Feedback sent",
      type: "success",
    });
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Questionnaire items={items} onSubmit={handleSubmit}>
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
            {question.name === "notes" ? (
              <QuestionnaireInput
                aria-label="Additional feedback"
                placeholder="Anything else we should know?"
              />
            ) : null}
            <QuestionnaireError />
          </QuestionnaireItem>
        ))}
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireSkip />
          <QuestionnaireNext />
          <QuestionnaireSubmit>Send feedback</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  );
};

const items = [
  {
    choices: [
      { label: "Great", value: "great" },
      { label: "Good", value: "good" },
      { label: "Could be better", value: "poor" },
    ],
    description: "Tell us about your experience.",
    name: "experience",
    required: true,
    title: "How was your visit?",
  },
  {
    choices: [
      { label: "Longer opening hours", value: "hours" },
      { label: "More seating", value: "seating" },
    ],
    description:
      "This question is optional. Skip it to leave your feedback blank.",
    name: "notes",
    required: false,
    title: "Is there anything you would change?",
  },
  {
    choices: [
      { label: "Definitely", value: "definitely" },
      { label: "Maybe", value: "maybe" },
      { label: "Not yet", value: "not-yet" },
    ],
    description: "This question is optional.",
    name: "recommend",
    required: false,
    title: "Would you recommend us to a friend?",
  },
] as const;

export default QuestionnaireDemo;
