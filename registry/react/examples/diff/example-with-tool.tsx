import {
  Diff,
  DiffContent,
  DiffFile,
  DiffHeader,
  DiffLine,
  DiffStats,
} from "@/registry/react/components/diff";
import {
  ToolResult,
  ToolResultContent,
  ToolResultName,
  ToolResultTitle,
  ToolResultTrigger,
} from "@/registry/react/components/tool-result";

const Example = () => (
  <ToolResult className="max-w-lg" defaultOpen status="success">
    <ToolResultTrigger>
      <ToolResultTitle>Update helpers</ToolResultTitle>
      <ToolResultName>Write</ToolResultName>
    </ToolResultTrigger>
    <ToolResultContent>
      <Diff>
        <DiffHeader>
          <DiffFile>src/utils/helpers.ts</DiffFile>
          <DiffStats added={1} removed={1} />
        </DiffHeader>
        <DiffContent>
          <DiffLine line={1} type="context">
            {"export function isValidEmail(email: string) {"}
          </DiffLine>
          <DiffLine line={2} type="delete">
            {"  return Boolean(email);"}
          </DiffLine>
          <DiffLine line={2} type="add">
            {"  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);"}
          </DiffLine>
          <DiffLine line={3} type="context">
            {"}"}
          </DiffLine>
        </DiffContent>
      </Diff>
    </ToolResultContent>
  </ToolResult>
);

export default Example;
