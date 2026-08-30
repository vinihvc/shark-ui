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
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/registry/react/components/questionnaire";
import { toast } from "@/registry/react/components/toast";

const QuestionnaireDemo = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const answers = new FormData(event.currentTarget);
    toast.create({
      description: String(answers.get("destination")),
      title: "Destination saved",
      type: "success",
    });
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Questionnaire items={items} onSubmit={handleSubmit}>
        <QuestionnaireItem name="destination">
          <QuestionnaireTitle>Where would you like to go?</QuestionnaireTitle>
          <QuestionnaireDescription>
            Choose a destination or write your own. Typing replaces the selected
            option.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="mountains">
              The mountains
            </QuestionnaireChoice>
            <QuestionnaireChoice value="coast">The coast</QuestionnaireChoice>
            <QuestionnaireChoice value="city">A new city</QuestionnaireChoice>
            <QuestionnaireInput
              aria-label="Another destination"
              placeholder="Describe another destination…"
            />
          </QuestionnaireChoices>
          <QuestionnaireError>
            Choose a destination or enter your own.
          </QuestionnaireError>
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnaireSubmit>Save destination</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  );
};

const items = [{ name: "destination", required: true }] as const;

export default QuestionnaireDemo;
