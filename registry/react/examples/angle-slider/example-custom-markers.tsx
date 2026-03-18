"use client";

import { AngleSlider } from "@/registry/react/components/angle-slider";

function Example() {
  return (
    <AngleSlider
      aria-label="Angle"
      defaultValue={45}
      markers={[0, 90, 180, 270]}
    />
  );
}

export default Example;
