import {
  AngleSlider,
  AngleSliderControl,
  AngleSliderProgressRing,
  AngleSliderThumb,
  AngleSliderValueDisplay,
} from "@/registry/react/components/angle-slider";

export default function AngleSliderDemo() {
  return (
    <AngleSlider aria-label="Angle" defaultValue={45}>
      <AngleSliderControl>
        <AngleSliderProgressRing />
        <AngleSliderThumb />
      </AngleSliderControl>
      <AngleSliderValueDisplay />
    </AngleSlider>
  );
}
