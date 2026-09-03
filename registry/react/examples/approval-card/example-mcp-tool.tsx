"use client";

import { PlugIcon } from "lucide-react";
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
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.create({
      description: "Approved this create_issue call only.",
      title: "Tool call approved",
      type: "success",
    });
  };

  const handleReject = () => {
    toast.create({
      description: "No GitHub issue will be created.",
      title: "Tool call denied",
      type: "info",
    });
  };

  return (
    <div className="w-full max-w-lg">
      <ApprovalCard onReject={handleReject} onSubmit={handleSubmit}>
        <ApprovalCardHeader>
          <PlugIcon aria-hidden="true" />
          <ApprovalCardTitle>Create an issue on GitHub?</ApprovalCardTitle>
        </ApprovalCardHeader>
        <ApprovalCardContent>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-muted-foreground">Server: github</span>
            <code>create_issue</code>
          </div>
          <pre className="overflow-x-auto rounded-lg border bg-muted/40 px-3 py-2 font-mono text-xs">
            <code>{JSON.stringify(toolArguments, null, 2)}</code>
          </pre>
          <p className="text-muted-foreground text-xs">
            This creates a shared issue and may notify repository subscribers.
            Approval applies to this call, not every tool on the server.
          </p>
        </ApprovalCardContent>
        <ApprovalCardFooter>
          <ApprovalCardReject>Deny</ApprovalCardReject>
          <ApprovalCardSubmit>Create issue</ApprovalCardSubmit>
        </ApprovalCardFooter>
      </ApprovalCard>
    </div>
  );
};

const toolArguments = {
  body: "Page 1 starts at offset 20. Expected offset: 0.",
  owner: "acme",
  repo: "storefront",
  title: "First page skips 20 orders",
};

export default Example;
