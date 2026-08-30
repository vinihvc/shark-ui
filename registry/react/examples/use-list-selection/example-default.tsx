"use client";

import { createListCollection } from "@ark-ui/react/collection";
import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { useListSelection } from "@/registry/react/hooks/use-list-selection";

const UseListSelectionDemo = () => {
  const selection = useListSelection({ collection });

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <output className="text-muted-foreground text-sm">
        Selected: {selection.selectedValues.join(", ") || "None"}
      </output>
      <FieldGroup className="gap-3">
        {collection.items.map((item) => {
          const handleCheckedChange = () => selection.select(item.value);
          return (
            <Field key={item.value} orientation="horizontal">
              <Checkbox
                checked={selection.isSelected(item.value)}
                onCheckedChange={handleCheckedChange}
              />
              <FieldLabel>{item.label}</FieldLabel>
            </Field>
          );
        })}
      </FieldGroup>
    </div>
  );
};

const collection = createListCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
});

export default UseListSelectionDemo;
