import { Plus } from "lucide-react";
import { Button } from "@/registry/react/components/button";

const Example = () => (
  <div className="flex items-center gap-2">
    <Button size="xl">Button</Button>
    <Button size="icon-xl">
      <Plus />
    </Button>
  </div>
);

export default Example;
