import {
  Terminal,
  TerminalContent,
} from "@/registry/react/components/terminal";

const Example = () => (
  <Terminal className="max-w-lg" output={output}>
    <TerminalContent />
  </Terminal>
);

const output = [
  "GET /api/session",
  "",
  "\u001B[31m401 Unauthorized\u001B[0m",
  "",
  '{ "error": "unauthorized" }',
].join("\n");

export default Example;
