"use client";

import { ShieldCheckIcon } from "lucide-react";
import type React from "react";
import {
  ApprovalCard,
  ApprovalCardChoice,
  ApprovalCardChoices,
  ApprovalCardContent,
  ApprovalCardError,
  ApprovalCardFooter,
  ApprovalCardHeader,
  ApprovalCardItem,
  ApprovalCardItemTitle,
  ApprovalCardReject,
  ApprovalCardSubmit,
  ApprovalCardTitle,
} from "@/registry/react/components/approval-card";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    toast.create({
      description: "This access request was approved.",
      title: "Access approved",
      type: "success",
    });
  };

  const handleReject = () => {
    toast.create({
      description: "This access request was not approved.",
      title: "Access denied",
      type: "info",
    });
  };

  return (
    <div className="w-full max-w-md">
      <ApprovalCard
        className="[--space:--spacing(3)] md:[--space:--spacing(8)]"
        items={items}
        onReject={handleReject}
        onSubmit={handleSubmit}
      >
        <ApprovalCardHeader>
          <ShieldCheckIcon aria-hidden="true" />
          <ApprovalCardTitle>Grant repository access?</ApprovalCardTitle>
        </ApprovalCardHeader>
        <ApprovalCardContent>
          <ApprovalCardItem name="duration">
            <ApprovalCardItemTitle>
              How long should this access last?
            </ApprovalCardItemTitle>
            <ApprovalCardChoices>
              <ApprovalCardChoice value="once">This session</ApprovalCardChoice>
              <ApprovalCardChoice value="project">
                This repository
              </ApprovalCardChoice>
            </ApprovalCardChoices>
            <ApprovalCardError>Choose an access duration.</ApprovalCardError>
          </ApprovalCardItem>
        </ApprovalCardContent>
        <ApprovalCardFooter>
          <ApprovalCardReject>Deny</ApprovalCardReject>
          <ApprovalCardSubmit>Grant access</ApprovalCardSubmit>
        </ApprovalCardFooter>
      </ApprovalCard>
    </div>
  );
};

const items = [{ name: "duration", required: true }] as const;

export default Example;
