"use client";

import { createGridCollection } from "@ark-ui/react/collection";
import type React from "react";
import { Item } from "@/registry/react/components/item";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => (
  <Item className="w-full max-w-64 p-1" variant="outline">
    <Listbox collection={collection}>
      <ListboxContent
        className="grid grid-cols-[repeat(var(--column-count),1fr)] gap-1"
        style={
          { "--column-count": collection.columnCount } as React.CSSProperties
        }
      >
        {collection.items.map((item) => (
          <ListboxItem item={item} key={item.value}>
            <ListboxItemText className="text-center text-xl">
              {item.label}
            </ListboxItemText>
          </ListboxItem>
        ))}
      </ListboxContent>
    </Listbox>
  </Item>
);

const collection = createGridCollection({
  columnCount: 5,
  items: [
    { label: "😀", value: "grinning" },
    { label: "😍", value: "heart-eyes" },
    { label: "🥳", value: "partying" },
    { label: "😎", value: "sunglasses" },
    { label: "🤩", value: "star-struck" },
    { label: "😂", value: "joy" },
    { label: "🥰", value: "smiling-hearts" },
    { label: "😊", value: "blush" },
    { label: "🤗", value: "hugging" },
    { label: "😇", value: "innocent" },
    { label: "🔥", value: "fire" },
    { label: "✨", value: "sparkles" },
    { label: "💯", value: "hundred" },
    { label: "🎉", value: "tada" },
    { label: "❤️", value: "heart" },
    { label: "👍", value: "thumbs-up" },
    { label: "👏", value: "clap" },
    { label: "🚀", value: "rocket" },
    { label: "⭐", value: "star" },
    { label: "🌈", value: "rainbow" },
  ],
});

export default Example;
