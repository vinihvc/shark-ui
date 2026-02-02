import { User } from "lucide-react";
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
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-4">
    <Item variant="outline">
      <ItemMedia variant="default">
        <Avatar size="sm">
          <AvatarImage alt="" src="https://github.com/pasqualevitiello.png" />
          <AvatarFallback>PV</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Pasquale Vitiello</ItemTitle>
        <ItemDescription>Last seen 5 months ago</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          View
        </Button>
      </ItemActions>
    </Item>
    <Item variant="outline">
      <ItemMedia variant="default">
        <Avatar size="sm">
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>No Team Members</ItemTitle>
        <ItemDescription>
          Invite your team to collaborate on this project.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          Invite
        </Button>
      </ItemActions>
    </Item>
  </div>
);

export default Example;
