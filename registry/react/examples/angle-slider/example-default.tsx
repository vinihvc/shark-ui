import {
  AngleSlider,
  AngleSliderValue,
} from "@/registry/react/components/angle-slider";

const AngleSliderDemo = () => {
  return (
    <AngleSlider aria-label="Angle" defaultValue={45}>
      <AngleSliderValue suffix="°" />
    </AngleSlider>
  );
};

export default AngleSliderDemo;
