"use client";

import { Badge } from "@/registry/react/components/badge";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const Example = () => (
  <InputGroup className="max-w-64">
    <InputGroupInput placeholder="Enter tag" />
    <InputGroupAddon align="inline-end">
      <Badge pill size="sm" variant="success">
        Available
      </Badge>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
