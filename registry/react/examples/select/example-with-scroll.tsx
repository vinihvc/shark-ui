"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const Example = () => (
  <Select collection={collection} positioning={{ fitViewport: true }}>
    <SelectTrigger className="w-56">
      <SelectValue placeholder="Select framework" />
    </SelectTrigger>
    <SelectContent className="max-h-56">
      {collection.items.map((item) => (
        <SelectItem item={item} key={item.value}>
          {item.label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

const collection = createListCollection({
  items: Array.from({ length: 20 }, (_, i) => ({
    label: `Framework ${i + 1}`,
    value: `framework-${i + 1}`,
  })),
});

export default Example;
