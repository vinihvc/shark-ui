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
    defaultValue="#EB5E41"
    disabled
    inline
  >
    <div className="flex items-center gap-3">
      <div className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-md border shadow-sm">
        <ColorPickerValueSwatch />
      </div>
      <ColorPickerValue className="font-medium text-sm" />
    </div>
    <ColorPickerSlider channel="hue" />
  </ColorPicker>
);

export default Example;
