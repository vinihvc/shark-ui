import { ShieldAlert } from "lucide-react";
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
    <ItemMedia variant="icon">
      <ShieldAlert />
    </ItemMedia>
    <ItemContent>
      <ItemTitle>Security Alert</ItemTitle>
      <ItemDescription>New login detected from unknown device.</ItemDescription>
    </ItemContent>
    <ItemActions>
      <Button size="sm" variant="outline">
        Review
      </Button>
    </ItemActions>
  </Item>
);

export default Example;
