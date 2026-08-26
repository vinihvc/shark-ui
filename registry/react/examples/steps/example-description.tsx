import {
  Steps,
  StepsDescription,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsSeparator,
  StepsTitle,
  StepsTrigger,
} from "@/registry/react/components/steps";

const Example = () => (
  <Steps className="w-full max-w-md" count={items.length}>
    <StepsList>
      {items.map((item, index) => (
        <StepsItem index={index} key={item.title}>
          <StepsTrigger>
            <StepsIndicator>{index + 1}</StepsIndicator>
            <div className="flex flex-col items-start gap-1">
              <StepsTitle>{item.title}</StepsTitle>
              <StepsDescription>{item.description}</StepsDescription>
            </div>
          </StepsTrigger>
          <StepsSeparator />
        </StepsItem>
      ))}
    </StepsList>
  </Steps>
);

const items = [
  { description: "Personal", title: "Info" },
  { description: "Company", title: "Docs" },
  { description: "Create", title: "Team" },
];

export default Example;
