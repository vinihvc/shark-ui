"use client";

import { GlobeIcon } from "lucide-react";
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
import {
  QuestionnaireChoice,
  QuestionnaireChoiceShortcut,
  QuestionnaireChoices,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireTitle,
} from "@/registry/react/components/questionnaire";

const ApprovalCardNetworkAccessDemo = () => {
  const [result, setResult] = useState("");
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const answers = new FormData(event.currentTarget);
    const scope = answers.get("network-scope");
    if (scope === "once") {
      setResult("Approved this request to registry.npmjs.org:443 only.");
    } else if (scope === "session") {
      setResult("Approved registry.npmjs.org:443 for this session only.");
    }
  };
  const handleReject = () =>
    setResult("Network access denied. Continue with local information.");

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <ApprovalCard
        items={items}
        onReject={handleReject}
        onSubmit={handleSubmit}
        shortcuts="numbers"
      >
        <ApprovalCardHeader>
          <ApprovalCardIcon>
            <GlobeIcon aria-hidden="true" />
          </ApprovalCardIcon>
          <div className="flex min-w-0 flex-col gap-1">
            <ApprovalCardTitle>
              Allow access to the package registry?
            </ApprovalCardTitle>
            <ApprovalCardDescription>
              The sandbox blocked a metadata request needed to check package
              compatibility.
            </ApprovalCardDescription>
          </div>
        </ApprovalCardHeader>
        <ApprovalCardContent className="flex flex-col gap-3">
          <pre className="overflow-x-auto rounded-lg border bg-muted/40 px-3 py-2 font-mono text-xs">
            <code>curl https://registry.npmjs.org/@ark-ui%2freact/latest</code>
          </pre>
          <p className="text-muted-foreground text-xs">
            Destination: registry.npmjs.org:443. Reads public package metadata;
            no workspace files are uploaded.
          </p>
        </ApprovalCardContent>
        <ApprovalCardContent>
          <QuestionnaireItem name="network-scope">
            <QuestionnaireTitle>
              Allow this network destination?
            </QuestionnaireTitle>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="once">
                Allow this request once
                <QuestionnaireChoiceShortcut />
              </QuestionnaireChoice>
              <QuestionnaireChoice value="session">
                Allow this host for this session
                <QuestionnaireChoiceShortcut />
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireError>
              Choose how long to allow access.
            </QuestionnaireError>
          </QuestionnaireItem>
        </ApprovalCardContent>
        <ApprovalCardFooter>
          <ApprovalCardActions>
            <ApprovalCardReject>Stay offline</ApprovalCardReject>
            <ApprovalCardApprove>Allow access</ApprovalCardApprove>
          </ApprovalCardActions>
        </ApprovalCardFooter>
      </ApprovalCard>
      <p aria-live="polite" className="text-muted-foreground text-sm">
        {result}
      </p>
    </div>
  );
};

const items = [{ name: "network-scope", required: true }] as const;

export default ApprovalCardNetworkAccessDemo;
