import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";

const NativeSelectDemo = () => (
  <Field className="w-full max-w-40" invalid>
    <FieldLabel>Select a fruit</FieldLabel>

    <NativeSelect className="w-full max-w-40">
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="orange">Orange</NativeSelectOption>
    </NativeSelect>
  </Field>
);

export default NativeSelectDemo;
