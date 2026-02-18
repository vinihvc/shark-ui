"use client";

import {
  ColorPicker,
  ColorPickerChannelInput,
  ColorPickerControl,
  ColorPickerTrigger,
  parseColor,
} from "@/registry/react/components/color-picker";

const Example = () => (
  <ColorPicker
    className="w-full max-w-64"
    defaultValue={parseColor("#eb5e41")}
    disabled
  >
    <ColorPickerControl>
      <ColorPickerChannelInput channel="hex" />
      <ColorPickerTrigger />
    </ColorPickerControl>
  </ColorPicker>
);

export default Example;
