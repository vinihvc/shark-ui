"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";

const items = Array.from({ length: 200 }, (_, i) => ({
  label: `Option ${i + 1}`,
  value: `option-${i + 1}`,
}));

const ComboboxVirtualizedDemo = () => {
  return (
    <Combobox className="w-64" items={items}>
      <ComboboxInput placeholder="Search 200 items..." />
      <ComboboxContent className="max-h-60">
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

export default ComboboxVirtualizedDemo;
