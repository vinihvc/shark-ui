"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Steps,
  StepsCompletedContent,
  StepsContent,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsSeparator,
  StepsTitle,
  StepsTrigger,
} from "@/registry/react/components/steps";

const items = [
  {
    title: "Your details",
    content: "Please provide your name and email address.",
  },
  { title: "Company details", content: "A few details about your company." },
  { title: "Invite your team", content: "Start collaborating with your team." },
];

const Example = () => {
  const [step, setStep] = React.useState(0);

  return (
    <div className="flex w-full max-w-lg flex-col gap-4">
      <Steps
        className="w-full"
        count={items.length}
        onStepChange={(details) => setStep(details.step)}
        step={step}
      >
        <StepsList>
          {items.map((item, index) => (
            <StepsItem index={index} key={item.title}>
              <StepsTrigger>
                <StepsIndicator>{index + 1}</StepsIndicator>
                <StepsTitle>{item.title}</StepsTitle>
              </StepsTrigger>

              <StepsSeparator />
            </StepsItem>
          ))}
        </StepsList>

        {items.map((item, index) => (
          <StepsContent index={index} key={item.title}>
            <p className="text-muted-foreground">{item.content}</p>
          </StepsContent>
        ))}

        <StepsCompletedContent>
          <p className="text-muted-foreground">
            All steps completed. You&apos;re all set!
          </p>
        </StepsCompletedContent>
      </Steps>

      <div className="flex gap-2">
        <Button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          variant="outline"
        >
          Back
        </Button>

        <Button onClick={() => setStep((s) => Math.min(items.length, s + 1))}>
          Next
        </Button>

        <Button onClick={() => setStep(0)} variant="ghost">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Example;
