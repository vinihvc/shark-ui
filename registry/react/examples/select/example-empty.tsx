"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Select,
  SelectContent,
  SelectEmpty,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const Example = () => (
  <Select collection={collection}>
    <SelectTrigger className="w-48">
      <SelectValue placeholder="Select an option" />
    </SelectTrigger>
    <SelectContent>
      <SelectEmpty>No items to display</SelectEmpty>
    </SelectContent>
  </Select>
);

const collection = createListCollection({
  items: [],
});

export default Example;
