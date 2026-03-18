"use client";

import { Thermometer } from "lucide-react";
import {
  AngleSlider,
  AngleSliderValue,
} from "@/registry/react/components/angle-slider";

function Example() {
  return (
    <AngleSlider aria-label="Angle" defaultValue={90} size={120} thickness={10}>
      <AngleSliderValue
        prefix={<Thermometer className="size-4" />}
        suffix="°"
      />
    </AngleSlider>
  );
}

export default Example;
