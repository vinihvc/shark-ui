"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const collection = createListCollection({
  items: ["Brazil", "Mexico", "Ireland"],
});

const Example = () => (
  <Field className="w-full max-w-64">
    <FieldLabel>Country</FieldLabel>
    <Select collection={collection}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a country" />
      </SelectTrigger>
      <SelectContent>
        {collection.items.map((item) => (
          <SelectItem item={item} key={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    <FieldDescription>Used for shipping estimates</FieldDescription>
  </Field>
);

export default Example;
