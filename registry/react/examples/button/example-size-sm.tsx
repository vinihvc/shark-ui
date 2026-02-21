import { PlusIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";

const Example = () => (
  <div className="flex items-center gap-2">
    <Button size="sm">Button</Button>
    <Button size="icon-sm">
      <PlusIcon />
    </Button>
  </div>
);

export default Example;
