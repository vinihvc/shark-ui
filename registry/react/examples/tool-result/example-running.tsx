import {
  Terminal,
  TerminalContent,
} from "@/registry/react/components/terminal";
import {
  ToolResult,
  ToolResultContent,
  ToolResultName,
  ToolResultTitle,
  ToolResultTrigger,
} from "@/registry/react/components/tool-result";

const output = [
  "\u001B[90m$ axe --quiet http://localhost:3000/login\u001B[0m",
  "",
  "Running 9 rules…",
  " \u001B[32m✓\u001B[0m color-contrast",
  " \u001B[32m✓\u001B[0m document-title",
  " \u001B[32m✓\u001B[0m html-has-lang",
  " \u001B[33m…\u001B[0m label",
].join("\n");

const Example = () => (
  <ToolResult className="max-w-lg" status="running">
    <ToolResultTrigger>
      <ToolResultTitle>Running accessibility tests</ToolResultTitle>
      <ToolResultName>terminal.run</ToolResultName>
    </ToolResultTrigger>
    <ToolResultContent>
      <Terminal output={output}>
        <TerminalContent />
      </Terminal>
    </ToolResultContent>
  </ToolResult>
);

export default Example;
