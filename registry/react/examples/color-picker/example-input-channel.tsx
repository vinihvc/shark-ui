"use client";

import {
  ColorPicker,
  ColorPickerControl,
  ColorPickerInput,
  ColorPickerSwatchPreview,
  ColorPickerView,
  parseColor,
} from "@/registry/react/components/color-picker";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <div className="flex w-full max-w-xs flex-col gap-4">
    <ColorPicker
      className="w-full"
      defaultValue={parseColor("#0485F7").toString("rgba")}
      format="rgba"
    >
      <ColorPickerView format="rgba">
        <Field orientation="horizontal">
          <FieldLabel>RGB</FieldLabel>
          <ColorPickerInput asChild channel="red" className="w-full">
            <Input />
          </ColorPickerInput>
          <ColorPickerInput asChild channel="green" className="w-full">
            <Input />
          </ColorPickerInput>
          <ColorPickerInput asChild channel="blue" className="w-full">
            <Input />
          </ColorPickerInput>
          <ColorPickerSwatchPreview className="size-6" />
        </Field>
      </ColorPickerView>
    </ColorPicker>
    <ColorPicker
      className="w-full"
      defaultValue={parseColor("#EF4444").toString("hsba")}
      format="hsba"
    >
      <ColorPickerView format="hsba">
        <Field orientation="horizontal">
          <FieldLabel>HSB</FieldLabel>
          <ColorPickerInput asChild channel="hue" className="w-full">
            <Input />
          </ColorPickerInput>
          <ColorPickerInput asChild channel="saturation" className="w-full">
            <Input />
          </ColorPickerInput>
          <ColorPickerInput asChild channel="brightness" className="w-full">
            <Input />
          </ColorPickerInput>
          <ColorPickerSwatchPreview className="size-6" />
        </Field>
      </ColorPickerView>
    </ColorPicker>
    <ColorPicker
      className="w-full"
      defaultValue={parseColor("#F59E0B").toString("hsla")}
      format="hsla"
    >
      <ColorPickerView format="hsla">
        <Field orientation="horizontal">
          <FieldLabel>HSL</FieldLabel>
          <ColorPickerInput asChild channel="hue" className="w-full">
            <Input />
          </ColorPickerInput>
          <ColorPickerInput asChild channel="saturation" className="w-full">
            <Input />
          </ColorPickerInput>
          <ColorPickerInput asChild channel="lightness" className="w-full">
            <Input />
          </ColorPickerInput>
          <ColorPickerSwatchPreview className="size-6" />
        </Field>
      </ColorPickerView>
    </ColorPicker>
    <ColorPicker
      className="w-full items-center"
      defaultValue={parseColor("#10B981").toString("hex")}
    >
      <FieldLabel>Hex</FieldLabel>
      <Field orientation="horizontal">
        <ColorPickerControl className="min-w-0 flex-1">
          <ColorPickerInput asChild channel="hex">
            <Input />
          </ColorPickerInput>
          <ColorPickerInput asChild channel="alpha">
            <Input />
          </ColorPickerInput>
          <ColorPickerSwatchPreview className="size-6" />
        </ColorPickerControl>
      </Field>
    </ColorPicker>
  </div>
);

export default Example;
