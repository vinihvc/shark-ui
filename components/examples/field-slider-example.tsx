"use client";

import React from "react";
import {
  Field,
  FieldDescription,
  FieldTitle,
} from "@/registry/react/components/field";
import { Slider } from "@/registry/react/components/slider";

export const FieldSliderExample = () => {
  const [value, setValue] = React.useState([200, 800]);

  return (
    <Field className="w-full max-w-xs">
      <FieldTitle>Price Range</FieldTitle>
      <Slider
        max={1000}
        min={0}
        onValueChange={(e) => setValue(e.value)}
        tabIndex={-1}
        value={value}
      />
      <FieldDescription>
        Set your budget range (${value[0]} - ${value[1]}).
      </FieldDescription>
    </Field>
  );
};
