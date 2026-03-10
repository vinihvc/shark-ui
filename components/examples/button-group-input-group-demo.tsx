"use client";

import { AudioLinesIcon, PlusIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

export const ButtonGroupInputGroup = () => {
  return (
    <InputGroup className="max-w-64">
      <InputGroupAddon align="inline-start">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              aria-pressed={false}
              data-active={false}
              size="icon-xs"
              tabIndex={-1}
              variant="ghost"
            >
              <AudioLinesIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Voice Mode</TooltipContent>
        </Tooltip>
      </InputGroupAddon>
      <InputGroupInput placeholder="Ask anything..." tabIndex={-1} />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs" tabIndex={-1} variant="ghost">
          <PlusIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
};
