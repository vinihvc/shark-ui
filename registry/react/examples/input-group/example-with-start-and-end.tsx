"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/react/components/input-group";

const Example = () => (
  <InputGroup className="max-w-80">
    <InputGroupAddon>
      <InputGroupText>https://</InputGroupText>
    </InputGroupAddon>
    <InputGroupInput placeholder="shark" />
    <InputGroupAddon align="inline-end">
      <InputGroupText>.com</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
