import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";

const NativeSelectDemo = () => (
  <NativeSelect className="min-w-[180px]" size="lg">
    <NativeSelectOption value="">Select an option</NativeSelectOption>
    <NativeSelectOption value="banana">Banana</NativeSelectOption>
    <NativeSelectOption value="apple">Apple</NativeSelectOption>
    <NativeSelectOption value="orange">Orange</NativeSelectOption>
  </NativeSelect>
);

export default NativeSelectDemo;
