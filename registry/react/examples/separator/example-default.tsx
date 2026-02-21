import { Separator } from "@/registry/react/components/separator";

const SeparatorDemo = () => (
  <div className="flex max-w-sm flex-col gap-4 text-sm">
    <div className="flex flex-col gap-1">
      <h4 className="font-medium leading-none">Shark UI</h4>
      <p className="text-muted-foreground">
        A set of primitive components for building UI.
      </p>
    </div>
    <Separator />
    <div>
      A collection of accessible, beautiful, and customizable components.
    </div>
  </div>
);

export default SeparatorDemo;
