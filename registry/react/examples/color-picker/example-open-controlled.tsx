"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
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
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setOpen(!open)} size="sm" variant="outline">
        Toggle
      </Button>
      <ColorPicker
        className="w-full max-w-64"
        defaultValue={parseColor("#eb5e41")}
        onOpenChange={(e) => setOpen(e.open)}
        open={open}
      >
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
