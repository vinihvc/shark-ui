"use client";

import React from "react";
import {
  ColorPicker,
  ColorPickerSwatch,
  ColorPickerSwatchGroup,
  ColorPickerSwatchIndicator,
  ColorPickerSwatchTrigger,
  parseColor,
} from "@/registry/react/components/color-picker";

const swatches = ["#0485F7", "#EF4444", "#F59E0B", "#10B981"];

const Example = () => {
  const [value, setValue] = React.useState("#0485F7");

  return (
    <div className="flex w-full max-w-64 flex-col items-center gap-4">
      <ColorPicker
        inline
        onValueChange={({ valueAsString }) => setValue(valueAsString)}
        value={value}
      >
        <ColorPickerSwatchGroup>
          {swatches.map((color) => (
            <ColorPickerSwatchTrigger key={color} value={color}>
              <ColorPickerSwatch value={color}>
                <ColorPickerSwatchIndicator />
              </ColorPickerSwatch>
            </ColorPickerSwatchTrigger>
          ))}
        </ColorPickerSwatchGroup>
      </ColorPicker>

      <p className="text-center text-muted-foreground text-sm">
        {parseColor(value).toString("hex")}
      </p>
    </div>
  );
};

export default Example;
