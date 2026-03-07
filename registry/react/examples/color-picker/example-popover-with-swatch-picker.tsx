"use client";

import { Button } from "@/registry/react/components/button";
import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerAreaThumb,
  ColorPickerContent,
  ColorPickerSlider,
  ColorPickerSwatch,
  ColorPickerSwatchGroup,
  ColorPickerSwatchPreview,
  ColorPickerSwatchTrigger,
  ColorPickerTrigger,
  ColorPickerView,
} from "@/registry/react/components/color-picker";

const Example = () => (
  <ColorPicker className="w-full max-w-64" defaultValue="#eb5e41" format="hsla">
    <ColorPickerTrigger asChild>
      <Button size="lg" variant="ghost">
        <ColorPickerSwatchPreview className="size-6" />
        Pick a color
      </Button>
    </ColorPickerTrigger>
    <ColorPickerContent>
      <ColorPickerArea>
        <ColorPickerAreaThumb />
      </ColorPickerArea>
      <ColorPickerView format="hsla">
        <ColorPickerSlider channel="hue" />
      </ColorPickerView>
      <ColorPickerSwatchGroup>
        {swatches.map((color) => (
          <ColorPickerSwatchTrigger
            className="size-4"
            key={color}
            value={color}
          >
            <ColorPickerSwatch value={color} />
          </ColorPickerSwatchTrigger>
        ))}
      </ColorPickerSwatchGroup>
    </ColorPickerContent>
  </ColorPicker>
);

const swatches = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#f43f5e",
];

export default Example;
