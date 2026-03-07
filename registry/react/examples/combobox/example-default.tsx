"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";

const items = ["Apple", "Banana", "Cherry", "Date"];

const ComboboxDemo = () => {
  return (
    <Combobox className="w-64" items={items}>
      <ComboboxInput />
      <ComboboxContent>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem item={item} key={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default ComboboxDemo;
