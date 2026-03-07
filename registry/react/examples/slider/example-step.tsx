import { Slider, SliderLabel } from "@/registry/react/components/slider";

const Example = () => (
  <Slider
    className="w-full max-w-xs"
    defaultValue={[0]}
    markerInterval={1}
    markerLabels={["5GB", "25GB", "50GB"]}
    max={2}
    min={0}
    showMarkers
  >
    <SliderLabel>Storage size</SliderLabel>
  </Slider>
);

export default Example;
