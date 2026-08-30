"use client";

import type React from "react";
import { useCallback, useMemo, useState } from "react";
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
  const [value, setValue] = useState("gpt-4.1");
  const [query, setQuery] = useState("");
  const selected = models.find((model) => model.value === value);
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) {
      return models;
    }
    return models.filter((model) => model.label.toLowerCase().includes(needle));
  }, [query]);
  const groups = ["Models", "Agents"] as const;

  const handleQueryChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    },
    []
  );

  return (
    <div className="flex justify-center">
      <ModelSelector onValueChange={setValue} value={value}>
        <ModelSelectorTrigger>
          {selected?.label ?? "Select model"}
        </ModelSelectorTrigger>
        <ModelSelectorContent>
          <ModelSelectorInput
            onChange={handleQueryChange}
            placeholder="Search models"
            value={query}
          />
          <ModelSelectorList>
            {filtered.length === 0 ? <ModelSelectorEmpty /> : null}
            {groups.map((group) => {
              const items = filtered.filter((model) => model.group === group);
              if (items.length === 0) {
                return null;
              }
              return (
                <ModelSelectorGroup key={group}>
                  <ModelSelectorLabel>{group}</ModelSelectorLabel>
                  {items.map((model) => (
                    <ModelSelectorItem key={model.value} value={model.value}>
                      {model.label}
                    </ModelSelectorItem>
                  ))}
                </ModelSelectorGroup>
              );
            })}
          </ModelSelectorList>
        </ModelSelectorContent>
      </ModelSelector>
    </div>
  );
};

const models = [
  { group: "Models", label: "GPT-4.1", value: "gpt-4.1" },
  { group: "Models", label: "GPT-4.1 Mini", value: "gpt-4.1-mini" },
  { group: "Agents", label: "Research", value: "agent-research" },
  { group: "Agents", label: "Coding", value: "agent-coding" },
] as const;

export default Example;
