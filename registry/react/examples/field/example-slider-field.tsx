"use client";

import { Field, FieldDescription } from "@/registry/react/components/field";
import { Slider, SliderLabel } from "@/registry/react/components/slider";

const Example = () => (
  <Field className="w-full max-w-xs items-stretch gap-3">
    <Slider defaultValue={[50]}>
      <SliderLabel>Volume</SliderLabel>
    </Slider>
    <FieldDescription>This is an optional field</FieldDescription>
  </Field>
);

export default Example;
