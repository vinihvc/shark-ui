import { BadgeCheck, ChevronRight } from "lucide-react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

export const ItemDemo = () => {
  return (
    <Item tabIndex={-1} variant="outline">
      <ItemMedia>
        <BadgeCheck className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Your profile has been verified.</ItemTitle>
      </ItemContent>
      <ItemActions>
        <ChevronRight className="size-4" />
      </ItemActions>
    </Item>
  );
};
