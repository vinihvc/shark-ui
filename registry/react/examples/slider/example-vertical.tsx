import { Slider } from "@/registry/react/components/slider";

const Example = () => (
  <div className="mx-auto flex w-full max-w-xs items-center justify-center gap-6">
    <Slider
      className="h-40"
      defaultValue={[75]}
      max={100}
      orientation="vertical"
      step={1}
    />
    <Slider
      className="h-40"
      defaultValue={[25]}
      max={100}
      orientation="vertical"
      step={1}
    />
  </div>
);

export default Example;
