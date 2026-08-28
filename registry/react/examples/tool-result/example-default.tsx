"use client";

import { RotateCwIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/registry/react/components/button";
import {
  Terminal,
  TerminalContent,
} from "@/registry/react/components/terminal";
import {
  ToolResult,
  ToolResultContent,
  ToolResultMeta,
  ToolResultName,
  type ToolResultStatus,
  ToolResultTitle,
  ToolResultTrigger,
} from "@/registry/react/components/tool-result";

const LINES = [
  "\u001B[34mRunning tests...\u001B[0m",
  "",
  " \u001B[32m✓\u001B[0m validateForm › returns error for invalid email",
  " \u001B[32m✓\u001B[0m validateForm › passes for valid input",
  "",
  "\u001B[90m2 passed (2.9s)\u001B[0m",
];

const Example = () => {
  const [lineCount, setLineCount] = useState(1);
  const [status, setStatus] = useState<ToolResultStatus>("running");

  useEffect(() => {
    if (status !== "running") {
      return;
    }

    if (lineCount >= LINES.length) {
      const doneId = window.setTimeout(() => {
        setStatus("success");
      }, 400);

      return () => {
        window.clearTimeout(doneId);
      };
    }

    const lineId = window.setTimeout(() => {
      setLineCount((count) => count + 1);
    }, 420);

    return () => {
      window.clearTimeout(lineId);
    };
  }, [lineCount, status]);

  const handleReplay = useCallback(() => {
    setLineCount(1);
    setStatus("running");
  }, []);

  const isRunning = status === "running";

  return (
    <div className="relative flex h-full w-full items-center">
      <Button
        className="absolute end-0 top-0"
        onClick={handleReplay}
        size="sm"
        variant="ghost"
      >
        <RotateCwIcon aria-hidden="true" />
        Replay
      </Button>
      <ToolResult
        className="mx-auto w-full max-w-md"
        defaultOpen={false}
        status={status}
      >
        <ToolResultTrigger>
          <ToolResultTitle>
            {isRunning ? "Running tests" : "Tests passed"}
          </ToolResultTitle>
          {isRunning ? null : <ToolResultMeta>2.9s</ToolResultMeta>}
          <ToolResultName>terminal.run</ToolResultName>
        </ToolResultTrigger>
        <ToolResultContent>
          <Terminal output={LINES.slice(0, lineCount).join("\n")}>
            <TerminalContent />
          </Terminal>
        </ToolResultContent>
      </ToolResult>
    </div>
  );
};

export default Example;
