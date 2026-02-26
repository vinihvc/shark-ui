"use client";

import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerAreaThumb,
} from "@/registry/react/components/color-picker";

const Example = () => (
  <ColorPicker className="w-full max-w-48" defaultValue="#19932C" inline>
    <ColorPickerArea showDots xChannel="hue" yChannel="alpha">
      <ColorPickerAreaThumb />
    </ColorPickerArea>
  </ColorPicker>
);

export default Example;
