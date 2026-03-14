"use client";

import { createListCollection } from "@ark-ui/react";
import { Item } from "@/registry/react/components/item";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemGroup,
  ListboxItemGroupLabel,
  ListboxItemIndicator,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => (
  <Item className="w-full max-w-64 p-1" variant="outline">
    <Listbox collection={collection}>
      <ListboxContent>
        {collection.group().map(([region, items]) => (
          <ListboxItemGroup key={region}>
            <ListboxItemGroupLabel>{region}</ListboxItemGroupLabel>
            {items.map((item) => (
              <ListboxItem item={item} key={item.value}>
                <ListboxItemText>{item.label}</ListboxItemText>
                <ListboxItemIndicator />
              </ListboxItem>
            ))}
          </ListboxItemGroup>
        ))}
      </ListboxContent>
    </Listbox>
  </Item>
);

const collection = createListCollection({
  items: [
    { label: "Brazil", value: "br", region: "South America" },
    { label: "Colombia", value: "co", region: "South America" },
    { label: "Mexico", value: "mx", region: "North America" },
    { label: "Canada", value: "ca", region: "North America" },
  ],
  groupBy: (item) => (item as { region: string }).region,
});

export default Example;
