import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupLabel,
} from "@/registry/react/components/radio-group";

const RadioGroupDemo = () => (
  <RadioGroup className="w-full max-w-sm" defaultValue="1">
    <RadioGroupLabel>Select your preferred layout</RadioGroupLabel>
    <RadioGroupItem value="1">Default</RadioGroupItem>
    <RadioGroupItem disabled value="2">
      Confortable
    </RadioGroupItem>
    <RadioGroupItem value="3">Compact</RadioGroupItem>
  </RadioGroup>
);

export default RadioGroupDemo;
