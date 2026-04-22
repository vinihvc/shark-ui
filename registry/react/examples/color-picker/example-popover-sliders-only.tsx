"use client";

import { Button } from "@/registry/react/components/button";
import {
  ColorPicker,
  ColorPickerContent,
  ColorPickerControl,
  ColorPickerSlider,
  ColorPickerSwatchPreview,
  ColorPickerTransparencyGrid,
  ColorPickerTrigger,
  ColorPickerView,
} from "@/registry/react/components/color-picker";
import { Field, FieldLabel } from "@/registry/react/components/field";

const Example = () => (
  <ColorPicker className="w-full max-w-64" defaultValue="#eb5e41" format="hsla">
    <ColorPickerControl>
      <ColorPickerTrigger asChild>
        <Button size="lg" variant="ghost">
          <ColorPickerSwatchPreview className="size-6" />
          Pick a color
        </Button>
      </ColorPickerTrigger>
    </ColorPickerControl>
    <ColorPickerContent>
      <ColorPickerView format="hsla">
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
      </ColorPickerView>
    </ColorPickerContent>
  </ColorPicker>
);

export default Example;
