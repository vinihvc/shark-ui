"use client";

import { GlobeIcon } from "lucide-react";
import type { SubmitEvent } from "react";
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
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/registry/react/components/code-block";
import {
  DataList,
  DataListItem,
  DataListItemLabel,
  DataListItemValue,
} from "@/registry/react/components/data-list";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const answers = new FormData(event.currentTarget);
    const scope = answers.get("network-scope");
    if (scope === "once") {
      toast.create({
        description: "Approved this request to registry.npmjs.org:443 only.",
        title: "Network access approved",
        type: "success",
      });
    } else if (scope === "session") {
      toast.create({
        description: "Approved registry.npmjs.org:443 for this session only.",
        title: "Network access approved",
        type: "success",
      });
    }
  };
  const handleReject = () => {
    toast.create({
      description: "Continue with local information only.",
      title: "Network access denied",
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
          <GlobeIcon aria-hidden="true" />
          <ApprovalCardTitle>
            Allow access to the package registry?
          </ApprovalCardTitle>
        </ApprovalCardHeader>
        <ApprovalCardContent className="flex flex-col gap-4">
          <CodeBlock className="rounded-lg bg-muted/30" code={request}>
            <CodeBlockHeader>
              <CodeBlockTitle>GET · registry.npmjs.org</CodeBlockTitle>
            </CodeBlockHeader>
            <CodeBlockContent>{request}</CodeBlockContent>
          </CodeBlock>
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
          <ApprovalCardItem name="network-scope">
            <ApprovalCardItemTitle>
              Allow this network destination?
            </ApprovalCardItemTitle>
            <ApprovalCardChoices>
              <ApprovalCardChoice value="once">
                Allow this request once
                <span className="text-muted-foreground">
                  Ask again for the next lookup.
                </span>
                <ApprovalCardChoiceShortcut />
              </ApprovalCardChoice>
              <ApprovalCardChoice value="session">
                Allow this host for this session
                <span className="text-muted-foreground">
                  registry.npmjs.org:443 only, not the open web.
                </span>
                <ApprovalCardChoiceShortcut />
              </ApprovalCardChoice>
            </ApprovalCardChoices>
            <ApprovalCardError>
              Choose how long to allow access.
            </ApprovalCardError>
          </ApprovalCardItem>
        </ApprovalCardContent>
        <ApprovalCardFooter>
          <ApprovalCardReject>Stay offline</ApprovalCardReject>
          <ApprovalCardSubmit>Allow access</ApprovalCardSubmit>
        </ApprovalCardFooter>
      </ApprovalCard>
    </div>
  );
};

const request = "GET /@ark-ui/react/latest HTTP/1.1";

const facts = [
  { label: "Host", value: "registry.npmjs.org:443" },
  { label: "Method", value: "GET" },
  { label: "Purpose", value: "Public metadata · no upload" },
] as const;

const items = [{ name: "network-scope", required: true }] as const;

export default Example;
