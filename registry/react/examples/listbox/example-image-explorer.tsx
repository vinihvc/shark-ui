"use client";

import { createListCollection } from "@ark-ui/react";
import React from "react";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => {
  const [value, setValue] = React.useState(["mountain"]);

  const selectedImage = collection.items.find(
    (item) => item.value === value.at(0)
  );

  return (
    <div className="flex w-full max-w-lg flex-col gap-4 sm:flex-row">
      <Listbox
        className="w-full sm:max-w-40"
        collection={collection}
        onValueChange={(e) => setValue(e.value)}
        value={value}
      >
        <ListboxContent className="overflow-auto max-sm:flex-row">
          {collection.items.map((item) => (
            <ListboxItem item={item} key={item.value}>
              <ListboxItemText>{item.label}</ListboxItemText>
            </ListboxItem>
          ))}
        </ListboxContent>
      </Listbox>
      <div className="flex w-full items-end rounded-xl border bg-muted p-4">
        <div className="mt-auto">
          <h3 className="font-medium text-sm">{selectedImage?.label}</h3>
          <p className="text-muted-foreground text-xs">{selectedImage?.alt}</p>
        </div>
      </div>
    </div>
  );
};

const collection = createListCollection({
  items: [
    {
      alt: "Scenic mountain view",
      label: "Mountain Landscape",
      value: "mountain",
    },
    {
      alt: "Ocean waves",
      label: "Ocean Waves",
      value: "ocean",
    },
    {
      alt: "Forest path",
      label: "Forest Path",
      value: "forest",
    },
    {
      alt: "City skyline",
      label: "City Skyline",
      value: "city",
    },
    {
      alt: "Desert dunes",
      label: "Desert Dunes",
      value: "desert",
    },
  ],
});

export default Example;
