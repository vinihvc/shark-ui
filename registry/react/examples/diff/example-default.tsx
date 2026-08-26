import {
  Diff,
  DiffContent,
  DiffHeader,
  DiffLine,
} from "@/registry/react/components/diff";

const Example = () => (
  <Diff className="max-w-lg">
    <DiffHeader>src/utils/helpers.ts</DiffHeader>
    <DiffContent>
      <DiffLine type="context">
        {"export function isValidEmail(email: string) {"}
      </DiffLine>
      <DiffLine type="delete">{"  return Boolean(email);"}</DiffLine>
      <DiffLine type="add">
        {"  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);"}
      </DiffLine>
      <DiffLine type="context">{"}"}</DiffLine>
    </DiffContent>
  </Diff>
);

export default Example;
