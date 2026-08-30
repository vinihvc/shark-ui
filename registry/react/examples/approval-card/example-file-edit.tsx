"use client";

import { FilePenLineIcon } from "lucide-react";
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
  Diff,
  DiffContent,
  DiffFile,
  DiffHeader,
  DiffLine,
  DiffStats,
} from "@/registry/react/components/diff";

const ApprovalCardFileEditDemo = () => {
  const [result, setResult] = useState("");
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Approved this patch to pagination.ts only.");
  };
  const handleReject = () =>
    setResult("Patch rejected. Keep the current file.");

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <ApprovalCard onReject={handleReject} onSubmit={handleSubmit}>
        <ApprovalCardHeader>
          <ApprovalCardIcon>
            <FilePenLineIcon aria-hidden="true" />
          </ApprovalCardIcon>
          <div className="flex min-w-0 flex-col gap-1">
            <ApprovalCardTitle>Apply this file change?</ApprovalCardTitle>
            <ApprovalCardDescription>
              Fix the first page skipping the first 20 orders.
            </ApprovalCardDescription>
          </div>
        </ApprovalCardHeader>
        <ApprovalCardContent>
          <Diff>
            <DiffHeader>
              <DiffFile>src/lib/pagination.ts</DiffFile>
              <DiffStats added={1} removed={1} />
            </DiffHeader>
            <DiffContent>
              <DiffLine line={1}>
                {"export function getOffset(page: number) {"}
              </DiffLine>
              <DiffLine line={2}>{"  const pageSize = 20;"}</DiffLine>
              <DiffLine line={3} type="delete">
                {"  return page * pageSize;"}
              </DiffLine>
              <DiffLine line={3} type="add">
                {"  return (page - 1) * pageSize;"}
              </DiffLine>
              <DiffLine line={4}>{"}"}</DiffLine>
            </DiffContent>
          </Diff>
        </ApprovalCardContent>
        <ApprovalCardFooter>
          <ApprovalCardActions>
            <ApprovalCardReject>Keep file</ApprovalCardReject>
            <ApprovalCardApprove>Apply patch</ApprovalCardApprove>
          </ApprovalCardActions>
        </ApprovalCardFooter>
      </ApprovalCard>
      <p aria-live="polite" className="text-muted-foreground text-sm">
        {result}
      </p>
    </div>
  );
};

export default ApprovalCardFileEditDemo;
