"use client";

import type React from "react";
import { useEffect, useRef } from "react";
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

const QuestionnaireInvalidDemo = () => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    formRef.current?.requestSubmit();
  }, []);

  return (
    <div className="w-full max-w-md">
      <Questionnaire items={items} onSubmit={handleSubmit} ref={formRef}>
        <QuestionnaireProgress />
        <QuestionnaireItem name="priority">
          <QuestionnaireTitle>How urgent is this request?</QuestionnaireTitle>
          <QuestionnaireDescription>
            Select a priority before continuing.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="low">Low priority</QuestionnaireChoice>
            <QuestionnaireChoice value="normal">
              Normal priority
            </QuestionnaireChoice>
            <QuestionnaireChoice value="high">
              High priority
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError>
            Choose a priority to submit the request.
          </QuestionnaireError>
        </QuestionnaireItem>
        <QuestionnaireItem name="channel">
          <QuestionnaireTitle>How should we follow up?</QuestionnaireTitle>
          <QuestionnaireDescription>
            Choose where we should send updates.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="email">Email</QuestionnaireChoice>
            <QuestionnaireChoice value="slack">Slack</QuestionnaireChoice>
            <QuestionnaireChoice value="none">No follow-up</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireNext />
          <QuestionnaireSubmit>Submit request</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  );
};

const items = [
  { name: "priority", required: true },
  { name: "channel", required: true },
] as const;

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const answers = new FormData(event.currentTarget);

  toast.create({
    description: [answers.get("priority"), answers.get("channel")]
      .map(String)
      .join(" · "),
    title: "Request submitted",
    type: "success",
  });
};

export default QuestionnaireInvalidDemo;
