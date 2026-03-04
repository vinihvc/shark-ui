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
  { label: "Brazil", value: "br" },
  { label: "Mexico", value: "mx" },
  { label: "Ireland", value: "ie" },
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
