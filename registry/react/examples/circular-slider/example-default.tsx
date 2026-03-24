import {
  CircularSlider,
  CircularSliderValue,
} from "@/registry/react/components/circular-slider";

const CircularSliderDemo = () => {
  return (
    <CircularSlider aria-label="Angle" defaultValue={45}>
      <CircularSliderValue suffix="°" />
    </CircularSlider>
  );
};

export default CircularSliderDemo;
