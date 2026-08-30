"use client";

import { ShieldCheckIcon } from "lucide-react";
import { type SubmitEvent, useState } from "react";
import {
  ApprovalCard,
  ApprovalCardActions,
  ApprovalCardApprove,
  ApprovalCardContent,
  ApprovalCardDescription,
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
  QuestionnaireTitle,
} from "@/registry/react/components/questionnaire";

const ApprovalCardPermissionScopeDemo = () => {
  const [result, setResult] = useState("");
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const answers = new FormData(event.currentTarget);
    const scope = answers.get("scope");
    if (scope === "once") {
      setResult("Approved this run only. Future commands still need approval.");
    } else if (scope === "project") {
      setResult(
        "Approved pnpm test for this repository, including future sessions."
      );
    }
  };
  const handleReject = () => setResult("Denied. No command was authorized.");

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <ApprovalCard
        items={items}
        onReject={handleReject}
        onSubmit={handleSubmit}
        shortcuts="numbers"
      >
        <ApprovalCardHeader>
          <ApprovalCardIcon>
            <ShieldCheckIcon aria-hidden="true" />
          </ApprovalCardIcon>
          <div className="flex min-w-0 flex-col gap-1">
            <ApprovalCardTitle>Allow the agent to run tests?</ApprovalCardTitle>
            <ApprovalCardDescription>
              Verify the pagination fix in ~/projects/storefront.
            </ApprovalCardDescription>
          </div>
        </ApprovalCardHeader>
        <ApprovalCardContent>
          <pre className="overflow-x-auto rounded-lg border bg-muted/40 px-3 py-2 font-mono text-xs">
            <code>pnpm test</code>
          </pre>
        </ApprovalCardContent>
        <ApprovalCardContent>
          <QuestionnaireItem name="scope">
            <QuestionnaireTitle>
              How long should approval last?
            </QuestionnaireTitle>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="once">
                <span className="flex min-w-0 flex-col gap-1">
                  <span>Allow once</span>
                  <span className="text-muted-foreground">
                    Ask again for the next run.
                  </span>
                </span>
                <QuestionnaireChoiceShortcut />
              </QuestionnaireChoice>
              <QuestionnaireChoice value="project">
                <span className="flex min-w-0 flex-col gap-1">
                  <span>Remember for this repository</span>
                  <span className="text-muted-foreground">
                    Only pnpm test, not other commands.
                  </span>
                </span>
                <QuestionnaireChoiceShortcut />
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireError>Choose an approval scope.</QuestionnaireError>
          </QuestionnaireItem>
        </ApprovalCardContent>
        <ApprovalCardFooter>
          <ApprovalCardActions>
            <ApprovalCardReject>Deny</ApprovalCardReject>
            <ApprovalCardApprove>Allow command</ApprovalCardApprove>
          </ApprovalCardActions>
        </ApprovalCardFooter>
      </ApprovalCard>
      <p aria-live="polite" className="text-muted-foreground text-sm">
        {result}
      </p>
    </div>
  );
};

const items = [{ name: "scope", required: true }] as const;

export default ApprovalCardPermissionScopeDemo;
