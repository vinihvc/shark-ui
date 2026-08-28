"use client";

import { Button } from "@/registry/react/components/button";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardTrigger,
} from "@/registry/react/components/clipboard";
import {
  Terminal,
  TerminalAction,
  TerminalContent,
  TerminalHeader,
  toPlainOutput,
} from "@/registry/react/components/terminal";

const Example = () => (
  <Terminal className="max-w-lg" output={output}>
    <TerminalHeader>
      zsh · pnpm test
      <TerminalAction>
        <Clipboard value={toPlainOutput(output)}>
          <ClipboardTrigger asChild>
            <Button
              aria-label="Copy output"
              size="icon-xs"
              type="button"
              variant="ghost"
            >
              <ClipboardIndicator />
            </Button>
          </ClipboardTrigger>
        </Clipboard>
      </TerminalAction>
    </TerminalHeader>
    <TerminalContent />
  </Terminal>
);

const output = [
  "\u001B[34mRunning tests...\u001B[0m",
  "",
  " \u001B[32m✓\u001B[0m validateForm › returns error for invalid email",
  " \u001B[32m✓\u001B[0m validateForm › passes for valid input",
  " \u001B[31m✗\u001B[0m Button › renders with correct variant",
  "",
  "\u001B[90m2 passed, 1 failed\u001B[0m",
].join("\n");

export default Example;
