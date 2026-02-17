"use client";

import { CheckIcon } from "lucide-react";
import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerAreaBackground,
  ColorPickerAreaThumb,
  ColorPickerChannelInput,
  ColorPickerChannelSlider,
  ColorPickerContent,
  ColorPickerControl,
  ColorPickerEyeDropperTrigger,
  ColorPickerSwatch,
  ColorPickerSwatchGroup,
  ColorPickerSwatchIndicator,
  ColorPickerSwatchTrigger,
  ColorPickerTransparencyGrid,
  ColorPickerTrigger,
  parseColor,
} from "@/registry/react/components/color-picker";

const swatches = ["red", "blue", "green", "orange"];

const Example = () => (
  <ColorPicker className="w-full max-w-64" defaultValue={parseColor("#eb5e41")}>
    <ColorPickerControl>
      <ColorPickerChannelInput channel="hex" />
      <ColorPickerChannelInput channel="alpha" />
      <ColorPickerTrigger />
    </ColorPickerControl>
    <ColorPickerContent>
      <ColorPickerArea>
        <ColorPickerAreaBackground />
        <ColorPickerAreaThumb />
      </ColorPickerArea>
      <div className="flex items-center gap-3">
        <ColorPickerEyeDropperTrigger />
        <div className="flex flex-1 flex-col gap-2.5">
          <ColorPickerChannelSlider channel="hue" />
          <ColorPickerChannelSlider channel="alpha">
            <ColorPickerTransparencyGrid />
          </ColorPickerChannelSlider>
        </div>
      </div>
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
    </ColorPickerContent>
  </ColorPicker>
);

export default Example;
