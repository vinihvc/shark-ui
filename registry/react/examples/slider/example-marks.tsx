import { Slider } from "@/registry/react/components/slider";

const Example = () => (
  <Slider
    className="w-full max-w-xs"
    defaultValue={[5]}
    markerInterval={2}
    max={12}
    showMarkers
  />
);

export default Example;
