"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import { Spinner } from "@/registry/react/components/spinner";

const Example = () => (
  <InputGroup className="max-w-64" data-disabled>
    <InputGroupInput disabled placeholder="Loading..." />
    <InputGroupAddon align="inline-end">
      <Spinner aria-label="Loading" />
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
