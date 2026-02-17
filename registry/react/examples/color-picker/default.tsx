"use client";

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
  ColorPickerTransparencyGrid,
  ColorPickerTrigger,
  parseColor,
} from "@/registry/react/components/color-picker";

const ColorPickerDemo = () => (
  <ColorPicker className="w-full max-w-64" defaultValue={parseColor("#eb5e41")}>
    <ColorPickerControl>
      <ColorPickerChannelInput channel="hex" />
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
    </ColorPickerContent>
  </ColorPicker>
);

export default ColorPickerDemo;
