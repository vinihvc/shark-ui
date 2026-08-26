import { FileCodeIcon, FileTextIcon } from "lucide-react";
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";

const Example = () => (
  <AttachmentGroup className="w-full max-w-md">
    <Attachment>
      <AttachmentMedia>
        <FileTextIcon aria-hidden="true" />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>briefing-notes.pdf</AttachmentTitle>
        <AttachmentDescription>PDF · 1.4 MB</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
    <Attachment orientation="vertical">
      <AttachmentMedia variant="image">
        <img alt="" height={96} src="/images/placeholder.svg" width={96} />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>workspace.png</AttachmentTitle>
        <AttachmentDescription>PNG · 820 KB</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
    <Attachment>
      <AttachmentMedia>
        <FileTextIcon aria-hidden="true" />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>customers.csv</AttachmentTitle>
        <AttachmentDescription>CSV · 18 KB</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
    <Attachment>
      <AttachmentMedia>
        <FileCodeIcon aria-hidden="true" />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>renderer.tsx</AttachmentTitle>
        <AttachmentDescription>TSX · 12 KB</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
  </AttachmentGroup>
);

export default Example;
