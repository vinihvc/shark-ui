import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";

export const InputGroupExample = () => (
  <InputGroup className="max-w-64">
    <InputGroupInput placeholder="Search..." />
    <InputGroupAddon>
      <SearchIcon />
    </InputGroupAddon>
  </InputGroup>
);
