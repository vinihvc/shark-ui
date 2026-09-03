"use client";

import { TerminalIcon, XIcon } from "lucide-react";
import { type React, useState } from "react";
import {
  ApprovalCard,
  ApprovalCardAction,
  ApprovalCardContent,
  ApprovalCardFooter,
  ApprovalCardHeader,
  ApprovalCardReject,
  ApprovalCardSubmit,
  ApprovalCardTitle,
} from "@/registry/react/components/approval-card";
import { Button } from "@/registry/react/components/button";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    toast.create({
      description: "The staging migration was approved.",
      title: "Migration approved",
      type: "success",
    });
  };

  const handleReject = () => {
    toast.create({
      description: "No database changes were authorized.",
      title: "Migration denied",
      type: "info",
    });
  };

  const handleClose = () => {
    setIsOpen(false);

    toast.create({
      description: "You can reopen this request from the agent activity.",
      title: "Approval request closed",
      type: "info",
    });
  };

  return (
    <div className="w-full max-w-md">
      {isOpen ? (
        <ApprovalCard onReject={handleReject} onSubmit={handleSubmit}>
          <ApprovalCardHeader>
            <TerminalIcon aria-hidden="true" />
            <ApprovalCardTitle>Apply the staging migration?</ApprovalCardTitle>
            <ApprovalCardAction>
              <Button
                aria-label="Close approval request"
                onClick={handleClose}
                size="icon-sm"
                variant="ghost"
              >
                <XIcon aria-hidden="true" />
              </Button>
            </ApprovalCardAction>
          </ApprovalCardHeader>
          <ApprovalCardContent className="flex flex-col gap-4">
            <pre className="overflow-x-auto rounded-lg border bg-muted/40 px-3 py-2 font-mono text-xs">
              <code>pnpm db:migrate --env staging</code>
            </pre>
            <p className="text-muted-foreground text-xs">
              This changes the staging database schema. Production is not
              targeted.
            </p>
          </ApprovalCardContent>
          <ApprovalCardFooter>
            <ApprovalCardReject>Deny</ApprovalCardReject>
            <ApprovalCardSubmit>Run migration</ApprovalCardSubmit>
          </ApprovalCardFooter>
        </ApprovalCard>
      ) : null}
    </div>
  );
};

export default Example;
