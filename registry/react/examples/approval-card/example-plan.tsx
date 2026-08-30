"use client";

import { ListChecksIcon } from "lucide-react";
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
  Plan,
  PlanAction,
  PlanContent,
  PlanHeader,
  PlanTitle,
  PlanTrigger,
} from "@/registry/react/components/plan";
import {
  QuestionnaireChoice,
  QuestionnaireChoiceShortcut,
  QuestionnaireChoices,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireTitle,
  type QuestionnaireValue,
  type QuestionnaireValueChangeDetails,
} from "@/registry/react/components/questionnaire";

const ApprovalCardPlanDemo = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState<QuestionnaireValue>({});
  const handleValueChange = (details: QuestionnaireValueChangeDetails) =>
    setValue(details.value);
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const answers = new FormData(event.currentTarget);
    const decision = answers.get("decision");
    if (value.decision?.values.includes("build")) {
      setResult("Plan approved. Individual tool permissions still apply.");
    } else if (typeof decision === "string" && decision) {
      setResult(
        `Revision requested: ${decision}. Implementation is still paused.`
      );
    }
  };
  const handleReject = () =>
    setResult("Plan deferred. No implementation authorized.");

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <ApprovalCard
        items={items}
        onReject={handleReject}
        onSubmit={handleSubmit}
        onValueChange={handleValueChange}
        shortcuts="letters"
        value={value}
      >
        <ApprovalCardHeader>
          <ApprovalCardIcon>
            <ListChecksIcon aria-hidden="true" />
          </ApprovalCardIcon>
          <div className="flex min-w-0 flex-col gap-1">
            <ApprovalCardTitle>Ready to implement?</ApprovalCardTitle>
            <ApprovalCardDescription>
              Review the approach before the agent changes any files.
            </ApprovalCardDescription>
          </div>
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
          <QuestionnaireItem name="decision">
            <QuestionnaireTitle>
              How should the agent proceed?
            </QuestionnaireTitle>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="build">
                Implement this plan
                <QuestionnaireChoiceShortcut />
              </QuestionnaireChoice>
              <QuestionnaireInput
                aria-label="Changes to the implementation plan"
                placeholder="Tell the agent what to change first…"
              />
            </QuestionnaireChoices>
            <QuestionnaireError>
              Approve the plan or describe a revision.
            </QuestionnaireError>
          </QuestionnaireItem>
        </ApprovalCardContent>
        <ApprovalCardFooter>
          <ApprovalCardActions>
            <ApprovalCardReject>Not now</ApprovalCardReject>
            <ApprovalCardApprove>Continue</ApprovalCardApprove>
          </ApprovalCardActions>
        </ApprovalCardFooter>
      </ApprovalCard>
      <p aria-live="polite" className="text-muted-foreground text-sm">
        {result}
      </p>
    </div>
  );
};

const items = [{ name: "decision", required: true }] as const;

export default ApprovalCardPlanDemo;
