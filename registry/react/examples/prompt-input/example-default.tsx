"use client";

import { GlobeIcon, PaperclipIcon } from "lucide-react";
import type React from "react";
import { useCallback, useState } from "react";
import {
  PromptInput,
  PromptInputButton,
  PromptInputFooter,
  type PromptInputStatus,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/registry/react/components/prompt-input";

const Example = () => {
  const [status, setStatus] = useState<PromptInputStatus>("ready");
  const [value, setValue] = useState("");

  const handleStop = useCallback(() => setStatus("ready"), []);
  const handleSubmit = useCallback(() => {
    setValue("");
    setStatus("streaming");
    window.setTimeout(() => setStatus("ready"), 1600);
  }, []);
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) =>
      setValue(event.target.value),
    []
  );

  return (
    <PromptInput
      className="max-w-lg"
      onStop={handleStop}
      onSubmit={handleSubmit}
      status={status}
    >
      <PromptInputTextarea
        aria-label="Message"
        onChange={handleChange}
        placeholder="Ask the agent to edit a file..."
        value={value}
      />
      <PromptInputFooter>
        <PromptInputTools>
          <PromptInputButton aria-label="Attach file" size="icon-xs">
            <PaperclipIcon aria-hidden="true" />
          </PromptInputButton>
          <PromptInputButton size="xs" variant="outline">
            <GlobeIcon aria-hidden="true" />
            Search
          </PromptInputButton>
        </PromptInputTools>
        <PromptInputSubmit />
      </PromptInputFooter>
    </PromptInput>
  );
};

export default Example;
