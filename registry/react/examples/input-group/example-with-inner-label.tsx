"use client";

import { InfoIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { FieldLabel } from "@/registry/react/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const Example = () => (
  <InputGroup className="max-w-64">
    <InputGroupInput id="username" placeholder="John Doe" />
    <InputGroupAddon align="block-start">
      <FieldLabel htmlFor="username">Username</FieldLabel>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            aria-label="More info"
            className="ms-auto rtl:me-auto"
            size="icon-xs"
            variant="ghost"
          >
            <InfoIcon aria-hidden />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Enter a username for your account</TooltipContent>
      </Tooltip>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
