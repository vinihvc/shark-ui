import { ChevronLeftIcon, ChevronRight } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Steps,
  StepsCompletedContent,
  StepsContent,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsNext,
  StepsPrevious,
  StepsSeparator,
  StepsTrigger,
} from "@/registry/react/components/steps";

const steps = Array.from({ length: 3 }, (_, index) => index + 1);

const StepsDemo = () => {
  return (
    <Steps className="h-full w-full max-w-md" count={steps.length}>
      <StepsList>
        {steps.map((step) => (
          <StepsItem index={step - 1} key={step}>
            <StepsTrigger>
              <StepsIndicator>{step}</StepsIndicator>
            </StepsTrigger>
            <StepsSeparator />
          </StepsItem>
        ))}
      </StepsList>
      {steps.map((step) => (
        <StepsContent
          className="flex h-full items-center justify-center rounded-md border"
          index={step - 1}
          key={step}
        >
          <p className="text-muted-foreground text-sm">Step {step}</p>
        </StepsContent>
      ))}

      <StepsCompletedContent className="flex h-full items-center justify-center rounded-md border">
        <p className="text-muted-foreground text-sm">
          All steps completed. You&apos;re all set!
        </p>
      </StepsCompletedContent>

      <div className="flex flex-row-reverse gap-2">
        <StepsNext asChild>
          <Button>
            Next
            <ChevronRight />
          </Button>
        </StepsNext>
        <StepsPrevious asChild>
          <Button variant="outline">
            <ChevronLeftIcon />
            Back
          </Button>
        </StepsPrevious>
      </div>
    </Steps>
  );
};

export default StepsDemo;
