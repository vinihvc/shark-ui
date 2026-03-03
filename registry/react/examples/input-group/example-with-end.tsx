"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/react/components/input-group";

const Example = () => (
  <InputGroup className="max-w-64">
    <InputGroupInput className="pr-1!" placeholder="username" />
    <InputGroupAddon align="inline-end">
      <InputGroupText>@example.com</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
