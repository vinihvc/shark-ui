import { Bold, Italic, Underline } from "lucide-react";
import {
  ToggleGroup,
  ToggleGroupItem,
  ToggleGroupSeparator,
} from "@/registry/react/components/toggle-group";

const Example = () => (
  <ToggleGroup defaultValue={["bold"]} multiple variant="outline">
    <ToggleGroupItem aria-label="Toggle bold" value="bold">
      <Bold />
    </ToggleGroupItem>
    <ToggleGroupSeparator className="h-6" orientation="vertical" />
    <ToggleGroupItem aria-label="Toggle italic" value="italic">
      <Italic />
    </ToggleGroupItem>
    <ToggleGroupSeparator className="h-6" orientation="vertical" />
    <ToggleGroupItem aria-label="Toggle underline" value="underline">
      <Underline />
    </ToggleGroupItem>
  </ToggleGroup>
);

export default Example;
