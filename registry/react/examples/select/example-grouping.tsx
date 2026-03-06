"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const Example = () => (
  <Select collection={collection}>
    <SelectTrigger className="w-56">
      <SelectValue placeholder="Select framework" />
    </SelectTrigger>
    <SelectContent>
      {collection.group().map(([category, items]) => (
        <SelectGroup heading={category} key={category}>
          {items.map((item) => (
            <SelectItem item={item} key={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      ))}
    </SelectContent>
  </Select>
);

const collection = createListCollection({
  items: [
    { label: "Next.js", value: "next", category: "Frontend" },
    { label: "Vite", value: "vite", category: "Frontend" },
    { label: "Astro", value: "astro", category: "Frontend" },
    { label: "Express", value: "express", category: "Backend" },
    { label: "Fastify", value: "fastify", category: "Backend" },
    { label: "NestJS", value: "nestjs", category: "Backend" },
  ],
  groupBy: (item) => (item as { category: string }).category,
});

export default Example;
