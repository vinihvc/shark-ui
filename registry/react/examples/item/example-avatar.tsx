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
  <Item className="w-full max-w-md" variant="outline">
    <ItemMedia>
      <Avatar size="sm">
        <AvatarImage
          alt="@pasqualevitiello"
          src="https://github.com/pasqualevitiello.png"
        />
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
);

export default Example;
