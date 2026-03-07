import {
  Slider,
  SliderLabel,
  SliderValue,
} from "@/registry/react/components/slider";

const Example = () => (
  <Slider className="w-full max-w-xs" defaultValue={[50]} max={200} min={0}>
    <div className="flex items-center justify-between">
      <SliderLabel>Volume</SliderLabel>
      <SliderValue />
    </div>
  </Slider>
);

export default Example;
