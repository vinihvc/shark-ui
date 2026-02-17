"use client";

import {
  ColorPicker,
  ColorPickerChannelSlider,
  ColorPickerTransparencyGrid,
  ColorPickerValueSwatch,
  ColorPickerValueText,
  parseColor,
} from "@/registry/react/components/color-picker";

const Example = () => (
  <ColorPicker
    className="w-full max-w-64"
    defaultFormat="rgba"
    defaultValue={parseColor("#5dd016")}
    inline
  >
    <div className="flex items-center gap-3">
      <div className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-md border shadow-sm">
        <ColorPickerTransparencyGrid />
        <ColorPickerValueSwatch />
      </div>
      <ColorPickerValueText className="font-medium text-sm" />
    </div>
    <div className="flex flex-col gap-2.5">
      <ColorPickerChannelSlider channel="red" />
      <ColorPickerChannelSlider channel="green" />
      <ColorPickerChannelSlider channel="blue" />
      <ColorPickerChannelSlider channel="alpha">
        <ColorPickerTransparencyGrid />
      </ColorPickerChannelSlider>
    </div>
  </ColorPicker>
);

export default Example;
