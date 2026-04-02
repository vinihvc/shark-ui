import { AspectRatio } from "@/registry/react/components/aspect-ratio";

const AspectRatioDemo = () => (
  <AspectRatio className="w-full max-w-64 rounded-xl bg-muted">
    <div className="flex size-full items-center justify-center">
      <span className="select-none text-muted-foreground text-xs">1:1</span>
    </div>
  </AspectRatio>
);

export default AspectRatioDemo;
