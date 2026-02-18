"use client";

import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerAreaBackground,
  ColorPickerAreaThumb,
  ColorPickerChannelSlider,
  ColorPickerTransparencyGrid,
  ColorPickerValueSwatch,
  parseColor,
} from "@/registry/react/components/color-picker";

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
    <div className="flex items-center gap-3">
      <div className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-md border shadow-sm">
        <ColorPickerTransparencyGrid />
        <ColorPickerValueSwatch />
      </div>
      <div className="flex flex-1 flex-col gap-2.5">
        <ColorPickerChannelSlider channel="hue" />
        <ColorPickerChannelSlider channel="alpha">
          <ColorPickerTransparencyGrid />
        </ColorPickerChannelSlider>
      </div>
    </div>
  </ColorPicker>
);

export default Example;
