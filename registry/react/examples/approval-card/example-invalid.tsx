"use client";

import { CircleAlertIcon } from "lucide-react";
import { type SubmitEvent, useEffect, useRef } from "react";
import {
  ApprovalCard,
  ApprovalCardChoice,
  ApprovalCardChoices,
  ApprovalCardContent,
  ApprovalCardError,
  ApprovalCardFooter,
  ApprovalCardHeader,
  ApprovalCardItem,
  ApprovalCardItemDescription,
  ApprovalCardItemTitle,
  ApprovalCardReject,
  ApprovalCardSubmit,
  ApprovalCardTitle,
} from "@/registry/react/components/approval-card";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    formRef.current?.requestSubmit();
  }, []);

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    toast.create({
      description: "The deployment window was approved.",
      title: "Deployment scheduled",
      type: "success",
    });
  };

  const handleReject = () => {
    toast.create({
      description: "The deployment was not scheduled.",
      title: "Deployment denied",
      type: "info",
    });
  };

  return (
    <div className="w-full max-w-lg">
      <ApprovalCard
        items={items}
        onReject={handleReject}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <ApprovalCardHeader>
          <CircleAlertIcon aria-hidden="true" />
          <ApprovalCardTitle>Schedule the deployment</ApprovalCardTitle>
        </ApprovalCardHeader>
        <ApprovalCardContent>
          <ApprovalCardItem name="window">
            <ApprovalCardItemTitle>
              Which deployment window should we use?
            </ApprovalCardItemTitle>
            <ApprovalCardItemDescription>
              Select a window before approving the deployment.
            </ApprovalCardItemDescription>
            <ApprovalCardChoices>
              <ApprovalCardChoice value="now">Deploy now</ApprovalCardChoice>
              <ApprovalCardChoice value="low-traffic">
                During low traffic
              </ApprovalCardChoice>
              <ApprovalCardChoice value="tomorrow">
                Tomorrow morning
              </ApprovalCardChoice>
            </ApprovalCardChoices>
            <ApprovalCardError>
              Choose a deployment window to continue.
            </ApprovalCardError>
          </ApprovalCardItem>
        </ApprovalCardContent>
        <ApprovalCardFooter>
          <ApprovalCardReject>Deny</ApprovalCardReject>
          <ApprovalCardSubmit>Approve deployment</ApprovalCardSubmit>
        </ApprovalCardFooter>
      </ApprovalCard>
    </div>
  );
};

const items = [{ name: "window", required: true }] as const;

export default Example;
