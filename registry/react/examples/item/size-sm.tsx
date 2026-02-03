import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/react/components/item";

const Example = () => (
  <Item className="w-full max-w-md" size="sm" variant="outline">
    <ItemContent>
      <ItemTitle>Small Size</ItemTitle>
      <ItemDescription>A compact size for dense layouts.</ItemDescription>
    </ItemContent>
  </Item>
);

export default Example;
