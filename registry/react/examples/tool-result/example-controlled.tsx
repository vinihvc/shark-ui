"use client";

import { useState } from "react";
import {
  Terminal,
  TerminalContent,
} from "@/registry/react/components/terminal";
import {
  ToolResult,
  ToolResultContent,
  ToolResultMeta,
  ToolResultName,
  ToolResultTitle,
  ToolResultTrigger,
} from "@/registry/react/components/tool-result";

const Example = () => {
  const [open, setOpen] = useState(true);

  const handleOpenChange = (details: { open: boolean }) => {
    setOpen(details.open);
  };

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <ToolResult onOpenChange={handleOpenChange} open={open} status="success">
        <ToolResultTrigger>
          <ToolResultTitle>Tests passed</ToolResultTitle>
          <ToolResultMeta>2.9s</ToolResultMeta>
          <ToolResultName>terminal.run</ToolResultName>
        </ToolResultTrigger>
        <ToolResultContent>
          <Terminal output={output}>
            <TerminalContent />
          </Terminal>
        </ToolResultContent>
      </ToolResult>
      <p className="text-muted-foreground text-sm">
        Result: {open ? "open" : "closed"}
      </p>
    </div>
  );
};

const output = [
  " \u001B[32m✓\u001B[0m src/utils/helpers.test.ts (2)",
  " \u001B[32m✓\u001B[0m src/components/button.test.ts (3)",
  "",
  "\u001B[32m Test Files  2 passed (2.9s)\u001B[0m",
  "\u001B[90m      Tests  5 passed\u001B[0m",
].join("\n");

export default Example;
