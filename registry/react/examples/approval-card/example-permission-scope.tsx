"use client";

import { ShieldCheckIcon } from "lucide-react";
import type React from "react";
import {
  ApprovalCard,
  ApprovalCardChoice,
  ApprovalCardChoiceShortcut,
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

    const answers = new FormData(event.currentTarget);

    const scope = answers.get("scope");
    if (scope === "once") {
      toast.create({
        description: "Future commands will still require approval.",
        title: "Allowed once",
        type: "success",
      });
    } else if (scope === "project") {
      toast.create({
        description:
          "pnpm test is allowed for this repository in future sessions.",
        title: "Repository permission saved",
        type: "success",
      });
    }
  };
  const handleReject = () => {
    toast.create({
      description: "No command was authorized.",
      title: "Permission denied",
      type: "info",
    });
  };

  return (
    <div className="w-full max-w-lg">
      <ApprovalCard
        items={items}
        onReject={handleReject}
        onSubmit={handleSubmit}
        shortcuts="numbers"
      >
        <ApprovalCardHeader>
          <ShieldCheckIcon aria-hidden="true" />
          <ApprovalCardTitle>Allow the agent to run tests?</ApprovalCardTitle>
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
          <ApprovalCardItem name="scope">
            <ApprovalCardItemTitle>
              How long should approval last?
            </ApprovalCardItemTitle>
            <ApprovalCardChoices>
              <ApprovalCardChoice value="once">
                Allow once
                <span className="text-muted-foreground">
                  Ask again for the next run.
                </span>
                <ApprovalCardChoiceShortcut />
              </ApprovalCardChoice>
              <ApprovalCardChoice value="project">
                Remember for this repository
                <span className="text-muted-foreground">
                  Only pnpm test, not other commands.
                </span>
                <ApprovalCardChoiceShortcut />
              </ApprovalCardChoice>
            </ApprovalCardChoices>
            <ApprovalCardError>Choose an approval scope.</ApprovalCardError>
          </ApprovalCardItem>
        </ApprovalCardContent>
        <ApprovalCardFooter>
          <ApprovalCardReject>Deny</ApprovalCardReject>
          <ApprovalCardSubmit>Allow command</ApprovalCardSubmit>
        </ApprovalCardFooter>
      </ApprovalCard>
    </div>
  );
};

const command = [
  "\u001B[90m~/projects/storefront\u001B[0m",
  "$ pnpm test",
].join("\n");

const facts = [
  { label: "Repository", value: "acme/storefront" },
  { label: "Command", value: "pnpm test" },
] as const;

const items = [{ name: "scope", required: true }] as const;

export default Example;
