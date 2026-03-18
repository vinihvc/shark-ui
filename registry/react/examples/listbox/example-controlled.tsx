"use client";

import { createListCollection } from "@ark-ui/react";
import React from "react";
import { Item } from "@/registry/react/components/item";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemIndicator,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => {
  const [value, setValue] = React.useState(["md"]);

  const isLarge = value.includes("lg");

  return (
    <div className="flex w-full max-w-64 flex-col gap-4">
      <p className="text-center text-muted-foreground text-sm">
        Selected the Large size
      </p>
      <Item className="p-1" variant="outline">
        <Listbox
          collection={collection}
          onValueChange={(e) => setValue(e.value)}
          value={value}
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
      </Item>
      <p className="text-center text-muted-foreground text-sm">
        {isLarge ? "✅" : "❌"}
      </p>
    </div>
  );
};

const collection = createListCollection({
  items: [
    { label: "Small", value: "sm" },
    { label: "Medium", value: "md" },
    { label: "Large", value: "lg" },
    { label: "Extra Large", value: "xl" },
  ],
});

export default Example;
