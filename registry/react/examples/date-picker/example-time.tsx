import { DatePickerTimer } from "@/registry/react/components/date-picker";
import { Field, FieldLabel } from "@/registry/react/components/field";

const Example = () => (
  <Field className="w-48">
    <FieldLabel>Time</FieldLabel>
    <DatePickerTimer />
  </Field>
);

export default Example;
