import {
  Terminal,
  TerminalContent,
  TerminalHeader,
} from "@/registry/react/components/terminal";

const Example = () => (
  <Terminal className="max-w-lg" output={output}>
    <TerminalHeader>zsh · pnpm lint</TerminalHeader>
    <TerminalContent />
  </Terminal>
);

const output = [
  "\u001B[90m$ pnpm lint\u001B[0m",
  "",
  "\u001B[34minfo\u001B[0m     12 files",
  "\u001B[36mdebug\u001B[0m    cache hit",
  "\u001B[33mwarn\u001B[0m     unused export in helpers.ts",
  "\u001B[31merror\u001B[0m    Button › missing aria-label",
  "\u001B[32mdone\u001B[0m     11 passed, 1 failed",
].join("\n");

export default Example;
