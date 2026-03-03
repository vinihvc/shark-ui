"use client";

import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const Example = () => (
  <InputGroup className="max-w-64">
    <InputGroupInput placeholder="Search..." />
    <InputGroupAddon align="inline-end">
      <InputGroupButton aria-label="Search" size="icon-xs" variant="ghost">
        <SearchIcon aria-hidden />
      </InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
