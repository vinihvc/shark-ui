import { CodeXmlIcon } from "lucide-react";
import { Badge } from "@/registry/react/components/badge";
import {
  Diff,
  DiffContent,
  DiffFile,
  DiffHeader,
  DiffLine,
} from "@/registry/react/components/diff";

const Example = () => (
  <Diff className="max-w-lg">
    <DiffHeader>
      <CodeXmlIcon />
      <DiffFile>src/lib/auth.ts</DiffFile>
      <Badge className="ms-auto" size="sm" variant="outline">
        modified
      </Badge>
    </DiffHeader>
    <DiffContent>
      <DiffLine line={11} type="context">
        {"  const session = await getSession(request);"}
      </DiffLine>
      <DiffLine line={12} type="delete">
        {'  throw new Error("Unauthorized");'}
      </DiffLine>
      <DiffLine line={12} type="add">
        {'  redirect("/login");'}
      </DiffLine>
    </DiffContent>
  </Diff>
);

export default Example;
