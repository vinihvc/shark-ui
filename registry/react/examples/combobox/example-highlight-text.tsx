"use client";

import React from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  useComboboxContext,
} from "@/registry/react/components/combobox";

const items = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
  { label: "Angular", value: "angular" },
];

const HighlightMatch = ({ text }: { text: string }) => {
  const api = useComboboxContext();
  const inputValue = api.inputValue?.toLowerCase() ?? "";

  if (!(inputValue && text.toLowerCase().includes(inputValue))) {
    return <>{text}</>;
  }

  const parts = text.split(
    new RegExp(`(${inputValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
  );
  return (
    <>
      {parts.map((part, i) => {
        const id = `${text}-${part}-${String(i)}`;
        return part.toLowerCase() === inputValue ? (
          <span className="underline" key={id}>
            {part}
          </span>
        ) : (
          <React.Fragment key={id}>{part}</React.Fragment>
        );
      })}
    </>
  );
};

const ComboboxHighlightTextDemo = () => {
  return (
    <Combobox className="w-64" items={items}>
      <ComboboxInput placeholder="Search frameworks..." />
      <ComboboxContent>
        <ComboboxList>
          {(item) => (
            <ComboboxItem item={item} key={item.value}>
              <HighlightMatch text={item.label} />
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default ComboboxHighlightTextDemo;
