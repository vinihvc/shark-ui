"use client";

import { useState } from "react";
import {
  AngleSlider,
  AngleSliderControl,
  AngleSliderProgressRing,
  AngleSliderThumb,
  AngleSliderValueDisplay,
} from "@/registry/react/components/angle-slider";

const Example = () => {
  const [value, setValue] = useState(45);

  return (
    <AngleSlider
      aria-label="Angle"
      onValueChange={(e) => setValue(e.value)}
      value={value}
    >
      <AngleSliderControl>
        <AngleSliderProgressRing />
        <AngleSliderThumb />
      </AngleSliderControl>
      <AngleSliderValueDisplay />
    </AngleSlider>
  );
};

export default Example;
