"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/react/components/input-group";

const Example = () => (
  <InputGroup className="max-w-64">
    <InputGroupAddon>
      <InputGroupText>https://</InputGroupText>
    </InputGroupAddon>
    <InputGroupInput className="pl-1!" placeholder="example.com" />
  </InputGroup>
);

export default Example;
