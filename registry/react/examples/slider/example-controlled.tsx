"use client";

import React from "react";
import { Field } from "@/registry/react/components/field";
import {
  Slider,
  SliderLabel,
  SliderValue,
} from "@/registry/react/components/slider";

const Example = () => {
  const [value, setValue] = React.useState<number[]>([40]);

  const isGreaterThan80 = value[0] > 80;

  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <p className="text-center text-sm">Greater than 80</p>
      <Field>
        <Slider onValueChange={({ value }) => setValue(value)} value={value}>
          <div className="flex items-center justify-between">
            <SliderLabel>Temperature</SliderLabel>
            <SliderValue />
          </div>
        </Slider>
      </Field>
      <p className="text-center">{isGreaterThan80 ? "✅" : "❌"}</p>
    </div>
  );
};

export default Example;
