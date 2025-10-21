import { TextAlignCenter, TextAlignEnd, TextAlignStart } from "lucide-react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/react/components/toggle-group";

const ToggleGroupDemo = () => (
  <ToggleGroup>
    <ToggleGroupItem value="1">
      <TextAlignStart />
    </ToggleGroupItem>

    <ToggleGroupItem value="2">
      <TextAlignCenter />
    </ToggleGroupItem>

    <ToggleGroupItem value="3">
      <TextAlignEnd />
    </ToggleGroupItem>
  </ToggleGroup>
);

export default ToggleGroupDemo;
