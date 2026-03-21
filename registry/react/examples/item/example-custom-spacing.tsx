import { User } from "lucide-react";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-4">
    <Item className="w-full [--space:--spacing(2)]" variant="outline">
      <ItemMedia variant="icon">
        <User />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Compact spacing</ItemTitle>
        <ItemDescription>
          Uses `[--space:--spacing(2)]` for tighter padding and gap.
        </ItemDescription>
      </ItemContent>
    </Item>

    <Item
      className="w-full [--space:--spacing(3)] md:[--space:--spacing(5)]"
      variant="outline"
    >
      <ItemMedia variant="icon">
        <User />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Responsive spacing</ItemTitle>
        <ItemDescription>
          Wider from `md` up with `md:[--space:--spacing(5)]`.
        </ItemDescription>
      </ItemContent>
    </Item>
  </div>
);

export default Example;
