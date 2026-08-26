import { FileTextIcon } from "lucide-react";
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";

const Example = () => (
  <Attachment state="done">
    <AttachmentMedia>
      <FileTextIcon aria-hidden="true" />
    </AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>brief.pdf</AttachmentTitle>
      <AttachmentDescription>PDF · 240 KB</AttachmentDescription>
    </AttachmentContent>
  </Attachment>
);

export default Example;
