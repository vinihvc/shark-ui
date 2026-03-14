"use client";

import { createListCollection } from "@ark-ui/react";
import { Item } from "@/registry/react/components/item";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemIndicator,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => (
  <Item className="w-full max-w-xs p-1" variant="outline">
    <Listbox collection={collection}>
      <ListboxContent>
        {collection.items.map((item) => (
          <ListboxItem item={item} key={item.value}>
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <ListboxItemText>{item.label}</ListboxItemText>
              <span className="text-muted-foreground text-xs">
                {item.description}
              </span>
            </div>
            <ListboxItemIndicator />
          </ListboxItem>
        ))}
      </ListboxContent>
    </Listbox>
  </Item>
);

const collection = createListCollection({
  items: [
    {
      label: "Brazil",
      value: "br",
      description: "South America's country, Portuguese speaking.",
    },
    {
      label: "Mexico",
      value: "mx",
      description: "North America's country, Spanish speaking.",
    },
    {
      label: "Ireland",
      value: "ie",
      description: "Europe's country, Irish/English speaking.",
    },
  ],
});

export default Example;
