"use client";

import {
  ColorPicker,
  ColorPickerSlider,
  ColorPickerValue,
  ColorPickerValueSwatch,
} from "@/registry/react/components/color-picker";

const Example = () => (
  <ColorPicker
    className="w-full max-w-64"
    defaultValue="hsl(0, 100%, 50%)"
    inline
  >
    <div className="flex items-center gap-3">
      <div className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-md border shadow-sm">
        <ColorPickerValueSwatch />
      </div>
      <ColorPickerValue className="font-medium text-sm" />
    </div>
    <div className="flex flex-col gap-2.5">
      <ColorPickerSlider channel="hue" />
      <ColorPickerSlider channel="saturation" />
      <ColorPickerSlider channel="lightness" />
    </div>
  </ColorPicker>
);

export default Example;
