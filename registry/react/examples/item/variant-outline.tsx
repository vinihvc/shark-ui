import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/react/components/item";

const Example = () => (
  <Item className="w-full max-w-md" variant="outline">
    <ItemContent>
      <ItemTitle>Outline Variant</ItemTitle>
      <ItemDescription>Outlined style with a visible border.</ItemDescription>
    </ItemContent>
  </Item>
);

export default Example;
