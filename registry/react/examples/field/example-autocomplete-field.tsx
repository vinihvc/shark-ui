"use client";

import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
} from "@/registry/react/components/autocomplete";
import { ComboboxList } from "@/registry/react/components/combobox";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Grape", value: "grape" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Mango", value: "mango" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Kiwi", value: "kiwi" },
  { label: "Peach", value: "peach" },
  { label: "Pear", value: "pear" },
];

const Example = () => (
  <Field className="w-full max-w-xs">
    <FieldLabel>Fruits</FieldLabel>
    <Autocomplete items={items}>
      <AutocompleteInput
        aria-label="Search items"
        placeholder="Search items…"
      />
      <AutocompleteContent>
        <AutocompleteEmpty>No items found.</AutocompleteEmpty>
        <ComboboxList>
          {(item) => (
            <AutocompleteItem item={item} key={item.value}>
              {item.label}
            </AutocompleteItem>
          )}
        </ComboboxList>
      </AutocompleteContent>
    </Autocomplete>
    <FieldDescription>Select an item.</FieldDescription>
  </Field>
);

export default Example;
