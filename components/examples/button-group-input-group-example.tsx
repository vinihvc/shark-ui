"use client";

import { AudioLinesIcon, ImageIcon, PlusIcon, VideoIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

export const ButtonGroupInputGroupExample = () => {
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
      <Menu>
        <InputGroupAddon align="inline-end">
          <MenuTrigger asChild>
            <InputGroupButton size="icon-xs" tabIndex={-1} variant="ghost">
              <PlusIcon />
            </InputGroupButton>
          </MenuTrigger>
          <MenuContent>
            <MenuItem value="add-new-item">
              <PlusIcon />
              Upload file
            </MenuItem>
            <MenuItem value="upload-image">
              <ImageIcon />
              Upload image
            </MenuItem>
            <MenuItem value="upload-video">
              <VideoIcon />
              Upload video
            </MenuItem>
            <MenuItem value="upload-audio">
              <AudioLinesIcon />
              Upload audio
            </MenuItem>
          </MenuContent>
        </InputGroupAddon>
      </Menu>
    </InputGroup>
  );
};
