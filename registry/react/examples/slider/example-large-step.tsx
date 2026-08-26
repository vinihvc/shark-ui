import { Slider, SliderLabel } from "@/registry/react/components/slider";

const Example = () => (
  <Slider
    className="w-full max-w-xs"
    defaultValue={[40]}
    largeStep={20}
    step={1}
  >
    <SliderLabel>Volume</SliderLabel>
  </Slider>
);

export default Example;
