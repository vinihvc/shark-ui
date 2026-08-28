import { TerminalIcon } from "lucide-react";
import {
  Terminal,
  TerminalContent,
  TerminalHeader,
} from "@/registry/react/components/terminal";

const output = [
  "\u001B[34mRunning tests...\u001B[0m",
  "",
  " \u001B[32m✓\u001B[0m validateForm › returns error for invalid email",
  " \u001B[32m✓\u001B[0m validateForm › passes for valid input",
  " \u001B[31m✗\u001B[0m Button › renders with correct variant",
  "",
  "\u001B[90m2 passed, 1 failed\u001B[0m",
].join("\n");

const Example = () => (
  <Terminal className="max-w-lg" output={output}>
    <TerminalHeader>
      <TerminalIcon aria-hidden="true" />
      zsh · pnpm test
    </TerminalHeader>
    <TerminalContent />
  </Terminal>
);

export default Example;
