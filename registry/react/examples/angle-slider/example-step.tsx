import {
  AngleSlider,
  AngleSliderControl,
  AngleSliderProgressRing,
  AngleSliderThumb,
  AngleSliderValueDisplay,
} from "@/registry/react/components/angle-slider";

const Example = () => (
  <AngleSlider aria-label="Angle" defaultValue={45} step={15}>
    <AngleSliderControl>
      <AngleSliderProgressRing />
      <AngleSliderThumb />
    </AngleSliderControl>
    <AngleSliderValueDisplay />
  </AngleSlider>
);

export default Example;
