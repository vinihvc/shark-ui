import { TypeScriptIcon } from "@/components/icons/typescript";
import {
  Diff,
  DiffContent,
  DiffFile,
  DiffHeader,
  DiffLine,
  DiffStats,
} from "@/registry/react/components/diff";

const Example = () => (
  <Diff className="max-w-lg">
    <DiffHeader>
      <TypeScriptIcon />
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
);

export default Example;
