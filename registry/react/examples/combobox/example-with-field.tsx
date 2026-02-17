"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";
import {
  Field,
  FieldError,
  FieldHelper,
  FieldLabel,
} from "@/registry/react/components/field";

const items = [
  { label: "United States", value: "us" },
  { label: "United Kingdom", value: "uk" },
  { label: "Canada", value: "ca" },
  { label: "Australia", value: "au" },
  { label: "Germany", value: "de" },
];

const ComboboxWithFieldDemo = () => {
  return (
    <Field className="w-64" invalid>
      <FieldLabel>Country</FieldLabel>
      <Combobox invalid items={items} required>
        <ComboboxInput placeholder="Select a country..." />
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
      <FieldHelper>We'll use this for shipping estimates</FieldHelper>
      <FieldError>Please select a valid country</FieldError>
    </Field>
  );
};

export default ComboboxWithFieldDemo;
