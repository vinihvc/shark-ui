"use client";

import { useState } from "react";
import {
  ColorPicker,
  ColorPickerSlider,
  ColorPickerValue,
  ColorPickerValueSwatch,
} from "@/registry/react/components/color-picker";

const Example = () => {
  const [color, setColor] = useState("#EB5E41");

  return (
    <div className="flex flex-col gap-4">
      <ColorPicker
        className="w-full max-w-64"
        inline
        onValueChange={(e) => setColor(e.valueAsString)}
        value={color}
      >
        <div className="flex items-center gap-3">
          <div className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-md border shadow-sm">
            <ColorPickerValueSwatch />
          </div>
          <ColorPickerValue className="font-medium text-sm" />
        </div>
        <ColorPickerSlider channel="hue" />
      </ColorPicker>
      <p className="text-muted-foreground text-sm">Current color: {color}</p>
    </div>
  );
};

export default Example;
