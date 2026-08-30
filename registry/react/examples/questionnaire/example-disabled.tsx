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

const QuestionnaireDisabledDemo = () => (
  <div className="w-full max-w-md">
    <Questionnaire items={items} onSubmit={handleSubmit}>
      <QuestionnaireItem name="plan">
        <QuestionnaireTitle>Which plan should we activate?</QuestionnaireTitle>
        <QuestionnaireDescription>
          Enterprise is unavailable on the current workspace.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="starter">Starter</QuestionnaireChoice>
          <QuestionnaireChoice value="team">Team</QuestionnaireChoice>
          <QuestionnaireChoice disabled value="enterprise">
            Enterprise
          </QuestionnaireChoice>
          <QuestionnaireInput
            aria-label="Custom plan"
            disabled
            placeholder="Custom plans are unavailable"
          />
        </QuestionnaireChoices>
        <QuestionnaireError>Choose an available plan.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnaireSubmit>Activate plan</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  </div>
);

const items = [{ name: "plan", required: true }] as const;

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const answer = String(new FormData(event.currentTarget).get("plan"));
  const label = choices.find((choice) => choice.value === answer)?.label;

  toast.create({
    description: label,
    title: "Plan activated",
    type: "success",
  });
};

const choices = [
  { label: "Starter", value: "starter" },
  { label: "Team", value: "team" },
  { label: "Enterprise", value: "enterprise" },
] as const;

export default QuestionnaireDisabledDemo;
