import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const Example = () => {
  return (
    <div className="mx-auto flex w-full max-w-fit flex-wrap gap-8">
      <RadioGroup defaultValue="1">
        <RadioGroupItem value="1">Default</RadioGroupItem>
        <RadioGroupItem disabled value="2">
          Comfortable
        </RadioGroupItem>
        <RadioGroupItem value="3">Compact</RadioGroupItem>
      </RadioGroup>

      <RadioGroup disabled>
        <RadioGroupItem value="1">Default</RadioGroupItem>
        <RadioGroupItem value="2">Comfortable</RadioGroupItem>
        <RadioGroupItem value="3">Compact</RadioGroupItem>
      </RadioGroup>
    </div>
  );
};

export default Example;
