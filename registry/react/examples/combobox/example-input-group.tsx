"use client";

import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Combobox,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/react/components/input-group";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

const ComboboxInputGroupDemo = () => {
  return (
    <Combobox className="w-64" items={items}>
      <ComboboxControl asChild>
        <InputGroup>
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <ComboboxInput
            className={cn(
              "flex-1 rounded-none border-0 bg-transparent shadow-none",
              "focus-visible:ring-0 dark:bg-transparent"
            )}
            placeholder="Search fruits..."
          />
        </InputGroup>
      </ComboboxControl>
      <ComboboxContent>
        <ComboboxList<{ label: string; value: string }>>
          {(item) => (
            <ComboboxItem item={item} key={item.value}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default ComboboxInputGroupDemo;
