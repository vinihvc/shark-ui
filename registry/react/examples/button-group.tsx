"use client";

import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from "@/registry/react/components/menu";

const ButtonGroupDemo = () => {
  const [label, setLabel] = React.useState("personal");

  return (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex">
        <Button aria-label="Go Back" size="icon-md" variant="outline">
          <ArrowLeftIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Snooze</Button>
        <Menu positioning={{ placement: "bottom-end" }}>
          <MenuTrigger asChild>
            <Button aria-label="More Options" size="icon-md" variant="outline">
              <MoreHorizontalIcon />
            </Button>
          </MenuTrigger>
          <MenuContent className="w-52">
            <MenuGroup>
              <MenuItem value="mark-as-read">
                <MailCheckIcon />
                Mark as Read
              </MenuItem>
              <MenuItem value="archive">
                <ArchiveIcon />
                Archive
              </MenuItem>
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup>
              <MenuItem value="snooze">
                <ClockIcon />
                Snooze
              </MenuItem>
              <MenuItem value="add-to-calendar">
                <CalendarPlusIcon />
                Add to Calendar
              </MenuItem>
              <MenuItem value="add-to-list">
                <ListFilterIcon />
                Add to List
              </MenuItem>
              <MenuSub>
                <MenuSubTrigger>
                  <TagIcon />
                  Label As...
                </MenuSubTrigger>
                <MenuSubContent>
                  <MenuRadioGroup
                    onValueChange={({ value }) => setLabel(value)}
                    value={label}
                  >
                    <MenuRadioItem value="personal">Personal</MenuRadioItem>
                    <MenuRadioItem value="work">Work</MenuRadioItem>
                    <MenuRadioItem value="other">Other</MenuRadioItem>
                  </MenuRadioGroup>
                </MenuSubContent>
              </MenuSub>
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup>
              <MenuItem value="trash" variant="destructive">
                <Trash2Icon />
                Trash
              </MenuItem>
            </MenuGroup>
          </MenuContent>
        </Menu>
      </ButtonGroup>
    </ButtonGroup>
  );
};

export default ButtonGroupDemo;
