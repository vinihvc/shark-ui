"use client";

import {
  ColorPicker,
  ColorPickerSlider,
  ColorPickerTransparencyGrid,
} from "@/registry/react/components/color-picker";

const Example = () => (
  <ColorPicker className="w-full max-w-64" defaultValue="#eb5e41" inline>
    <div className="flex flex-1 flex-col gap-4">
      <ColorPickerSlider channel="hue" />
      <ColorPickerSlider channel="alpha">
        <ColorPickerTransparencyGrid />
      </ColorPickerSlider>
    </div>
  </ColorPicker>
);

export default Example;
