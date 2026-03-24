import { CircularSlider } from "@/registry/react/components/circular-slider";

const Example = () => (
  <CircularSlider
    aria-label="Angle"
    defaultValue={120}
    markers
    markersAtSteps
    step={60}
  />
);

export default Example;
