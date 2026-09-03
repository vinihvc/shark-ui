"use client";

import { CircleOffIcon } from "lucide-react";
import type React from "react";
import {
  ApprovalCard,
  ApprovalCardChoice,
  ApprovalCardChoices,
  ApprovalCardContent,
  ApprovalCardError,
  ApprovalCardFooter,
  ApprovalCardHeader,
  ApprovalCardInput,
  ApprovalCardItem,
  ApprovalCardItemDescription,
  ApprovalCardItemTitle,
  ApprovalCardReject,
  ApprovalCardSubmit,
  ApprovalCardTitle,
} from "@/registry/react/components/approval-card";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const workspace = String(
      new FormData(event.currentTarget).get("workspace")
    );
    const label = choices.find((choice) => choice.value === workspace)?.label;

    toast.create({
      description: label,
      title: "Workspace access approved",
      type: "success",
    });
  };

  const handleReject = () => {
    toast.create({
      description: "No workspace access was approved.",
      title: "Access denied",
      type: "info",
    });
  };

  return (
    <div className="w-full max-w-lg">
      <ApprovalCard
        items={items}
        onReject={handleReject}
        onSubmit={handleSubmit}
      >
        <ApprovalCardHeader>
          <CircleOffIcon aria-hidden="true" />
          <ApprovalCardTitle>Choose a workspace</ApprovalCardTitle>
        </ApprovalCardHeader>
        <ApprovalCardContent>
          <ApprovalCardItem name="workspace">
            <ApprovalCardItemTitle>
              Where should the agent make changes?
            </ApprovalCardItemTitle>
            <ApprovalCardItemDescription>
              Production and custom workspaces are unavailable for this task.
            </ApprovalCardItemDescription>
            <ApprovalCardChoices>
              <ApprovalCardChoice value="staging">Staging</ApprovalCardChoice>
              <ApprovalCardChoice value="preview">Preview</ApprovalCardChoice>
              <ApprovalCardChoice disabled value="production">
                Production
              </ApprovalCardChoice>
              <ApprovalCardInput
                aria-label="Custom workspace"
                disabled
                placeholder="Custom workspaces are unavailable"
              />
            </ApprovalCardChoices>
            <ApprovalCardError>
              Choose an available workspace.
            </ApprovalCardError>
          </ApprovalCardItem>
        </ApprovalCardContent>
        <ApprovalCardFooter>
          <ApprovalCardReject>Deny</ApprovalCardReject>
          <ApprovalCardSubmit>Approve access</ApprovalCardSubmit>
        </ApprovalCardFooter>
      </ApprovalCard>
    </div>
  );
};

const items = [{ name: "workspace", required: true }] as const;

const choices = [
  { label: "Staging", value: "staging" },
  { label: "Preview", value: "preview" },
  { label: "Production", value: "production" },
] as const;

export default Example;
