import { Heart } from "lucide-react";
import { Toggle } from "@/registry/react/components/toggle";

const ToggleDemo = () => (
  <Toggle className="data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:text-red-500">
    <Heart />
    Like
  </Toggle>
);

export default ToggleDemo;
