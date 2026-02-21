import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const RadioGroupDemo = () => (
  <RadioGroup defaultValue="1">
    <RadioGroupItem value="1">Default</RadioGroupItem>
    <RadioGroupItem value="2">Confortable</RadioGroupItem>
    <RadioGroupItem value="3">Compact</RadioGroupItem>
  </RadioGroup>
);

export default RadioGroupDemo;
