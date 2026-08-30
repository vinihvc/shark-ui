"use client";

import { createListCollection } from "@ark-ui/react/collection";
import { CheckIcon } from "lucide-react";
import type React from "react";
import { Button } from "@/registry/react/components/button";
import { useListSelection } from "@/registry/react/hooks/use-list-selection";

const UseListSelectionDemo = () => {
  const selection = useListSelection({ collection, selectionMode: "multiple" });
  const handleItemClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    if (event.shiftKey && selection.firstSelectedValue) {
      selection.extend(selection.firstSelectedValue, value);
    } else if (event.ctrlKey || event.metaKey) {
      selection.toggle(value);
    } else {
      selection.replace(value);
    }
  };

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <output className="text-muted-foreground text-sm">
        Selected: {selection.selectedValues.join(", ") || "None"}
      </output>
      <div className="flex flex-col gap-1">
        {collection.items.map((item) => (
          <Button
            aria-pressed={selection.isSelected(item.value)}
            className="justify-start"
            key={item.value}
            onClick={handleItemClick}
            type="button"
            value={item.value}
            variant={selection.isSelected(item.value) ? "secondary" : "ghost"}
          >
            <CheckIcon
              aria-hidden="true"
              className={
                selection.isSelected(item.value) ? "size-4" : "size-4 opacity-0"
              }
            />
            {item.label}
          </Button>
        ))}
      </div>
      <p className="text-muted-foreground text-xs">
        Click to select · Shift+click for a range · Cmd/Ctrl+click to toggle
      </p>
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
