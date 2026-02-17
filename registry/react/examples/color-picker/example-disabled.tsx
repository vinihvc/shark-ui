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
    disabled
    defaultValue={parseColor("#eb5e41")}
  >
    <ColorPickerControl>
      <ColorPickerChannelInput channel="hex" />
      <ColorPickerTrigger />
    </ColorPickerControl>
  </ColorPicker>
);

export default Example;
