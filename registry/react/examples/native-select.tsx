import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/registry/react/components/native-select";

const NativeSelectDemo = () => (
  <NativeSelect>
    <NativeSelectOption value="">Select an option</NativeSelectOption>
    <NativeSelectOptGroup label="Fruits">
      <NativeSelectOption value="1">Banana</NativeSelectOption>
      <NativeSelectOption value="2">Apple</NativeSelectOption>
      <NativeSelectOption value="3">Orange</NativeSelectOption>
      <NativeSelectOption value="4">Pineapple</NativeSelectOption>
    </NativeSelectOptGroup>
    <NativeSelectOptGroup label="Vegetables">
      <NativeSelectOption value="1">Carrot</NativeSelectOption>
      <NativeSelectOption value="2">Potato</NativeSelectOption>
      <NativeSelectOption value="3">Tomato</NativeSelectOption>
      <NativeSelectOption value="3">Option 3</NativeSelectOption>
    </NativeSelectOptGroup>
  </NativeSelect>
);

export default NativeSelectDemo;
