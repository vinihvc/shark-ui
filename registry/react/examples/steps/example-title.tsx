import {
  Steps,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsSeparator,
  StepsTitle,
  StepsTrigger,
} from "@/registry/react/components/steps";

const items = ["Info", "Docs", "Team"];

const Example = () => {
  return (
    <Steps className="w-full max-w-md" count={items.length}>
      <StepsList>
        {items.map((item, index) => (
          <StepsItem index={index} key={item}>
            <StepsTrigger>
              <StepsIndicator>{index + 1}</StepsIndicator>
              <StepsTitle>{item}</StepsTitle>
            </StepsTrigger>
            <StepsSeparator />
          </StepsItem>
        ))}
      </StepsList>
    </Steps>
  );
};

export default Example;
