"use client";

import { AngleSlider } from "@/registry/react/components/angle-slider";

export default function AngleSliderExampleCustomMarkers() {
  return (
    <AngleSlider
      aria-label="Angle"
      defaultValue={45}
      markers={[0, 90, 180, 270]}
    />
  );
}
