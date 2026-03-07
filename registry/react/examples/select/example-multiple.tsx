"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Select,
  SelectContent,
  SelectContext,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const Example = () => (
  <Select
    collection={collection}
    defaultValue={["javascript", "typescript"]}
    multiple
  >
    <SelectTrigger className="w-64">
      <SelectValue className="capitalize">
        <SelectContext>{({ value }) => renderValue(value)}</SelectContext>
      </SelectValue>
    </SelectTrigger>
    <SelectContent>
      {collection.items.map((item) => (
        <SelectItem item={item} key={item.value}>
          {item.label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

const renderValue = (value: string[]) => {
  if (value.length === 0) {
    return "Select languages…";
  }

  const firstValue = value?.at(0) ?? "";
  const additionalValues =
    value.length > 1 ? ` (+${value.length - 1} more)` : "";

  return firstValue + additionalValues;
};

const collection = createListCollection({
  items: [
    { label: "JavaScript", value: "javascript" },
    { label: "TypeScript", value: "typescript" },
    { label: "Python", value: "python" },
    { label: "Rust", value: "rust" },
  ],
});

export default Example;
