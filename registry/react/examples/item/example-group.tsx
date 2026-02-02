import { PlusIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

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

const Example = () => {
  return (
    <ItemGroup className="max-w-sm">
      {people.map((person) => (
        <Item key={person.username} variant="outline">
          <ItemMedia>
            <Avatar>
              <AvatarImage className="grayscale" src={person.avatar} />
              <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent className="gap-1">
            <ItemTitle>{person.username}</ItemTitle>
            <ItemDescription>{person.email}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button className="rounded-full" size="icon-md" variant="ghost">
              <PlusIcon />
            </Button>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  );
};

export default Example;
