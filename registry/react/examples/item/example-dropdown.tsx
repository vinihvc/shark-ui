"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

const people = [
  {
    username: "vinihvc",
    avatar: "https://github.com/vinihvc.png",
    email: "vinihvc@example.com",
  },
  {
    username: "segunadebayo",
    avatar: "https://github.com/segunadebayo.png",
    email: "segunadebayo@example.com",
  },
  {
    username: "pasqualevitiello",
    avatar: "https://github.com/pasqualevitiello.png",
    email: "pasqualevitiello@example.com",
  },
];

const Example = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">Select</Button>
    </MenuTrigger>
    <MenuContent className="w-64">
      {people.map((person) => (
        <MenuItem key={person.username} value={person.username}>
          <Item size="xs">
            <ItemMedia>
              <Avatar className="grayscale" size="sm">
                <AvatarImage alt="" src={person.avatar} />
                <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{person.username}</ItemTitle>
              <ItemDescription>{person.email}</ItemDescription>
            </ItemContent>
          </Item>
        </MenuItem>
      ))}
    </MenuContent>
  </Menu>
);

export default Example;
