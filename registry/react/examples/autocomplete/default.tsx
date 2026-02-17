"use client";

import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteControl,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
} from "@/registry/react/components/autocomplete";
import { ComboboxList } from "@/registry/react/components/combobox";

const items = ["Apple", "Banana", "Cherry", "Date"];

const AutocompleteDemo = () => {
  return (
    <Autocomplete items={items} itemToString={(i) => i} itemToValue={(i) => i}>
      <AutocompleteControl>
        <AutocompleteInput />
      </AutocompleteControl>

      <AutocompleteContent>
        <AutocompleteEmpty />
        <ComboboxList<string>>
          {(item) => (
            <AutocompleteItem item={item} key={item}>
              {item}
            </AutocompleteItem>
          )}
        </ComboboxList>
      </AutocompleteContent>
    </Autocomplete>
  );
};

export default AutocompleteDemo;
