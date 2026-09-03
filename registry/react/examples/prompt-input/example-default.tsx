"use client";

import { createListCollection, useListCollection } from "@ark-ui/react";
import {
  FileTextIcon,
  ImagePlusIcon,
  PlusIcon,
  PuzzleIcon,
  ShieldAlertIcon,
} from "lucide-react";
import type React from "react";
import { useCallback, useState } from "react";
import {
  Context,
  ContextBody,
  ContextContent,
  ContextFooter,
  ContextHeader,
  ContextMeter,
  ContextTitle,
  ContextTrigger,
  ContextUsageRow,
} from "@/registry/react/components/context";
import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorItem,
  ModelSelectorList,
  ModelSelectorTrigger,
} from "@/registry/react/components/model-selector";
import { PopoverTrigger } from "@/registry/react/components/popover";
import {
  PromptInput,
  PromptInputAction,
  PromptInputActions,
  PromptInputActionsContent,
  PromptInputButton,
  PromptInputFooter,
  type PromptInputStatus,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/registry/react/components/prompt-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";
import { SpeechInput } from "@/registry/react/components/speech-input";

const PromptInputDemo = () => {
  const [status, setStatus] = useState<PromptInputStatus>("ready");
  const [value, setValue] = useState("");
  const [model, setModel] = useState("terra-5.6");
  const [effort, setEffort] = useState("medium");
  const [access, setAccess] = useState("full");
  const { collection } = useListCollection({ initialItems: models });

  const handleStop = useCallback(() => setStatus("ready"), []);
  const handleSubmit = useCallback(() => {
    setValue("");
    setStatus("streaming");
    window.setTimeout(() => setStatus("ready"), 900);
  }, []);
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) =>
      setValue(event.target.value),
    []
  );
  const handleTranscription = useCallback((text: string) => {
    setValue((current) => (current ? `${current} ${text}` : text));
  }, []);
  const handleModelChange = useCallback((details: { value: string[] }) => {
    setModel(details.value[0] ?? "");
  }, []);
  const handleAccessChange = useCallback((details: { value: string[] }) => {
    setAccess(details.value[0] ?? "");
  }, []);
  const handleEffortChange = useCallback((details: { value: string[] }) => {
    setEffort(details.value[0] ?? "");
  }, []);

  return (
    <PromptInput
      className="max-w-lg"
      onStop={handleStop}
      onSubmit={handleSubmit}
      status={status}
    >
      <PromptInputTextarea
        aria-label="Prompt"
        onChange={handleChange}
        placeholder="Do anything"
        value={value}
      />
      <PromptInputFooter>
        <PromptInputTools>
          <PromptInputActions>
            <PopoverTrigger asChild>
              <PromptInputButton aria-label="Add to prompt" size="icon-sm">
                <PlusIcon aria-hidden="true" />
              </PromptInputButton>
            </PopoverTrigger>
            <PromptInputActionsContent>
              {actions.map((action) => (
                <PromptInputAction
                  description={action.description}
                  icon={action.icon}
                  key={action.value}
                >
                  {action.label}
                </PromptInputAction>
              ))}
            </PromptInputActionsContent>
          </PromptInputActions>
          <Select
            collection={accessCollection}
            onValueChange={handleAccessChange}
            positioning={{ placement: "top-start" }}
            value={[access]}
          >
            <SelectTrigger showTrigger={false} size="sm" variant="ghost">
              <ShieldAlertIcon aria-hidden="true" />
              <SelectValue placeholder="Full access" />
            </SelectTrigger>
            <SelectContent>
              {accessCollection.items.map((item) => (
                <SelectItem item={item} key={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </PromptInputTools>
        <Context maxTokens={128_000} usedTokens={18_420}>
          <ContextTrigger size="sm" />
          <ContextContent>
            <ContextHeader>
              <ContextTitle showCloseButton>Context Usage</ContextTitle>
              <ContextMeter />
            </ContextHeader>
            <ContextBody>
              {contextUsage.map((usage) => (
                <ContextUsageRow key={usage.title} {...usage} />
              ))}
            </ContextBody>
            <ContextFooter />
          </ContextContent>
        </Context>
        <ModelSelector
          collection={collection}
          onValueChange={handleModelChange}
          value={[model]}
        >
          <ModelSelectorTrigger size="sm" variant="ghost" />
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
        <Select
          collection={effortCollection}
          onValueChange={handleEffortChange}
          positioning={{ placement: "top" }}
          value={[effort]}
        >
          <SelectTrigger showTrigger={false} size="sm" variant="ghost">
            <SelectValue placeholder="Medium" />
          </SelectTrigger>
          <SelectContent>
            {effortCollection.items.map((item) => (
              <SelectItem item={item} key={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <SpeechInput
          onTranscriptionChange={handleTranscription}
          size="icon-sm"
        />
        <PromptInputSubmit size="icon-sm" />
      </PromptInputFooter>
    </PromptInput>
  );
};

const models = [
  { label: "5.6 Terra", value: "terra-5.6" },
  { label: "Claude Sonnet 4", value: "claude-sonnet-4" },
  { label: "GPT-5.2", value: "gpt-5.2" },
];

const efforts = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
  { label: "Extra high", value: "extra-high" },
];

const accessLevels = [
  { label: "Full access", value: "full" },
  { label: "Ask first", value: "ask" },
  { label: "Read only", value: "read" },
];

const effortCollection = createListCollection({ items: efforts });
const accessCollection = createListCollection({ items: accessLevels });

const actions = [
  {
    description: "Add a screenshot or visual reference.",
    icon: <ImagePlusIcon aria-hidden="true" />,
    label: "Attach image",
    value: "image",
  },
  {
    description: "Give the agent a specialized workflow.",
    icon: <PuzzleIcon aria-hidden="true" />,
    label: "Use a skill",
    value: "skill",
  },
  {
    description: "Include a file with supporting details.",
    icon: <FileTextIcon aria-hidden="true" />,
    label: "Add context",
    value: "context",
  },
];

const contextUsage = [
  { title: "Input", value: 4200 },
  { title: "Output", value: 860 },
  { title: "Reasoning", value: 640 },
  { title: "Cache", value: 1200 },
];

export default PromptInputDemo;
