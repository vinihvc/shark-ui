"use client";

import { TerminalIcon } from "lucide-react";
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

const ApprovalCardCommandDemo = () => {
  const [result, setResult] = useState<string>();
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Approved the staging migration only.");
  };
  const handleReject = () =>
    setResult("Migration rejected. No database changes authorized.");
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <ApprovalCard onReject={handleReject} onSubmit={handleSubmit}>
        <ApprovalCardHeader>
          <ApprovalCardIcon>
            <TerminalIcon aria-hidden="true" />
          </ApprovalCardIcon>
          <div className="flex min-w-0 flex-col gap-1">
            <ApprovalCardTitle>Apply the staging migration?</ApprovalCardTitle>
            <ApprovalCardDescription>
              Add the order export jobs table before verifying the new feature.
            </ApprovalCardDescription>
          </div>
        </ApprovalCardHeader>
        <ApprovalCardContent className="flex flex-col gap-3">
          <pre className="overflow-x-auto rounded-lg border bg-muted/40 px-3 py-2 font-mono text-xs">
            <code>pnpm db:migrate --env staging</code>
          </pre>
          <p className="text-muted-foreground text-xs">
            Working directory: ~/projects/storefront. This changes the staging
            database schema. Production is not targeted.
          </p>
        </ApprovalCardContent>
        <ApprovalCardFooter>
          <ApprovalCardActions>
            <ApprovalCardReject>Reject</ApprovalCardReject>
            <ApprovalCardApprove>Run migration</ApprovalCardApprove>
          </ApprovalCardActions>
        </ApprovalCardFooter>
      </ApprovalCard>
      <p aria-live="polite" className="text-muted-foreground text-sm">
        {result}
      </p>
    </div>
  );
};

export default ApprovalCardCommandDemo;
