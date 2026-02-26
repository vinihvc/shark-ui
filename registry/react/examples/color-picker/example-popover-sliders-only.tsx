"use client";

import { Button } from "@/registry/react/components/button";
import {
  ColorPicker,
  ColorPickerContent,
  ColorPickerSlider,
  ColorPickerSwatchPreview,
  ColorPickerTransparencyGrid,
  ColorPickerTrigger,
} from "@/registry/react/components/color-picker";
import { Field, FieldLabel } from "@/registry/react/components/field";

const Example = () => (
  <ColorPicker
    className="w-full max-w-64"
    defaultFormat="hsla"
    defaultValue="#eb5e41"
  >
    <ColorPickerTrigger asChild>
      <Button size="lg" variant="ghost">
        <ColorPickerSwatchPreview className="size-6" />
        Pick a color
      </Button>
    </ColorPickerTrigger>
    <ColorPickerContent>
      <div className="flex flex-col gap-4">
        <Field>
          <FieldLabel>Hue</FieldLabel>
          <ColorPickerSlider channel="hue" />
        </Field>
        <Field>
          <FieldLabel>Saturation</FieldLabel>
          <ColorPickerSlider channel="saturation" />
        </Field>
        <Field>
          <FieldLabel>Lightness</FieldLabel>
          <ColorPickerSlider channel="lightness" />
        </Field>
        <Field>
          <FieldLabel>Alpha</FieldLabel>
          <ColorPickerSlider channel="alpha">
            <ColorPickerTransparencyGrid />
          </ColorPickerSlider>
        </Field>
      </div>
    </ColorPickerContent>
  </ColorPicker>
);

export default Example;
