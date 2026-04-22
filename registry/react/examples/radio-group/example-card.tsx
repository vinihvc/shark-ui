import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const Example = () => (
  <RadioGroup className="w-full max-w-sm" defaultValue="r-1">
    <FieldLabel>
      <Field>
        <FieldContent>
          <RadioGroupItem value="r-1">Plus</RadioGroupItem>
          <FieldDescription>For individuals and small teams.</FieldDescription>
        </FieldContent>
      </Field>
    </FieldLabel>

    <FieldLabel>
      <Field>
        <FieldContent>
          <RadioGroupItem value="r-2">Pro</RadioGroupItem>
          <FieldDescription>For growing businesses.</FieldDescription>
        </FieldContent>
      </Field>
    </FieldLabel>

    <FieldLabel>
      <Field>
        <FieldContent>
          <RadioGroupItem value="r-3">Enterprise</RadioGroupItem>
          <FieldDescription>For large teams and enterprises.</FieldDescription>
        </FieldContent>
      </Field>
    </FieldLabel>
  </RadioGroup>
);

export default Example;
