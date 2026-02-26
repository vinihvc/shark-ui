"use client";

import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerAreaThumb,
} from "@/registry/react/components/color-picker";

const Example = () => (
  <ColorPicker className="w-full max-w-48" defaultValue="#eb5e41" inline>
    <ColorPickerArea>
      <ColorPickerAreaThumb />
    </ColorPickerArea>
  </ColorPicker>
);

export default Example;
