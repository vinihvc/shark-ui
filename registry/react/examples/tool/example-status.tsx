import {
  Tool,
  ToolContent,
  ToolFile,
  ToolInput,
  ToolLabel,
  ToolName,
  ToolStatusBadge,
  ToolTrigger,
} from "@/registry/react/components/tool";

const Example = () => (
  <div className="flex w-full max-w-lg flex-col gap-3">
    <Tool status="running">
      <ToolTrigger>
        <ToolName>Grep</ToolName>
        <ToolStatusBadge status="running" />
      </ToolTrigger>
      <ToolContent>
        <ToolInput>
          <ToolLabel>Pattern</ToolLabel>
          <p className="font-mono text-xs">isValidEmail</p>
        </ToolInput>
      </ToolContent>
    </Tool>
    <Tool defaultOpen={false} status="error">
      <ToolTrigger>
        <ToolName>Shell</ToolName>
        <ToolStatusBadge status="error" />
      </ToolTrigger>
      <ToolContent>
        <ToolInput>
          <ToolLabel>Command</ToolLabel>
          <p className="font-mono text-xs">pnpm test</p>
        </ToolInput>
        <ToolFile>src/utils/helpers.test.ts</ToolFile>
      </ToolContent>
    </Tool>
  </div>
);

export default Example;
