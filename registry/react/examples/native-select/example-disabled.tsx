import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";

const NativeSelectDemo = () => (
  <NativeSelect className="w-full max-w-40" disabled>
    <NativeSelectOption value="">Select an option</NativeSelectOption>
    <NativeSelectOption value="banana">Banana</NativeSelectOption>
    <NativeSelectOption value="apple">Apple</NativeSelectOption>
    <NativeSelectOption value="orange">Orange</NativeSelectOption>
  </NativeSelect>
);

export default NativeSelectDemo;
