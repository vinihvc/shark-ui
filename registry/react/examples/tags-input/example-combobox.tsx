"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import React from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxFieldInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";
import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  TagsInputContext,
  TagsInputInput,
  TagsInputItem,
  TagsInputRootProvider,
  useTagsInput,
} from "@/registry/react/components/tags-input";

const Example = () => {
  const uid = React.useId();

  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: frameworkItems,
  });

  const tagsInput = useTagsInput({
    ids: { control: `tags-control-${uid}`, input: `tags-input-${uid}` },
  });

  const availableItems = collection.items.filter(
    (item) => !tagsInput.value.includes(item)
  );

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor={`tags-input-${uid}`}>Frameworks</FieldLabel>
      <Combobox
        allowCustomValue
        collection={collection}
        ids={{ control: `tags-control-${uid}`, input: `tags-input-${uid}` }}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        onValueChange={({ value }) => {
          const next = value[0];
          if (next && !tagsInput.value.includes(next)) {
            tagsInput.addValue(next);
          }
        }}
        selectionBehavior="clear"
        value={[]}
      >
        <TagsInputRootProvider className="w-full" value={tagsInput}>
          <TagsInputContext>
            {({ value }) => (
              <>
                {value.map((tag, index) => (
                  <TagsInputItem index={index} key={tag} value={tag}>
                    {tag}
                  </TagsInputItem>
                ))}
                <ComboboxFieldInput asChild>
                  <TagsInputInput placeholder="Search framework" />
                </ComboboxFieldInput>
              </>
            )}
          </TagsInputContext>
        </TagsInputRootProvider>
        <ComboboxContent>
          <ComboboxList>
            <ComboboxEmpty>No frameworks found</ComboboxEmpty>
            {availableItems.map((item) => (
              <ComboboxItem item={item} key={item}>
                {item}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  );
};

const frameworkItems = [
  "React",
  "Solid",
  "Vue",
  "Svelte",
  "Angular",
  "Preact",
  "Next.js",
  "Astro",
];

export default Example;
