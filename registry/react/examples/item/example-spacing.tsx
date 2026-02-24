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
          Uses [--space:--spacing(2)] for tight layouts.
        </ItemDescription>
      </ItemContent>
    </Item>

    <Item
      className="w-full [--space:--spacing(4)] md:[--space:--spacing(4)]"
      variant="outline"
    >
      <ItemMedia variant="icon">
        <User />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Responsive spacing</ItemTitle>
        <ItemDescription>
          Larger on md screens: md:[--space:--spacing(4)]
        </ItemDescription>
      </ItemContent>
    </Item>
  </div>
);

export default Example;
