"use client";

import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const Example = () => (
  <InputGroup className="max-w-xs" pill>
    <InputGroupAddon align="inline-start">
      <SearchIcon aria-hidden="true" />
    </InputGroupAddon>
    <InputGroupInput aria-label="Search" placeholder="Search…" type="search" />
    <InputGroupAddon align="inline-end">
      <InputGroupButton>Go</InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
