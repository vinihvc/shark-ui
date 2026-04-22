"use client";

import { PercentIcon } from "lucide-react";
import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerAreaThumb,
  ColorPickerContent,
  ColorPickerControl,
  ColorPickerInput,
  ColorPickerSlider,
  ColorPickerSwatchPreview,
  ColorPickerTransparencyGrid,
  ColorPickerTrigger,
  ColorPickerView,
  parseColor,
} from "@/registry/react/components/color-picker";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import { Separator } from "@/registry/react/components/separator";

const Example = () => (
  <ColorPicker
    className="w-full max-w-56"
    defaultValue={parseColor("#0485F7").toString("hsla")}
    format="hsla"
  >
    <ColorPickerControl>
      <InputGroup>
        <ColorPickerTrigger asChild>
          <InputGroupAddon>
            <ColorPickerSwatchPreview aria-hidden />
          </InputGroupAddon>
        </ColorPickerTrigger>
        <ColorPickerInput asChild channel="hex" className="flex-1">
          <InputGroupInput />
        </ColorPickerInput>
        <Separator orientation="vertical" />
        <ColorPickerInput asChild channel="alpha">
          <InputGroupInput
            aria-label="Opacity percentage"
            className="max-w-1/4 text-right"
          />
        </ColorPickerInput>
        <InputGroupAddon align="inline-end">
          <PercentIcon aria-hidden />
        </InputGroupAddon>
      </InputGroup>
    </ColorPickerControl>
    <ColorPickerContent>
      <ColorPickerArea showDots>
        <ColorPickerAreaThumb />
      </ColorPickerArea>
      <ColorPickerView format="hsla">
        <ColorPickerSlider channel="hue" />
        <ColorPickerSlider channel="saturation" />
        <ColorPickerSlider channel="lightness" />
        <ColorPickerSlider channel="alpha">
          <ColorPickerTransparencyGrid />
        </ColorPickerSlider>
      </ColorPickerView>
    </ColorPickerContent>
  </ColorPicker>
);

export default Example;
