"use client";

import { useListCollection } from "@ark-ui/react";
import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorItem,
  ModelSelectorList,
  ModelSelectorTrigger,
} from "@/registry/react/components/model-selector";

const Example = () => {
  const { collection } = useListCollection({ initialItems });

  return (
    <div className="flex justify-center">
      <ModelSelector collection={collection}>
        <ModelSelectorTrigger showTrigger />
        <ModelSelectorContent>
          <ModelSelectorList>
            {collection.items.map((item) => (
              <ModelSelectorItem item={item} key={item.value}>
                {item.label}
              </ModelSelectorItem>
            ))}
          </ModelSelectorList>
        </ModelSelectorContent>
      </ModelSelector>
    </div>
  );
};

const initialItems = [
  { label: "GPT-4.1", value: "gpt-4.1" },
  { label: "GPT-4.1 Mini", value: "gpt-4.1-mini" },
  { label: "Claude Sonnet 4", value: "claude-sonnet-4" },
];

export default Example;
