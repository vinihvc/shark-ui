"use client";

import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerAreaThumb,
  ColorPickerContent,
  ColorPickerEyeDropperTrigger,
  ColorPickerInput,
  ColorPickerSlider,
  ColorPickerSwatchPreview,
  ColorPickerTransparencyGrid,
  ColorPickerTrigger,
} from "@/registry/react/components/color-picker";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const ColorPickerDemo = () => (
  <ColorPicker className="w-full max-w-64" defaultValue="#eb5e41">
    <InputGroup>
      <ColorPickerTrigger asChild>
        <InputGroupAddon>
          <ColorPickerSwatchPreview />
        </InputGroupAddon>
      </ColorPickerTrigger>
      <ColorPickerInput asChild>
        <InputGroupInput />
      </ColorPickerInput>
    </InputGroup>

    <ColorPickerContent>
      <ColorPickerArea>
        <ColorPickerAreaThumb />
      </ColorPickerArea>
      <div className="flex items-center gap-3">
        <ColorPickerEyeDropperTrigger />
        <div className="flex flex-1 flex-col gap-2.5">
          <ColorPickerSlider channel="hue" />
          <ColorPickerSlider channel="alpha">
            <ColorPickerTransparencyGrid />
          </ColorPickerSlider>
        </div>
      </div>
    </ColorPickerContent>
  </ColorPicker>
);

export default ColorPickerDemo;
