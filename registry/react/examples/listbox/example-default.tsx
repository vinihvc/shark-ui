"use client";

import {
  createListCollection,
  Listbox,
  ListboxContent,
  ListboxItem,
} from "@/registry/react/components/listbox";

const collection = createListCollection({
  items: [
    { label: "United States", value: "us" },
    { label: "United Kingdom", value: "uk" },
    { label: "Canada", value: "ca" },
    { label: "Australia", value: "au" },
    { label: "Germany", value: "de" },
    { label: "France", value: "fr" },
    { label: "Japan", value: "jp" },
  ],
});

const ListboxDemo = () => (
  <Listbox collection={collection}>
    <ListboxContent>
      {collection.items.map((item) => (
        <ListboxItem item={item} key={item.value}>
          {item.label}
        </ListboxItem>
      ))}
    </ListboxContent>
  </Listbox>
);

export default ListboxDemo;
