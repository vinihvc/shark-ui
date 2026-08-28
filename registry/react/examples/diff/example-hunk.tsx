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
      <DiffFile>src/lib/auth.ts</DiffFile>
      <DiffStats added={3} removed={3} />
    </DiffHeader>
    <DiffContent>
      <DiffLine line={10} type="context">
        {"export async function requireUser(request: Request) {"}
      </DiffLine>
      <DiffLine line={11} type="context">
        {"  const session = await getSession(request);"}
      </DiffLine>
      <DiffLine line={12} type="delete">
        {"  if (!session) {"}
      </DiffLine>
      <DiffLine line={13} type="delete">
        {'    throw new Error("Unauthorized");'}
      </DiffLine>
      <DiffLine line={14} type="delete">
        {"  }"}
      </DiffLine>
      <DiffLine line={12} type="add">
        {"  if (!session?.user) {"}
      </DiffLine>
      <DiffLine line={13} type="add">
        {'    redirect("/login");'}
      </DiffLine>
      <DiffLine line={14} type="add">
        {"  }"}
      </DiffLine>
      <DiffLine line={15} type="context">
        {"  return session.user;"}
      </DiffLine>
      <DiffLine line={16} type="context">
        {"}"}
      </DiffLine>
    </DiffContent>
  </Diff>
);

export default Example;
