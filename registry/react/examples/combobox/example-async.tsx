"use client";

import React from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";

const allItems = [
  { label: "Apple", value: "apple" },
  { label: "Apricot", value: "apricot" },
  { label: "Banana", value: "banana" },
  { label: "Berry", value: "berry" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
  { label: "Fig", value: "fig" },
  { label: "Grape", value: "grape" },
  { label: "Mango", value: "mango" },
  { label: "Melon", value: "melon" },
  { label: "Orange", value: "orange" },
  { label: "Peach", value: "peach" },
  { label: "Pear", value: "pear" },
  { label: "Plum", value: "plum" },
];

const fetchItems = async (
  query: string
): Promise<{ label: string; value: string }[]> => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  if (!query.trim()) {
    return [];
  }
  const lower = query.toLowerCase();
  return allItems.filter(
    (item) =>
      item.label.toLowerCase().includes(lower) ||
      item.value.toLowerCase().includes(lower)
  );
};

const ComboboxAsyncDemo = () => {
  const [items, setItems] = React.useState<{ label: string; value: string }[]>(
    []
  );
  const [loading, setLoading] = React.useState(false);

  const fetchRef = React.useRef(0);

  const handleInputValueChange = React.useCallback(
    (details: { inputValue: string }) => {
      const query = details.inputValue;
      if (!query.trim()) {
        setItems([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      fetchRef.current += 1;
      const currentFetch = fetchRef.current;

      fetchItems(query).then((results) => {
        if (currentFetch === fetchRef.current) {
          setItems(results);
          setLoading(false);
        }
      });
    },
    []
  );

  return (
    <Combobox
      className="w-64"
      items={items}
      onInputValueChange={handleInputValueChange}
      openOnChange={(details) => !!details.inputValue}
    >
      <ComboboxInput placeholder="Search fruits..." />
      <ComboboxContent>
        {loading && (
          <div className="px-2 py-2 text-center text-muted-foreground text-sm">
            Searching...
          </div>
        )}
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

export default ComboboxAsyncDemo;
