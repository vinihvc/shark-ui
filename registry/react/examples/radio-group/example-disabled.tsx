import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const Example = () => {
  return (
    <RadioGroup className="mx-auto w-40" defaultValue="1" disabled>
      <RadioGroupItem value="1">Option 1</RadioGroupItem>
      <RadioGroupItem value="2">Option 2</RadioGroupItem>
      <RadioGroupItem value="3">Option 3</RadioGroupItem>
    </RadioGroup>
  );
};

export default Example;
