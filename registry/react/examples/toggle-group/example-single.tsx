import { Bold, Italic, Underline } from "lucide-react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/react/components/toggle-group";

const ToggleGroupSingleDemo = () => (
  <ToggleGroup defaultValue={["bold"]} multiple={false}>
    <ToggleGroupItem aria-label="Toggle bold" value="bold">
      <Bold />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Toggle italic" value="italic">
      <Italic />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Toggle underline" value="underline">
      <Underline />
    </ToggleGroupItem>
  </ToggleGroup>
);

export default ToggleGroupSingleDemo;
