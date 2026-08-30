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
      description: answers.getAll("interests").map(String).join(" · "),
      title: "Interests saved",
      type: "success",
    });
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Questionnaire items={items} onSubmit={handleSubmit}>
        <QuestionnaireItem name="interests">
          <QuestionnaireTitle>What would you like to learn?</QuestionnaireTitle>
          <QuestionnaireDescription>
            Select at least one topic. You can also add another interest.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="design">
              Interface design
            </QuestionnaireChoice>
            <QuestionnaireChoice value="development">
              Web development
            </QuestionnaireChoice>
            <QuestionnaireChoice value="accessibility">
              Accessibility
            </QuestionnaireChoice>
            <QuestionnaireInput
              aria-label="Another learning interest"
              placeholder="Add another topic…"
            />
          </QuestionnaireChoices>
          <QuestionnaireError>
            Select a topic or add your own.
          </QuestionnaireError>
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnaireSubmit>Save interests</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  );
};

const items = [{ multiple: true, name: "interests", required: true }] as const;

export default QuestionnaireDemo;
