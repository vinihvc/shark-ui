import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const Example = () => {
  return (
    <FieldGroup className="max-w-sm">
      <Field orientation="vertical">
        <FieldLabel>Notification preference</FieldLabel>
        <FieldDescription>
          Choose how you want to be notified about updates
        </FieldDescription>
        <FieldContent>
          <RadioGroup defaultValue="all">
            <RadioGroupItem value="all">All notifications</RadioGroupItem>
            <RadioGroupItem value="mentions">Mentions only</RadioGroupItem>
            <RadioGroupItem value="none">None</RadioGroupItem>
          </RadioGroup>
        </FieldContent>
      </Field>
    </FieldGroup>
  );
};

export default Example;
