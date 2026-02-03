import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const Example = () => {
  return (
    <FieldSet>
      <FieldLegend variant="label">Select your preferred layout</FieldLegend>
      <FieldDescription>
        Choose the layout that works best for you.
      </FieldDescription>
      <FieldGroup>
        <RadioGroup className="gap-3" defaultValue="comfortable">
          <Field orientation="horizontal">
            <RadioGroupItem value="default" />
            <FieldLabel className="font-normal">Default</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="comfortable" />
            <FieldLabel className="font-normal">Comfortable</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="compact" />
            <FieldLabel className="font-normal">Compact</FieldLabel>
          </Field>
        </RadioGroup>
      </FieldGroup>
    </FieldSet>
  );
};

export default Example;
