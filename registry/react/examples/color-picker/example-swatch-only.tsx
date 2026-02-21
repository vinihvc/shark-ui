"use client";

import { CheckIcon } from "lucide-react";
import {
  ColorPicker,
  ColorPickerSwatch,
  ColorPickerSwatchGroup,
  ColorPickerSwatchIndicator,
  ColorPickerSwatchTrigger,
  ColorPickerValue,
  parseColor,
} from "@/registry/react/components/color-picker";

const swatches = ["red", "pink", "orange", "purple"];

const Example = () => (
  <ColorPicker
    className="w-full max-w-64"
    defaultValue={parseColor("#eb5e41")}
    inline
  >
    <output className="font-medium text-foreground text-sm">
      Selected color: <ColorPickerValue />
    </output>
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
