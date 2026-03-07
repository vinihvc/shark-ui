import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";

const Example = () => (
  <Field className="w-full max-w-64">
    <FieldLabel>Country</FieldLabel>
    <NativeSelect>
      <NativeSelectOption value="">Select a country</NativeSelectOption>
      <NativeSelectOption value="br">Brazil</NativeSelectOption>
      <NativeSelectOption value="mx">Mexico</NativeSelectOption>
      <NativeSelectOption value="ie">Ireland</NativeSelectOption>
    </NativeSelect>
    <FieldDescription>Used for shipping estimates</FieldDescription>
  </Field>
);

export default Example;
