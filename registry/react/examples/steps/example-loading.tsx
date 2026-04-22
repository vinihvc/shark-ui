import { Loader2Icon } from "lucide-react";
import {
  Steps,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsSeparator,
  StepsTrigger,
} from "@/registry/react/components/steps";

const items = [true, false, false];

const Example = () => (
  <Steps className="w-full max-w-md" count={items.length}>
    <StepsList>
      {items.map((item, index) => (
        <StepsItem index={index} key={index}>
          <StepsTrigger disabled>
            <StepsIndicator>
              {item ? <Loader2Icon className="animate-spin" /> : index + 1}
            </StepsIndicator>
          </StepsTrigger>

          <StepsSeparator />
        </StepsItem>
      ))}
    </StepsList>
  </Steps>
);

export default Example;
