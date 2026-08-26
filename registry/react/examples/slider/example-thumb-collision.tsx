import { Slider, SliderLabel } from "@/registry/react/components/slider";

const Example = () => (
  <Slider
    className="w-full max-w-xs"
    defaultValue={[30, 70]}
    thumbCollisionBehavior="push"
  >
    <SliderLabel>Range</SliderLabel>
  </Slider>
);

export default Example;
