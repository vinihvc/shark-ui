"use client";

import React from "react";
import { Field } from "@/registry/react/components/field";
import {
  Slider,
  SliderLabel,
  SliderValue,
} from "@/registry/react/components/slider";

export const FieldSliderExample = () => {
  const [value, setValue] = React.useState([200, 800]);

  return (
    <Field className="w-full max-w-xs">
      <Slider
        max={1000}
        min={0}
        onValueChange={(e) => setValue(e.value)}
        tabIndex={-1}
        value={value}
      >
        <div className="flex items-center justify-between">
          <SliderLabel>Price Range</SliderLabel>
          <SliderValue />
        </div>
      </Slider>
    </Field>
  );
};
