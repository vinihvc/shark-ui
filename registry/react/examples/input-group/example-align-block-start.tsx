"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const Example = () => (
  <InputGroup className="max-w-64">
    <InputGroupAddon align="block-start">Label above</InputGroupAddon>
    <InputGroupInput placeholder="Input below label" />
  </InputGroup>
);

export default Example;
