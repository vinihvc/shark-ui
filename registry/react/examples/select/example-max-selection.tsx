"use client";

import { createListCollection } from "@ark-ui/react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectContext,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const MAX_SELECTION = 3;

const Example = () => {
  const [value, setValue] = React.useState<string[]>([]);

  const handleValueChange = (details: { value: string[] }) => {
    const newValue = details.value.slice(0, MAX_SELECTION);
    setValue(newValue);
  };

  return (
    <Select
      collection={collection}
      multiple
      onValueChange={handleValueChange}
      value={value}
    >
      <SelectTrigger className="w-56">
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
};

const renderValue = (value: string[]) => {
  if (value.length === 0) {
    return "Select 3 frameworks";
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
