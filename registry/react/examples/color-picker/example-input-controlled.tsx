"use client";

import React from "react";
import {
  ColorPicker,
  ColorPickerControl,
  ColorPickerInput,
  parseColor,
} from "@/registry/react/components/color-picker";
import { Input } from "@/registry/react/components/input";

const Example = () => {
  const [value, setValue] = React.useState("#eb5e41");

  return (
    <div className="flex w-full max-w-64 flex-col gap-4">
      <ColorPicker
        onValueChange={({ valueAsString }) => setValue(valueAsString)}
        value={value}
      >
        <ColorPickerControl>
          <ColorPickerInput asChild>
            <Input />
          </ColorPickerInput>
        </ColorPickerControl>
      </ColorPicker>

      <p className="text-center text-muted-foreground text-sm">
        {parseColor(value).toString("hex")}
      </p>
    </div>
  );
};

export default Example;
