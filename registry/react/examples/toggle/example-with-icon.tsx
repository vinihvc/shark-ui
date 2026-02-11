import { Bold } from "lucide-react";
import { Toggle } from "@/registry/react/components/toggle";

const ToggleDemo = () => (
  <Toggle aria-label="Toggle bold" variant="outline">
    <Bold />
  </Toggle>
);

export default ToggleDemo;
