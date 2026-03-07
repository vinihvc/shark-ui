import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerAreaThumb,
} from "@/registry/react/components/color-picker";

const Example = () => (
  <ColorPicker className="w-full max-w-48" defaultValue="#182098" inline>
    <ColorPickerArea xChannel="hue" yChannel="alpha">
      <ColorPickerAreaThumb />
    </ColorPickerArea>
  </ColorPicker>
);

export default Example;
