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
  groupBy: (item) => (item as { region: string }).region,
  items: [
    { label: "Brazil", region: "South America", value: "br" },
    { label: "Colombia", region: "South America", value: "co" },
    { label: "Mexico", region: "North America", value: "mx" },
    { label: "Canada", region: "North America", value: "ca" },
  ],
});

export default Example;
