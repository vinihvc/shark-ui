"use client";

import { FilePenLineIcon } from "lucide-react";
import type { SubmitEvent } from "react";
import {
  ApprovalCard,
  ApprovalCardContent,
  ApprovalCardFooter,
  ApprovalCardHeader,
  ApprovalCardReject,
  ApprovalCardSubmit,
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
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.create({
      description: "Approved this patch to pagination.ts only.",
      title: "Patch approved",
      type: "success",
    });
  };
  const handleReject = () => {
    toast.create({
      description: "The current file will remain unchanged.",
      title: "Patch rejected",
      type: "info",
    });
  };

  return (
    <div className="w-full max-w-lg">
      <ApprovalCard onReject={handleReject} onSubmit={handleSubmit}>
        <ApprovalCardHeader>
          <FilePenLineIcon aria-hidden="true" />
          <ApprovalCardTitle>Apply this file change?</ApprovalCardTitle>
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
          <ApprovalCardReject>Keep file</ApprovalCardReject>
          <ApprovalCardSubmit>Apply patch</ApprovalCardSubmit>
        </ApprovalCardFooter>
      </ApprovalCard>
    </div>
  );
};

export default Example;
