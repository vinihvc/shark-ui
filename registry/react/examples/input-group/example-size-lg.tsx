"use client";

import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const Example = () => (
  <InputGroup className="max-w-64" size="lg">
    <InputGroupInput placeholder="Search..." />
    <InputGroupAddon>
      <SearchIcon aria-hidden />
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
