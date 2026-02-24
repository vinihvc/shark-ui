import { Button } from "@/registry/react/components/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/react/components/item";

const Example = () => (
  <Item className="w-full max-w-md" variant="outline">
    <ItemContent>
      <ItemTitle>Basic Item</ItemTitle>
      <ItemDescription>
        A simple item with title and description.
      </ItemDescription>
    </ItemContent>
    <ItemActions>
      <Button size="icon-sm" variant="outline">
        Action
      </Button>
    </ItemActions>
  </Item>
);

export default Example;
