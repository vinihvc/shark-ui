"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorEmpty,
  ModelSelectorItem,
  ModelSelectorList,
  ModelSelectorName,
  ModelSelectorTrigger,
} from "@/registry/react/components/model-selector";

const ModelSelectorDemo = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <div className="flex justify-center">
      <ModelSelector
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <ModelSelectorTrigger />
        <ModelSelectorContent>
          <ModelSelectorList>
            <ModelSelectorEmpty />
            {collection.items.map((item) => (
              <ModelSelectorItem item={item} key={item.value}>
                <ModelSelectorName>{item.label}</ModelSelectorName>
              </ModelSelectorItem>
            ))}
          </ModelSelectorList>
        </ModelSelectorContent>
      </ModelSelector>
    </div>
  );
};

const initialItems = [
  {
    label: "GPT-4.1",
    value: "gpt-4.1",
  },
  {
    label: "GPT-4.1 Mini",
    value: "gpt-4.1-mini",
  },
  {
    label: "Claude Sonnet 4",
    value: "claude-sonnet-4",
  },
  {
    label: "Claude Haiku 4.5",
    value: "claude-haiku-4.5",
  },
  {
    label: "Gemini 2.5 Pro",
    value: "gemini-2.5-pro",
  },
  {
    label: "Gemini 2.5 Flash",
    value: "gemini-2.5-flash",
  },
];

export default ModelSelectorDemo;
