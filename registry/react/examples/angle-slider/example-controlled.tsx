"use client";

import { useState } from "react";
import {
  AngleSlider,
  AngleSliderControl,
  AngleSliderLabel,
  AngleSliderMarker,
  AngleSliderMarkerGroup,
  AngleSliderThumb,
  AngleSliderValueText,
} from "@/registry/react/components/angle-slider";

const Example = () => {
  const [value, setValue] = useState(45);

  return (
    <AngleSlider onValueChange={(e) => setValue(e.value)} value={value}>
      <AngleSliderLabel>Rotation</AngleSliderLabel>
      <AngleSliderControl>
        <AngleSliderMarkerGroup>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((val) => (
            <AngleSliderMarker key={val} value={val} />
          ))}
        </AngleSliderMarkerGroup>
        <AngleSliderThumb />
      </AngleSliderControl>
      <AngleSliderValueText />
    </AngleSlider>
  );
};

export default Example;
