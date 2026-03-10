"use client";

import { useState } from "react";
import {
  Field,
  FieldDescription,
  FieldTitle,
} from "@/registry/react/components/field";
import { Slider } from "@/registry/react/components/slider";

export const FieldSlider = () => {
  const [value, setValue] = useState([200, 800]);
  return (
    <Field className="w-full max-w-xs">
      <FieldTitle>Price Range</FieldTitle>
      <Slider
        tabIndex={-1}
        max={1000}
        min={0}
        onValueChange={(e) => setValue(e.value)}
        value={value}
      />
      <FieldDescription>
        Set your budget range (${value[0]} - ${value[1]}).
      </FieldDescription>
    </Field>
  );
};
