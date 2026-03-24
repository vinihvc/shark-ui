"use client";

import { CircularSlider } from "@/registry/react/components/circular-slider";

function Example() {
  return (
    <CircularSlider
      aria-label="Angle"
      defaultValue={45}
      markers={[0, 90, 180, 270]}
    />
  );
}

export default Example;
