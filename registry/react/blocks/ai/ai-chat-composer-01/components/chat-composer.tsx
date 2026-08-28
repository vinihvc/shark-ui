"use client";

import { BrainIcon, PaperclipIcon, SparklesIcon } from "lucide-react";
import type React from "react";
import { useCallback, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Announcement,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";
import { Button } from "@/registry/react/components/button";
import {
  FileUpload,
  FileUploadTrigger,
} from "@/registry/react/components/file-upload";
import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorGroup,
  ModelSelectorItem,
  ModelSelectorLabel,
  ModelSelectorList,
  ModelSelectorTrigger,
} from "@/registry/react/components/model-selector";
import {
  PromptInput,
  PromptInputButton,
  PromptInputFooter,
  type PromptInputStatus,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/registry/react/components/prompt-input";
import { SpeechInput } from "@/registry/react/components/speech-input";

interface ModelOption {
  group: string;
  label: string;
  value: string;
}

interface ChatComposerProps {
  model: string;
  modelOptions: readonly ModelOption[];
  onModelChange: (value: string) => void;
  onSend: (content: string) => void;
  onThinkModeChange: (enabled: boolean) => void;
  thinkMode: boolean;
}

export const ChatComposer = ({
  model,
  modelOptions,
  onModelChange,
  onSend,
  onThinkModeChange,
  thinkMode,
}: ChatComposerProps) => {
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState<PromptInputStatus>("ready");

  const selectedModel =
    modelOptions.find((option) => option.value === model) ?? modelOptions[0];

  const modelGroups = useMemo(() => {
    const groups = ["Models", "Agents"] as const;
    return groups.map((group) => ({
      group,
      items: modelOptions.filter((option) => option.group === group),
    }));
  }, [modelOptions]);

  const handleStop = useCallback(() => setStatus("ready"), []);
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) =>
      setDraft(event.target.value),
    []
  );
  const handleSubmit = useCallback(
    ({ text }: { text: string }) => {
      onSend(text);
      setDraft("");
      setStatus("streaming");
      window.setTimeout(() => setStatus("ready"), 900);
    },
    [onSend]
  );
  const handleTranscription = useCallback((text: string) => {
    setDraft((current) => (current ? `${current} ${text}` : text));
  }, []);

  const handleThinkModeClick = useCallback(() => {
    onThinkModeChange(!thinkMode);
  }, [onThinkModeChange, thinkMode]);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3">
      <div className="w-full rounded-2xl bg-muted/50 p-0.5">
        <Announcement className="w-full rounded-t-[15px] border-0 bg-transparent px-3 py-2 shadow-none">
          <SparklesIcon aria-hidden="true" className="text-muted-foreground" />
          <AnnouncementTitle className="text-muted-foreground text-xs">
            Access premium models & features
          </AnnouncementTitle>
          <span aria-hidden="true" className="text-muted-foreground/60 text-xs">
            ·
          </span>
          <Button className="h-auto px-0 text-xs" type="button" variant="link">
            Upgrade
          </Button>
        </Announcement>

        <FileUpload accept="image/*,.pdf,.txt" className="gap-0" maxFiles={4}>
          <PromptInput
            className="rounded-[15px] border-0 bg-card shadow-xs"
            onStop={handleStop}
            onSubmit={handleSubmit}
            status={status}
          >
            <PromptInputTextarea
              aria-label="Message"
              maxLength={2000}
              onChange={handleChange}
              placeholder="How can I help you today?"
              rows={3}
              value={draft}
            />
            <PromptInputFooter>
              <PromptInputTools>
                <FileUploadTrigger asChild>
                  <PromptInputButton aria-label="Attach file" size="icon-xs">
                    <PaperclipIcon aria-hidden="true" />
                  </PromptInputButton>
                </FileUploadTrigger>
                <ModelSelector onValueChange={onModelChange} value={model}>
                  <ModelSelectorTrigger size="xs" variant="secondary">
                    {selectedModel?.label ?? "Model"}
                  </ModelSelectorTrigger>
                  <ModelSelectorContent>
                    <ModelSelectorList>
                      {modelGroups.map(({ group, items }) => (
                        <ModelSelectorGroup key={group}>
                          <ModelSelectorLabel>{group}</ModelSelectorLabel>
                          {items.map((item) => (
                            <ModelSelectorItem
                              key={item.value}
                              value={item.value}
                            >
                              {item.label}
                            </ModelSelectorItem>
                          ))}
                        </ModelSelectorGroup>
                      ))}
                    </ModelSelectorList>
                  </ModelSelectorContent>
                </ModelSelector>
                <PromptInputButton
                  aria-label="Think mode"
                  aria-pressed={thinkMode}
                  className={cn(
                    thinkMode && "bg-accent text-accent-foreground"
                  )}
                  onClick={handleThinkModeClick}
                  size="xs"
                  type="button"
                >
                  <BrainIcon aria-hidden="true" />
                  Think
                </PromptInputButton>
                <SpeechInput onTranscriptionChange={handleTranscription} />
              </PromptInputTools>
              <PromptInputSubmit />
            </PromptInputFooter>
          </PromptInput>
        </FileUpload>
      </div>

      <p className="text-center text-muted-foreground text-xs">
        AI can make{" "}
        <span className="font-medium text-foreground">mistakes</span>. Please
        double-check.
      </p>
    </div>
  );
};
