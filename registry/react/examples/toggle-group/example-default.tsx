import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/react/components/toggle-group";

const ToggleGroupDemo = () => (
  <ToggleGroup defaultValue={["bold"]} multiple>
    <ToggleGroupItem aria-label="Toggle bold" value="bold">
      <BoldIcon />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Toggle italic" value="italic">
      <ItalicIcon />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Toggle underline" value="underline">
      <UnderlineIcon />
    </ToggleGroupItem>
  </ToggleGroup>
);

export default ToggleGroupDemo;
