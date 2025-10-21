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
import { Button } from "../components/button";

const StepsDemo = () => {
  const items = [
    { value: "first", title: "First", description: "Contact Info" },
    { value: "second", title: "Second", description: "Date & Time" },
    { value: "third", title: "Third", description: "Select Rooms" },
  ];

  return (
    <Steps className="w-full max-w-sm" count={items.length}>
      <StepsList>
        {items.map((item, index) => (
          <StepsItem index={index} key={item.value}>
            <StepsTrigger>
              <StepsIndicator>{index + 1}</StepsIndicator>
              <span>{item.title}</span>
            </StepsTrigger>

            <StepsSeparator />
          </StepsItem>
        ))}
      </StepsList>

      {items.map((item, index) => (
        <StepsContent index={index} key={item.value}>
          {item.title} - {item.description}
        </StepsContent>
      ))}

      <StepsCompletedContent>
        Steps Complete - Thank you for filling out the form!
      </StepsCompletedContent>

      <div className="flex gap-2">
        <StepsPrevious asChild>
          <Button variant="outline">Back</Button>
        </StepsPrevious>

        <StepsNext asChild>
          <Button variant="outline">Next</Button>
        </StepsNext>
      </div>
    </Steps>
  );
};

export default StepsDemo;
