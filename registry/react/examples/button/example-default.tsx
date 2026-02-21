import { CirclePlusIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";

const ButtonDemo = () => (
  <div className="flex flex-wrap gap-2">
    <Button variant="outline">Button</Button>
    <Button size="icon-md" variant="outline">
      <CirclePlusIcon />
    </Button>
  </div>
);

export default ButtonDemo;
