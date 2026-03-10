"use client";

import { Item } from "@/registry/react/components/item";
import {
  createListCollection,
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemIndicator,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => (
  <Item className="w-full max-w-64 p-1" variant="outline">
    <Listbox collection={collection}>
      <ListboxContent>
        {collection.items.map((item) => (
          <ListboxItem item={item} key={item.value}>
            {item.icon}
            <ListboxItemText>{item.label}</ListboxItemText>
            <ListboxItemIndicator />
          </ListboxItem>
        ))}
      </ListboxContent>
    </Listbox>
  </Item>
);

const collection = createListCollection({
  items: [
    { label: "Brazil", value: "brazil", icon: "🇧🇷" },
    { label: "Mexico", value: "mexico", icon: "🇲🇽" },
    { label: "Ireland", value: "ireland", icon: "🇮🇪" },
  ],
});

export default Example;
