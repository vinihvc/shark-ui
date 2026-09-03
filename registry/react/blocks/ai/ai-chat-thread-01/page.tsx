"use client";

import React from "react";
import { ChatThread } from "./components/chat-thread";
import { LAUNCH_PLAN_MESSAGES } from "./demo-messages";

const ThreadDemo = () => {
  const handleSuggestion = React.useCallback(() => undefined, []);

  return (
    <main className="flex min-h-svh flex-col bg-background">
      <ChatThread
        messages={LAUNCH_PLAN_MESSAGES}
        onSuggestion={handleSuggestion}
      />
    </main>
  );
};

export default ThreadDemo;
