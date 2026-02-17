import { CirclePlusIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";

const ButtonDemo = () => (
  <div className="flex flex-wrap gap-2">
    <Button>Button</Button>
    <Button size="icon-md">
      <CirclePlusIcon />
    </Button>
  </div>
);

export default ButtonDemo;
