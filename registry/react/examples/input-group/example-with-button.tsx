"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const Example = () => (
  <InputGroup className="max-w-80">
    <InputGroupInput placeholder="Your email" type="email" />
    <InputGroupAddon align="inline-end">
      <InputGroupButton size="xs" variant="ghost">
        Subscribe
      </InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
