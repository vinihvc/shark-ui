"use client";

import { useListCollection } from "@ark-ui/react/combobox";
import { useFilter } from "@ark-ui/react/locale";
import {
  Combobox,
  ComboboxClearTrigger,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxTrigger,
} from "../components/combobox";

const ComboboxDemo = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems: ["React", "Solid", "Vue", "Svelte"],
    filter: contains,
  });

  const handleInputChange = (details: { inputValue: string }) => {
    filter(details.inputValue);
  };

  return (
    <Combobox
      className="w-64"
      collection={collection}
      onInputValueChange={handleInputChange}
    >
      <ComboboxControl>
        <ComboboxInput placeholder="Select a framework..." />
        <ComboboxClearTrigger />
        <ComboboxTrigger />
      </ComboboxControl>

      <ComboboxContent>
        <ComboboxItemGroup>
          {collection.items.map((item) => (
            <ComboboxItem item={item} key={item}>
              {item}
            </ComboboxItem>
          ))}
        </ComboboxItemGroup>
      </ComboboxContent>
    </Combobox>
  );
};

export default ComboboxDemo;
