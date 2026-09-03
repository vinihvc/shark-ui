"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorEmpty,
  ModelSelectorGroup,
  ModelSelectorInput,
  ModelSelectorItem,
  ModelSelectorLabel,
  ModelSelectorList,
  ModelSelectorTrigger,
} from "@/registry/react/components/model-selector";

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
    initialItems,
  });

  const onInputValueChange = ({ inputValue }: { inputValue: string }) => {
    filter(inputValue);
  };

  return (
    <div className="flex justify-center">
      <ModelSelector
        collection={collection}
        onInputValueChange={onInputValueChange}
      >
        <ModelSelectorTrigger />
        <ModelSelectorContent>
          <ModelSelectorInput placeholder="Search models" />
          <ModelSelectorList>
            <ModelSelectorEmpty />
            {collection.group().map(([group, items]) => (
              <ModelSelectorGroup key={group}>
                <ModelSelectorLabel>{group}</ModelSelectorLabel>
                {items.map((model) => (
                  <ModelSelectorItem item={model} key={model.value}>
                    {model.label}
                  </ModelSelectorItem>
                ))}
              </ModelSelectorGroup>
            ))}
          </ModelSelectorList>
        </ModelSelectorContent>
      </ModelSelector>
    </div>
  );
};

const initialItems = [
  { group: "OpenAI", label: "GPT-4.1", value: "gpt-4.1" },
  { group: "OpenAI", label: "GPT-4.1 Mini", value: "gpt-4.1-mini" },
  { group: "Anthropic", label: "Claude Sonnet 4", value: "claude-sonnet-4" },
  { group: "Anthropic", label: "Claude Haiku 4.5", value: "claude-haiku-4.5" },
  { group: "Google", label: "Gemini 2.5 Pro", value: "gemini-2.5-pro" },
  { group: "Google", label: "Gemini 2.5 Flash", value: "gemini-2.5-flash" },
];

export default Example;
