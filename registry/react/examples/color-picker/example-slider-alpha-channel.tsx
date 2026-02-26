"use client";

import {
  ColorPicker,
  ColorPickerSlider,
  ColorPickerTransparencyGrid,
  ColorPickerValue,
  ColorPickerValueSwatch,
} from "@/registry/react/components/color-picker";

const Example = () => (
  <ColorPicker
    className="w-full max-w-64"
    defaultValue="hsla(0, 100%, 50%, 0.5)"
    inline
  >
    <div className="flex items-center gap-3">
      <div className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-md border shadow-sm">
        <ColorPickerTransparencyGrid />
        <ColorPickerValueSwatch />
      </div>
      <ColorPickerValue className="font-medium text-sm" />
    </div>
    <ColorPickerSlider channel="alpha">
      <ColorPickerTransparencyGrid />
    </ColorPickerSlider>
  </ColorPicker>
);

export default Example;
