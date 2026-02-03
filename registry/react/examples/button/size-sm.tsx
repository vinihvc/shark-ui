import { Plus } from "lucide-react";
import { Button } from "@/registry/react/components/button";

const Example = () => (
  <div className="flex items-center gap-2">
    <Button size="sm">Button</Button>
    <Button size="icon-sm">
      <Plus />
    </Button>
  </div>
);

export default Example;
