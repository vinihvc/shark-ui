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
  "GET /api/session",
  "",
  "\u001B[31m401 Unauthorized\u001B[0m",
  "www-authenticate: Bearer",
  "",
  "{",
  '  "error": "unauthorized",',
  '  "message": "Session cookie expired. Sign in again."',
  "}",
].join("\n");

const Example = () => (
  <ToolResult className="max-w-lg" defaultOpen status="error">
    <ToolResultTrigger>
      <ToolResultTitle>Fetch session</ToolResultTitle>
      <ToolResultName>api.getSession</ToolResultName>
    </ToolResultTrigger>
    <ToolResultContent>
      <Terminal output={output}>
        <TerminalContent />
      </Terminal>
    </ToolResultContent>
  </ToolResult>
);

export default Example;
