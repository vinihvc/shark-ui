import { AspectRatio } from "@/registry/react/components/aspect-ratio";

const Example = () => (
  <AspectRatio className="w-full max-w-64 rounded-xl bg-muted [--ratio:16/9]">
    <div className="flex size-full items-center justify-center">
      <span className="select-none text-muted-foreground text-xs">16:9</span>
    </div>
  </AspectRatio>
);

export default Example;
