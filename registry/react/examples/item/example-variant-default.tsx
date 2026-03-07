import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/react/components/item";

const Example = () => (
  <Item className="w-full max-w-md" variant="default">
    <ItemContent>
      <ItemTitle>Default Variant</ItemTitle>
      <ItemDescription>Transparent background with no border.</ItemDescription>
    </ItemContent>
  </Item>
);

export default Example;
