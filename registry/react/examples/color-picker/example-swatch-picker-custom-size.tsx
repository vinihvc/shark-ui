"use client";

import {
  ColorPicker,
  ColorPickerSwatch,
  ColorPickerSwatchGroup,
  ColorPickerSwatchIndicator,
  ColorPickerSwatchTrigger,
} from "@/registry/react/components/color-picker";

const Example = () => (
  <ColorPicker className="w-full flex-wrap justify-center gap-4" inline>
    <ColorPickerSwatchGroup>
      <ColorPickerSwatchTrigger className="size-4" value="#0485F7">
        <ColorPickerSwatch value="#0485F7" />
      </ColorPickerSwatchTrigger>
      <ColorPickerSwatchTrigger className="size-6" value="#EF4444">
        <ColorPickerSwatch value="#EF4444">
          <ColorPickerSwatchIndicator />
        </ColorPickerSwatch>
      </ColorPickerSwatchTrigger>
      <ColorPickerSwatchTrigger className="size-8" value="#F59E0B">
        <ColorPickerSwatch value="#F59E0B">
          <ColorPickerSwatchIndicator />
        </ColorPickerSwatch>
      </ColorPickerSwatchTrigger>
      <ColorPickerSwatchTrigger className="size-10" value="#10B981">
        <ColorPickerSwatch value="#10B981">
          <ColorPickerSwatchIndicator />
        </ColorPickerSwatch>
      </ColorPickerSwatchTrigger>
    </ColorPickerSwatchGroup>
  </ColorPicker>
);

export default Example;
