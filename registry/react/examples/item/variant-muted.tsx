import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/react/components/item";

const Example = () => (
  <Item className="w-full max-w-md" variant="muted">
    <ItemContent>
      <ItemTitle>Muted Variant</ItemTitle>
      <ItemDescription>Muted background for secondary content.</ItemDescription>
    </ItemContent>
  </Item>
);

export default Example;
