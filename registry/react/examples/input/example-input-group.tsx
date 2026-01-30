import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const Example = () => (
  <InputGroup className="w-64">
    <InputGroupInput placeholder="Search..." />
    <InputGroupAddon>
      <Search />
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
