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
  { label: "Date", value: "date" },
];

const Example = () => {
  return (
    <Combobox className="w-64" items={items}>
      <ComboboxInput size="lg" />
      <ComboboxContent>
        <ComboboxList>
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

export default Example;
