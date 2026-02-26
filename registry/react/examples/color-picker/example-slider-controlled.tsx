"use client";

import React from "react";
import {
  ColorPicker,
  ColorPickerSlider,
  ColorPickerView,
} from "@/registry/react/components/color-picker";

const Example = () => {
  const [color, setColor] = React.useState("rgba(82, 65, 235, 1)");

  return (
    <div className="flex w-full max-w-64 flex-col gap-4">
      <ColorPicker
        className="w-full"
        format="hsla"
        inline
        onValueChange={(e) => setColor(e.valueAsString)}
        value={color}
      >
        <ColorPickerView format="hsla">
          <ColorPickerSlider channel="hue" />
        </ColorPickerView>
      </ColorPicker>
      <p className="text-center text-muted-foreground text-sm">{color}</p>
    </div>
  );
};

export default Example;
