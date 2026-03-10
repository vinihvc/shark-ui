"use client";

import { Item } from "@/registry/react/components/item";
import { Kbd } from "@/registry/react/components/kbd";
import {
  createListCollection,
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemIndicator,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => (
  <div className="flex w-full max-w-64 flex-col gap-4">
    <p className="text-center text-muted-foreground text-sm">
      Hold <Kbd>⌘</Kbd> or <Kbd>Ctrl</Kbd> to select multiple
    </p>
    <Item className="w-full p-1" variant="outline">
      <Listbox collection={collection} selectionMode="extended">
        <ListboxContent>
          {collection.items.map((item) => (
            <ListboxItem item={item} key={item.value}>
              <ListboxItemText>{item.label}</ListboxItemText>
              <ListboxItemIndicator />
            </ListboxItem>
          ))}
        </ListboxContent>
      </Listbox>
    </Item>
  </div>
);

const collection = createListCollection({
  items: [
    { label: "Brazil", value: "br" },
    { label: "Mexico", value: "mx" },
    { label: "Ireland", value: "ie" },
  ],
});

export default Example;
