import { AspectRatio } from "@/registry/react/components/aspect-ratio";

const Example = () => (
  <AspectRatio className="w-full max-w-40 rounded-lg bg-muted [--ratio:9/16]">
    <div className="flex size-full items-center justify-center">
      <span className="select-none text-muted-foreground text-xs">9:16</span>
    </div>
  </AspectRatio>
);

export default Example;
