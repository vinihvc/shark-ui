"use client";

import React from "react";
import { ChatComposer } from "./components/chat-composer";

const MODEL_OPTIONS = [
  { group: "Models", label: "GPT-4", value: "gpt-4" },
  { group: "Models", label: "GPT-4.1", value: "gpt-4.1" },
  { group: "Agents", label: "Research", value: "agent-research" },
] as const;

const ComposerDemo = () => {
  const [model, setModel] = React.useState("gpt-4");
  const [thinkMode, setThinkMode] = React.useState(true);

  const handleSend = React.useCallback(() => undefined, []);

  return (
    <main className="grid min-h-svh place-items-center bg-background p-6">
      <ChatComposer
        model={model}
        modelOptions={MODEL_OPTIONS}
        onModelChange={setModel}
        onSend={handleSend}
        onThinkModeChange={setThinkMode}
        thinkMode={thinkMode}
      />
    </main>
  );
};

export default ComposerDemo;
