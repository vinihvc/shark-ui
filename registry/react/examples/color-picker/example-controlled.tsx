"use client";

import React from "react";
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

const Example = () => {
  const [color, setColor] = React.useState(() =>
    parseColor("hsl(20, 100%, 50%)")
  );

  return (
    <div className="flex flex-col gap-4">
      <output className="font-medium text-foreground text-sm">
        Selected color: {color.toString("hex")}
      </output>
      <ColorPicker onValueChange={(e) => setColor(e.value)} value={color}>
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
    </div>
  );
};

export default Example;
