"use client";

import { PlugIcon } from "lucide-react";
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

const ApprovalCardMcpToolDemo = () => {
  const [result, setResult] = useState("");
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Approved this create_issue call only.");
  };
  const handleReject = () =>
    setResult("Tool call denied. No issue will be created.");

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <ApprovalCard onReject={handleReject} onSubmit={handleSubmit}>
        <ApprovalCardHeader>
          <ApprovalCardIcon>
            <PlugIcon aria-hidden="true" />
          </ApprovalCardIcon>
          <div className="flex min-w-0 flex-col gap-1">
            <ApprovalCardTitle>Create an issue on GitHub?</ApprovalCardTitle>
            <ApprovalCardDescription>
              The connected MCP server will publish these details to
              acme/storefront.
            </ApprovalCardDescription>
          </div>
        </ApprovalCardHeader>
        <ApprovalCardContent className="flex flex-col gap-3">
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
          <ApprovalCardActions>
            <ApprovalCardReject>Deny</ApprovalCardReject>
            <ApprovalCardApprove>Create issue</ApprovalCardApprove>
          </ApprovalCardActions>
        </ApprovalCardFooter>
      </ApprovalCard>
      <p aria-live="polite" className="text-muted-foreground text-sm">
        {result}
      </p>
    </div>
  );
};

const toolArguments = {
  body: "Page 1 starts at offset 20. Expected offset: 0.",
  owner: "acme",
  repo: "storefront",
  title: "First page skips 20 orders",
};

export default ApprovalCardMcpToolDemo;
