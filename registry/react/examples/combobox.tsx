"use client";

import { useListCollection } from "@ark-ui/react/combobox";
import { useFilter } from "@ark-ui/react/locale";
import {
  Combobox,
  ComboboxClearTrigger,
  ComboboxContent,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxTrigger,
} from "@/registry/react/components/combobox";
import {
  Field,
  FieldHelper,
  FieldInput,
  FieldLabel,
} from "@/registry/react/components/field";

const ComboboxDemo = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems: ["Apple", "Banana", "Cherry", "Date"],
    filter: contains,
  });

  const handleInputChange = (details: { inputValue: string }) => {
    filter(details.inputValue);
  };

  return (
    <Field>
      <FieldLabel>Choose a fruit</FieldLabel>
      <Combobox
        className="w-64"
        collection={collection}
        onInputValueChange={handleInputChange}
        placeholder="e.g. Apple"
      >
        <ComboboxControl>
          <FieldInput>
            <ComboboxInput />
          </FieldInput>

          <ComboboxClearTrigger />
          <ComboboxTrigger />
        </ComboboxControl>

        <ComboboxContent>
          <ComboboxEmpty />

          <ComboboxItemGroup>
            {collection.items.map((item) => (
              <ComboboxItem item={item} key={item}>
                {item}
              </ComboboxItem>
            ))}
          </ComboboxItemGroup>
        </ComboboxContent>
      </Combobox>

      <FieldHelper>Select a fruit from the list</FieldHelper>
    </Field>
  );
};

export default ComboboxDemo;
