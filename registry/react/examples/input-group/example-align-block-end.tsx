"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const Example = () => (
  <InputGroup className="max-w-64">
    <InputGroupInput placeholder="Input above addon" />
    <InputGroupAddon align="block-end">Helper text below</InputGroupAddon>
  </InputGroup>
);

export default Example;
