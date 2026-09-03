"use client";

import { TerminalIcon } from "lucide-react";
import type React from "react";
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
  DataList,
  DataListItem,
  DataListItemLabel,
  DataListItemValue,
} from "@/registry/react/components/data-list";
import {
  Terminal,
  TerminalContent,
  TerminalHeader,
} from "@/registry/react/components/terminal";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    toast.create({
      description: "Approved the staging migration only.",
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

  return (
    <div className="w-full max-w-lg">
      <ApprovalCard onReject={handleReject} onSubmit={handleSubmit}>
        <ApprovalCardHeader>
          <TerminalIcon aria-hidden="true" />
          <ApprovalCardTitle>Apply the staging migration?</ApprovalCardTitle>
        </ApprovalCardHeader>
        <ApprovalCardContent className="flex flex-col gap-4">
          <Terminal className="rounded-lg bg-muted/30" output={command}>
            <TerminalHeader>storefront · zsh</TerminalHeader>
            <TerminalContent />
          </Terminal>
          <DataList>
            {facts.map((item) => (
              <DataListItem className="py-1.5" key={item.label}>
                <DataListItemLabel>{item.label}</DataListItemLabel>
                <DataListItemValue className="font-mono text-xs">
                  {item.value}
                </DataListItemValue>
              </DataListItem>
            ))}
          </DataList>
        </ApprovalCardContent>
        <ApprovalCardFooter>
          <ApprovalCardReject>Reject</ApprovalCardReject>
          <ApprovalCardSubmit>Run migration</ApprovalCardSubmit>
        </ApprovalCardFooter>
      </ApprovalCard>
    </div>
  );
};

const command = [
  "\u001B[90m~/projects/storefront\u001B[0m",
  "$ pnpm db:migrate --env staging",
].join("\n");

const facts = [
  { label: "Directory", value: "~/projects/storefront" },
  { label: "Environment", value: "staging" },
  { label: "Effect", value: "Schema only · production untouched" },
] as const;

export default Example;
