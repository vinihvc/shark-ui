import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/registry/react/components/native-select";

const NativeSelectDemo = () => (
  <NativeSelect className="w-full max-w-40">
    <NativeSelectOption value="">Select an option</NativeSelectOption>
    <NativeSelectOptGroup label="Tropical">
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="mango">Mango</NativeSelectOption>
      <NativeSelectOption value="pineapple">Pineapple</NativeSelectOption>
    </NativeSelectOptGroup>
    <NativeSelectOptGroup label="Vegetables">
      <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
      <NativeSelectOption value="potato">Potato</NativeSelectOption>
      <NativeSelectOption value="tomato">Tomato</NativeSelectOption>
    </NativeSelectOptGroup>
  </NativeSelect>
);

export default NativeSelectDemo;
