"use client";

import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const Example = () => (
  <InputGroup className="max-w-64">
    <InputGroupAddon align="inline-start">
      <SearchIcon aria-hidden />
    </InputGroupAddon>
    <InputGroupInput placeholder="Search..." />
  </InputGroup>
);

export default Example;
