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
import {
  Field,
  FieldError,
  FieldHelper,
} from "@/registry/react/components/field";

const Example = () => (
  <Field className="flex w-full max-w-sm flex-col gap-1">
    <ColorPicker defaultValue={parseColor("#eb5e41")}>
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
      </ColorPickerContent>
    </ColorPicker>
    <FieldHelper>Additional Info</FieldHelper>
    <FieldError>Error Info</FieldError>
  </Field>
);

export default Example;
