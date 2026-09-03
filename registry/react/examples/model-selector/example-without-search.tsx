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
  const { collection } = useListCollection({ initialItems: models });

  return (
    <div className="flex justify-center">
      <ModelSelector collection={collection} defaultValue={["gpt-4.1"]}>
        <ModelSelectorTrigger />
        <ModelSelectorContent>
          <ModelSelectorList>
            {collection.items.map((model) => (
              <ModelSelectorItem item={model} key={model.value}>
                {model.label}
              </ModelSelectorItem>
            ))}
          </ModelSelectorList>
        </ModelSelectorContent>
      </ModelSelector>
    </div>
  );
};

const models = [
  { label: "GPT-4.1", value: "gpt-4.1" },
  { label: "GPT-4.1 Mini", value: "gpt-4.1-mini" },
  { label: "Claude Sonnet 4", value: "claude-sonnet-4" },
  { label: "Gemini 2.5 Flash", value: "gemini-2.5-flash" },
];

export default Example;
