import { Separator } from "@/registry/react/components/separator";

const SeparatorDemo = () => (
  <div>
    <div className="space-y-1">
      <h4 className="font-medium text-sm leading-none">Ark UI Primitives</h4>
      <p className="text-muted-foreground text-sm">
        A set of primitive components for building UI.
      </p>
    </div>

    <Separator className="my-4" />
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Examples</div>
      <Separator orientation="vertical" />
      <div>Documentation</div>
      <Separator orientation="vertical" />
      <div>GitHub</div>
    </div>
  </div>
);

export default SeparatorDemo;
