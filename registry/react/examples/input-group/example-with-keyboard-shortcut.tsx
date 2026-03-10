"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import { Kbd } from "@/registry/react/components/kbd";

const Example = () => (
  <InputGroup className="max-w-64">
    <InputGroupInput placeholder="Search..." />
    <InputGroupAddon align="inline-end">
      <Kbd>⌘K</Kbd>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
