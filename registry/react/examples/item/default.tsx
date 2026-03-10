import { BadgeCheck, ChevronRight, Ellipsis } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

const ItemDemo = () => (
  <div className="flex w-full max-w-md flex-col gap-6">
    <Item variant="outline">
      <ItemContent>
        <ItemTitle>Basic Item</ItemTitle>
        <ItemDescription>
          A simple item with title and description.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          <Ellipsis />
        </Button>
      </ItemActions>
    </Item>
<<<<<<< Updated upstream:registry/react/examples/item/default.tsx
    <Item asChild size="sm" variant="outline">
      <a href="#">
        <ItemMedia>
          <BadgeCheck className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Your profile has been verified.</ItemTitle>
        </ItemContent>
        <ItemActions>
          <ChevronRight className="size-4" />
        </ItemActions>
      </a>
=======
    <Item variant="outline">
      <ItemMedia>
        <BadgeCheck className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Your profile has been verified.</ItemTitle>
      </ItemContent>
      <ItemActions>
        <ChevronRight className="size-4" />
      </ItemActions>
>>>>>>> Stashed changes:registry/react/examples/item/example-default.tsx
    </Item>
  </div>
);

export default ItemDemo;
