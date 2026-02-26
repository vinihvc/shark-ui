"use client";

import {
  ColorPicker,
  ColorPickerInput,
  ColorPickerSwatchPreview,
} from "@/registry/react/components/color-picker";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const Example = () => (
  <ColorPicker className="w-full max-w-64" defaultValue="#eb5e41">
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <ColorPickerSwatchPreview />
      </InputGroupAddon>
      <ColorPickerInput asChild>
        <InputGroupInput />
      </ColorPickerInput>
    </InputGroup>
  </ColorPicker>
);

export default Example;
