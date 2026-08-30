"use client";

import { MessageCircleQuestionIcon } from "lucide-react";
import React, { type SubmitEvent } from "react";
import {
  ApprovalCard,
  ApprovalCardActions,
  ApprovalCardApprove,
  ApprovalCardContent,
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
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireTitle,
} from "@/registry/react/components/questionnaire";

const ApprovalCardDemo = () => {
  const [result, setResult] = React.useState<string>();

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const answers = new FormData(event.currentTarget);
    setResult(String(answers.get("format") ?? "Approved"));
  };

  const handleReject = () => setResult("Rejected");

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <ApprovalCard
        items={items}
        onReject={handleReject}
        onSubmit={handleSubmit}
        shortcuts="letters"
      >
        <ApprovalCardHeader>
          <ApprovalCardIcon>
            <MessageCircleQuestionIcon aria-hidden="true" />
          </ApprovalCardIcon>
          <ApprovalCardTitle>Choose a handoff format</ApprovalCardTitle>
        </ApprovalCardHeader>
        <ApprovalCardContent>
          <QuestionnaireProgress />
          <QuestionnaireItem className="mt-3" name="format">
            <QuestionnaireTitle>
              How should we share the update?
            </QuestionnaireTitle>
            <QuestionnaireChoices className="mt-3">
              <QuestionnaireChoice value="summary">
                Short summary
                <QuestionnaireChoiceShortcut />
              </QuestionnaireChoice>
              <QuestionnaireChoice value="brief">
                Detailed brief
                <QuestionnaireChoiceShortcut />
              </QuestionnaireChoice>
              <QuestionnaireChoice value="slides">
                Slide deck
                <QuestionnaireChoiceShortcut />
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireError className="mt-2" />
          </QuestionnaireItem>
        </ApprovalCardContent>
        <ApprovalCardFooter>
          <QuestionnairePrevious />
          <ApprovalCardActions>
            <ApprovalCardReject>Skip</ApprovalCardReject>
            <QuestionnaireNext />
            <ApprovalCardApprove>Approve format</ApprovalCardApprove>
          </ApprovalCardActions>
        </ApprovalCardFooter>
      </ApprovalCard>
      {result ? <p aria-live="polite">{result}</p> : null}
    </div>
  );
};

const items = [{ name: "format", required: true }] as const;

export default ApprovalCardDemo;
