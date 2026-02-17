import { BoldIcon } from "lucide-react";
import { Toggle } from "@/registry/react/components/toggle";

const ToggleDemo = () => (
  <Toggle aria-label="Toggle bold" variant="outline">
    <BoldIcon />
  </Toggle>
);

export default ToggleDemo;
