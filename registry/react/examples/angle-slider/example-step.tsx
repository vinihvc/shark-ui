import { AngleSlider } from "@/registry/react/components/angle-slider";

const Example = () => (
  <AngleSlider
    aria-label="Angle"
    defaultValue={120}
    markers
    markersAtSteps
    step={60}
  />
);

export default Example;
