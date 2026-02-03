import {
  Field,
  FieldContent,
  FieldDescription,
  FieldTitle,
} from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const Example = () => {
  return (
    <Field className="w-full max-w-sm" orientation="vertical">
      <FieldContent>
        <FieldTitle>Notification frequency</FieldTitle>
        <FieldDescription>
          Choose how often you want to receive notifications.
        </FieldDescription>
      </FieldContent>
      <RadioGroup defaultValue="daily">
        <RadioGroupItem value="realtime">Real-time</RadioGroupItem>
        <RadioGroupItem value="daily">Daily digest</RadioGroupItem>
        <RadioGroupItem value="weekly">Weekly summary</RadioGroupItem>
      </RadioGroup>
    </Field>
  );
};

export default Example;
