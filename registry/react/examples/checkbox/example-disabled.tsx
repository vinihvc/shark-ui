import { Checkbox } from "@/registry/react/components/checkbox";
import { Field, FieldLabel } from "@/registry/react/components/field";

const Example = () => {
  return (
    <Field className="mx-auto w-40" disabled orientation="horizontal">
      <Checkbox />
      <FieldLabel>Receive newsletter</FieldLabel>
    </Field>
  );
};

export default Example;
