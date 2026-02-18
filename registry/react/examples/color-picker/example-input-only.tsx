"use client";

import {
  ColorPicker,
  ColorPickerChannelInput,
  ColorPickerControl,
  ColorPickerEyeDropperTrigger,
  ColorPickerTransparencyGrid,
  ColorPickerValueSwatch,
  parseColor,
} from "@/registry/react/components/color-picker";

const Example = () => (
  <ColorPicker className="w-full max-w-64" defaultValue={parseColor("#eb5e41")}>
    <ColorPickerControl>
      <div className="relative grid size-8 shrink-0 place-items-center overflow-hidden rounded-md border shadow-sm">
        <ColorPickerTransparencyGrid />
        <ColorPickerValueSwatch />
      </div>
      <ColorPickerChannelInput channel="hex" />
      <ColorPickerEyeDropperTrigger />
    </ColorPickerControl>
  </ColorPicker>
);

export default Example;
