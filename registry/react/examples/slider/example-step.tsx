import { Slider, SliderLabel } from "@/registry/react/components/slider";

const Example = () => (
  <div className="flex w-full max-w-64 flex-col gap-4">
    <Slider className="w-full max-w-xs" defaultValue={[0]} max={2} min={0}>
      <SliderLabel>Storage size</SliderLabel>
    </Slider>

    <div className="flex w-full items-center justify-between gap-1 font-medium text-muted-foreground text-xs">
      <span>5 GB</span>
      <span>25 GB</span>
      <span>50 GB</span>
    </div>
  </div>
);

export default Example;
