"use client";

import { InfoIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
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
    <InputGroupInput placeholder="Enter value" />
    <InputGroupAddon align="inline-end">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button aria-label="More info" size="icon-xs" variant="ghost">
            <InfoIcon aria-hidden />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Additional information about this field</TooltipContent>
      </Tooltip>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
