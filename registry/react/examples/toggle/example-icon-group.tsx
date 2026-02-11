import { Bold, Italic, Underline } from "lucide-react";
import { Toggle } from "@/registry/react/components/toggle";

const ToggleDemo = () => (
  <div className="flex items-center gap-1">
    <Toggle aria-label="Toggle bold" variant="outline">
      <Bold />
    </Toggle>
    <Toggle aria-label="Toggle italic" variant="outline">
      <Italic />
    </Toggle>
    <Toggle aria-label="Toggle underline" variant="outline">
      <Underline />
    </Toggle>
  </div>
);

export default ToggleDemo;
