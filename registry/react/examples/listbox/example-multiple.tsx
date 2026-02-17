"use client";

import { ListboxContent } from "@ark-ui/react";
import {
  createListCollection,
  Listbox,
  ListboxItem,
} from "@/registry/react/components/listbox";

const collection = createListCollection({
  items: [
    { label: "Monday", value: "mon" },
    { label: "Tuesday", value: "tue" },
    { label: "Wednesday", value: "wed" },
    { label: "Thursday", value: "thu" },
    { label: "Friday", value: "fri" },
    { label: "Saturday", value: "sat" },
    { label: "Sunday", value: "sun" },
  ],
});

const Example = () => (
  <Listbox collection={collection} selectionMode="multiple">
    <ListboxContent>
      {collection.items.map((item) => (
        <ListboxItem item={item} key={item.value}>
          {item.label}
        </ListboxItem>
      ))}
    </ListboxContent>
  </Listbox>
);

export default Example;
