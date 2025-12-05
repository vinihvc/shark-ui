"use client";

import { useFilter } from "@ark-ui/react";
import { useListCollection } from "@ark-ui/react/combobox";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteControl,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteItemGroup,
} from "../components/autocomplete";
import {
  Field,
  FieldHelper,
  FieldInput,
  FieldLabel,
} from "../components/field";

const AutocompleteDemo = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems: ["React", "Solid", "Vue", "Svelte"],
    filter: contains,
  });

  const handleInputChange = (details: { inputValue: string }) => {
    filter(details.inputValue);
  };

  return (
    <Field>
      <FieldLabel>Choose a fruit</FieldLabel>
      <Autocomplete
        collection={collection}
        onInputValueChange={handleInputChange}
      >
        <AutocompleteControl>
          <FieldInput>
            <AutocompleteInput />
          </FieldInput>
        </AutocompleteControl>

        <AutocompleteContent>
          <AutocompleteEmpty />
          <AutocompleteItemGroup>
            {collection.items.map((item) => (
              <AutocompleteItem item={item} key={item}>
                {item}
              </AutocompleteItem>
            ))}
          </AutocompleteItemGroup>
        </AutocompleteContent>
      </Autocomplete>

      <FieldHelper>Select a fruit or type a new one</FieldHelper>
    </Field>
  );
};

export default AutocompleteDemo;
