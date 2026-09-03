"use client";

import { ListChecksIcon } from "lucide-react";
import { type SubmitEvent, useState } from "react";
import {
  ApprovalCard,
  ApprovalCardChoice,
  ApprovalCardChoiceShortcut,
  ApprovalCardChoices,
  ApprovalCardContent,
  ApprovalCardError,
  ApprovalCardFooter,
  ApprovalCardHeader,
  ApprovalCardInput,
  ApprovalCardItem,
  ApprovalCardItemTitle,
  ApprovalCardReject,
  ApprovalCardSubmit,
  ApprovalCardTitle,
  type ApprovalCardValue,
  type ApprovalCardValueChangeDetails,
} from "@/registry/react/components/approval-card";
import {
  Plan,
  PlanAction,
  PlanContent,
  PlanHeader,
  PlanTitle,
  PlanTrigger,
} from "@/registry/react/components/plan";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const [value, setValue] = useState<ApprovalCardValue>({});
  const handleValueChange = (details: ApprovalCardValueChangeDetails) =>
    setValue(details.value);
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const answers = new FormData(event.currentTarget);
    const decision = answers.get("decision");
    if (value.decision?.values.includes("build")) {
      toast.create({
        description: "Individual tool permissions still apply.",
        title: "Plan approved",
        type: "success",
      });
    } else if (typeof decision === "string" && decision) {
      toast.create({
        description: `${decision} Implementation is still paused.`,
        title: "Revision requested",
        type: "info",
      });
    }
  };
  const handleReject = () => {
    toast.create({
      description: "No implementation was authorized.",
      title: "Plan deferred",
      type: "info",
    });
  };

  return (
    <div className="w-full max-w-lg">
      <ApprovalCard
        items={items}
        onReject={handleReject}
        onSubmit={handleSubmit}
        onValueChange={handleValueChange}
        shortcuts="letters"
        value={value}
      >
        <ApprovalCardHeader>
          <ListChecksIcon aria-hidden="true" />
          <ApprovalCardTitle>Ready to implement?</ApprovalCardTitle>
        </ApprovalCardHeader>
        <ApprovalCardContent>
          <Plan>
            <PlanHeader>
              <PlanTitle>Add CSV export to orders</PlanTitle>
              <PlanAction>
                <PlanTrigger aria-label="Toggle implementation plan" />
              </PlanAction>
            </PlanHeader>
            <PlanContent>
              <ol className="flex list-decimal flex-col gap-2 ps-4">
                <li>Add a CSV serializer for the currently filtered orders.</li>
                <li>Add an Export button to the orders toolbar.</li>
                <li>
                  Cover quoting, empty results, and active filters with tests.
                </li>
              </ol>
            </PlanContent>
          </Plan>
        </ApprovalCardContent>
        <ApprovalCardContent>
          <ApprovalCardItem name="decision">
            <ApprovalCardItemTitle>
              How should the agent proceed?
            </ApprovalCardItemTitle>
            <ApprovalCardChoices>
              <ApprovalCardChoice value="build">
                Implement this plan
                <ApprovalCardChoiceShortcut />
              </ApprovalCardChoice>
              <ApprovalCardInput
                aria-label="Changes to the implementation plan"
                placeholder="Tell the agent what to change first…"
              />
            </ApprovalCardChoices>
            <ApprovalCardError>
              Approve the plan or describe a revision.
            </ApprovalCardError>
          </ApprovalCardItem>
        </ApprovalCardContent>
        <ApprovalCardFooter>
          <ApprovalCardReject>Not now</ApprovalCardReject>
          <ApprovalCardSubmit>Continue</ApprovalCardSubmit>
        </ApprovalCardFooter>
      </ApprovalCard>
    </div>
  );
};

const items = [{ name: "decision", required: true }] as const;

export default Example;
