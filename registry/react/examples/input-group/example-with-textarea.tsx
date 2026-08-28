"use client";

import { ArrowUpIcon, PlusIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/react/components/input-group";

const Example = () => (
  <InputGroup className="max-w-xs" pill>
    <InputGroupTextarea placeholder="Ask, Search or Chat…" />
    <InputGroupAddon align="block-end">
      <Button aria-label="Add files" pill size="icon-sm" variant="ghost">
        <PlusIcon />
      </Button>
      <InputGroupText className="ms-auto">33% used</InputGroupText>
      <Button aria-label="Send" pill size="icon-sm">
        <ArrowUpIcon />
      </Button>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
