"use client";

import { createListCollection } from "@ark-ui/react";
import { Field } from "@/registry/react/components/field";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemIndicator,
  ListboxItemText,
  ListboxLabel,
} from "@/registry/react/components/listbox";

const Example = () => (
  <Field className="w-full max-w-xl">
    <Listbox collection={collection} orientation="horizontal">
      <ListboxLabel>Favorite album</ListboxLabel>
      <ListboxContent className="overflow-x-auto">
        {collection.items.map((item) => (
          <ListboxItem
            className="w-full flex-col items-start"
            item={item}
            key={item.title}
          >
            <div className="aspect-square size-20 w-full rounded-lg bg-foreground" />
            <div>
              <ListboxItemText>{item.title}</ListboxItemText>
              <p className="text-muted-foreground text-xs">{item.artist}</p>
            </div>
            <ListboxItemIndicator className="absolute top-4 right-4 shrink-0 rounded-sm bg-background [&_svg]:text-foreground!" />
          </ListboxItem>
        ))}
      </ListboxContent>
    </Listbox>
  </Field>
);

const collection = createListCollection({
  items: [
    { artist: "O Rappa", title: "Rappa Mundi" },
    { artist: "Charlie Brown Jr.", title: "Acústico MTV" },
    { artist: "Michael Jackson", title: "Thriller" },
    { artist: "Eminem", title: "The Eminem Show" },
  ],
  itemToString: (item) => item.title,
  itemToValue: (item) => item.title,
});

export default Example;
