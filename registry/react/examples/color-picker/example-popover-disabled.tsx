"use client";

import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerContent,
  ColorPickerSwatchPreview,
  ColorPickerTrigger,
} from "@/registry/react/components/color-picker";
import { Button } from "../../components/button";

const Example = () => (
  <ColorPicker className="w-full max-w-64" defaultValue="#eb5e41" disabled>
    <ColorPickerTrigger asChild>
      <Button size="lg" variant="ghost">
        <ColorPickerSwatchPreview className="size-6" />
        Pick as color
      </Button>
    </ColorPickerTrigger>
    <ColorPickerContent>
      <ColorPickerArea />
    </ColorPickerContent>
  </ColorPicker>
);

export default Example;
