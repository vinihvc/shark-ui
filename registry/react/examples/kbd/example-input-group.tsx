import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import { Kbd, KbdGroup } from "@/registry/react/components/kbd";

const Example = () => (
  <InputGroup className="w-64">
    <InputGroupAddon>
      <Search />
    </InputGroupAddon>
    <InputGroupInput placeholder="Search..." />
    <InputGroupAddon align="inline-end">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
