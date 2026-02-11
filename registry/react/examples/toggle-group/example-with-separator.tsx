import { Bold, Italic, Underline } from "lucide-react";
import { Separator } from "@/registry/react/components/separator";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/react/components/toggle-group";

const ToggleGroupWithSeparatorDemo = () => (
  <ToggleGroup defaultValue={["bold"]} multiple variant="outline">
    <ToggleGroupItem aria-label="Toggle bold" value="bold">
      <Bold />
    </ToggleGroupItem>
    <Separator className="mx-0.5 h-6" orientation="vertical" />
    <ToggleGroupItem aria-label="Toggle italic" value="italic">
      <Italic />
    </ToggleGroupItem>
    <Separator className="mx-0.5 h-6" orientation="vertical" />
    <ToggleGroupItem aria-label="Toggle underline" value="underline">
      <Underline />
    </ToggleGroupItem>
  </ToggleGroup>
);

export default ToggleGroupWithSeparatorDemo;
