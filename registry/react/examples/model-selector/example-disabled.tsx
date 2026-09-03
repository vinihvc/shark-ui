"use client";

import { useListCollection } from "@ark-ui/react";
import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorInput,
  ModelSelectorItem,
  ModelSelectorList,
  ModelSelectorTrigger,
} from "@/registry/react/components/model-selector";

const Example = () => {
  const disabledTrigger = useListCollection({
    initialItems: triggerItems,
  });
  const disabledItem = useListCollection({
    initialItems: itemItems,
    isItemDisabled: (item) => Boolean(item.disabled),
  });

  return (
    <div className="flex flex-col items-center gap-6">
      <ModelSelector
        collection={disabledTrigger.collection}
        disabled
        value={["gpt-4.1"]}
      >
        <ModelSelectorTrigger />
        <ModelSelectorContent>
          <ModelSelectorList>
            {disabledTrigger.collection.items.map((item) => (
              <ModelSelectorItem item={item} key={item.value}>
                {item.label}
              </ModelSelectorItem>
            ))}
          </ModelSelectorList>
        </ModelSelectorContent>
      </ModelSelector>
      <ModelSelector collection={disabledItem.collection} value={["gpt-4.1"]}>
        <ModelSelectorTrigger />
        <ModelSelectorContent>
          <ModelSelectorInput placeholder="Search models" />
          <ModelSelectorList>
            {disabledItem.collection.items.map((item) => (
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

const triggerItems = [{ label: "GPT-4.1", value: "gpt-4.1" }];

const itemItems = [
  { label: "GPT-4.1", value: "gpt-4.1" },
  { disabled: true, label: "GPT-4.1 Mini", value: "gpt-4.1-mini" },
  { label: "Coding", value: "agent-coding" },
];

export default Example;
