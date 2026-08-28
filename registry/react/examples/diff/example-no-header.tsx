import { Diff, DiffContent, DiffLine } from "@/registry/react/components/diff";

const Example = () => (
  <Diff className="max-w-lg">
    <DiffContent>
      <DiffLine line={4} type="context">
        {"function formatDate(value: Date) {"}
      </DiffLine>
      <DiffLine line={5} type="delete">
        {"  return value.toISOString();"}
      </DiffLine>
      <DiffLine line={5} type="add">
        {'  return new Intl.DateTimeFormat("en", {'}
      </DiffLine>
      <DiffLine line={6} type="add">
        {'    dateStyle: "medium",'}
      </DiffLine>
      <DiffLine line={7} type="add">
        {'    timeStyle: "short",'}
      </DiffLine>
      <DiffLine line={8} type="add">
        {"  }).format(value);"}
      </DiffLine>
      <DiffLine line={9} type="context">
        {"}"}
      </DiffLine>
    </DiffContent>
  </Diff>
);

export default Example;
