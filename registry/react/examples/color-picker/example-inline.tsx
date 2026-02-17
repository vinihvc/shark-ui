"use client";

import { CheckIcon } from "lucide-react";
import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerAreaBackground,
  ColorPickerAreaThumb,
  ColorPickerSwatch,
  ColorPickerSwatchGroup,
  ColorPickerSwatchIndicator,
  ColorPickerSwatchTrigger,
  parseColor,
} from "@/registry/react/components/color-picker";

const swatches = ["red", "blue", "green", "orange"];

const Example = () => (
  <ColorPicker
    className="w-full max-w-64"
    defaultValue={parseColor("#eb5e41")}
    inline
  >
    <ColorPickerArea>
      <ColorPickerAreaBackground />
      <ColorPickerAreaThumb />
    </ColorPickerArea>
    <ColorPickerSwatchGroup>
      {swatches.map((color) => (
        <ColorPickerSwatchTrigger key={color} value={color}>
          <ColorPickerSwatch value={color}>
            <ColorPickerSwatchIndicator>
              <CheckIcon />
            </ColorPickerSwatchIndicator>
          </ColorPickerSwatch>
        </ColorPickerSwatchTrigger>
      ))}
    </ColorPickerSwatchGroup>
  </ColorPicker>
);

export default Example;
