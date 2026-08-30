"use client";

import { createListCollection } from "@ark-ui/react/collection";
import { Button } from "@/registry/react/components/button";
import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { useListSelection } from "@/registry/react/hooks/use-list-selection";

const UseListSelectionDemo = () => {
  const selection = useListSelection({ collection, selectionMode: "multiple" });
  const handleSelectAll = () => {
    if (selection.isAllSelected()) {
      selection.clear();
    } else {
      selection.setSelectedValues(collection.getValues());
    }
  };

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <output className="text-muted-foreground text-sm">
          {selection.selectedValues.length} of {collection.items.length}{" "}
          selected
        </output>
        <Button
          onClick={handleSelectAll}
          size="sm"
          type="button"
          variant="outline"
        >
          {selection.isAllSelected() ? "Deselect all" : "Select all"}
        </Button>
      </div>
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
    { label: "Solid", value: "solid" },
  ],
});

export default UseListSelectionDemo;
