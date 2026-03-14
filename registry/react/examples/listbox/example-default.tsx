"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemIndicator,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => (
  <Listbox
    className="w-full max-w-64"
    collection={collection}
    defaultValue={["br"]}
  >
    <ListboxContent>
      {collection.items.map((item) => (
        <ListboxItem item={item} key={item.value}>
          <ListboxItemText>{item.label}</ListboxItemText>
          <ListboxItemIndicator />
        </ListboxItem>
      ))}
    </ListboxContent>
  </Listbox>
);

const collection = createListCollection({
  items: [
    { label: "Brazil", value: "br" },
    { label: "Mexico", value: "mx" },
    { label: "Ireland", value: "ie" },
  ],
});

export default Example;
