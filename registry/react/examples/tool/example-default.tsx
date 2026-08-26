import {
  Tool,
  ToolContent,
  ToolFile,
  ToolInput,
  ToolLabel,
  ToolName,
  ToolOutput,
  ToolStatusBadge,
  ToolTrigger,
} from "@/registry/react/components/tool";

const Example = () => (
  <Tool className="max-w-lg" status="completed">
    <ToolTrigger>
      <ToolName>Read</ToolName>
      <ToolStatusBadge status="completed" />
    </ToolTrigger>
    <ToolContent>
      <ToolInput>
        <ToolLabel>Path</ToolLabel>
        <ToolFile>src/utils/helpers.ts</ToolFile>
      </ToolInput>
      <ToolOutput>
        <ToolLabel>Result</ToolLabel>
        <p className="whitespace-pre-wrap font-mono text-muted-foreground text-xs">
          {
            "export function isValidEmail(email: string) {\n  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);\n}"
          }
        </p>
      </ToolOutput>
    </ToolContent>
  </Tool>
);

export default Example;
