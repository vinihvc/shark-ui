"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

const ComboboxPopoverButtonDemo = () => {
  return (
    <Combobox className="w-64" inputBehavior="none" items={items}>
      <ComboboxInput className="sr-only" />

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

export default ComboboxPopoverButtonDemo;
