import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Steps,
  StepsCompletedContent,
  StepsContent,
  StepsDescription,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsNext,
  StepsPrevious,
  StepsSeparator,
  StepsTitle,
  StepsTrigger,
} from "@/registry/react/components/steps";

const items = [
  { title: "Info", description: "Personal" },
  { title: "Docs", description: "Company" },
  { title: "Team", description: "Create" },
];

const Example = () => {
  return (
    <Steps
      className="h-64 w-full max-w-md"
      count={items.length}
      orientation="vertical"
    >
      <StepsList>
        {items.map((item, index) => (
          <StepsItem index={index} key={item.title}>
            <StepsTrigger>
              <StepsIndicator>{index + 1}</StepsIndicator>
              <span className="flex flex-col items-start gap-1">
                <StepsTitle>{item.title}</StepsTitle>
                <StepsDescription>{item.description}</StepsDescription>
              </span>
            </StepsTrigger>
            <StepsSeparator />
          </StepsItem>
        ))}
      </StepsList>
      <div className="flex flex-1 flex-col gap-4">
        {items.map((item, index) => (
          <StepsContent
            className="flex h-full items-center justify-center rounded-md border"
            index={index}
            key={item.title}
          >
            <p className="text-muted-foreground">{item.description}</p>
          </StepsContent>
        ))}
        <StepsCompletedContent className="flex h-full items-center justify-center rounded-md border">
          <p className="text-muted-foreground">Completed</p>
        </StepsCompletedContent>
        <div className="flex flex-row-reverse gap-2">
          <StepsNext asChild>
            <Button variant="outline">
              Next
              <ChevronRightIcon />
            </Button>
          </StepsNext>

          <StepsPrevious asChild>
            <Button variant="outline">
              <ChevronLeftIcon />
              Back
            </Button>
          </StepsPrevious>
        </div>
      </div>
    </Steps>
  );
};

export default Example;
