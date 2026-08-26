import { XIcon } from "lucide-react";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";

const files = [
  { meta: "PNG · 820 KB", name: "workspace.png" },
  { meta: "JPG · 1.1 MB", name: "desk-reference.jpg" },
  { meta: "JPG · 940 KB", name: "office-reference.jpg" },
] as const;

const Example = () => (
  <div className="flex flex-wrap gap-3">
    {files.map((file) => (
      <Attachment key={file.name} orientation="vertical">
        <AttachmentMedia variant="image">
          <img alt="" height={96} src="/images/placeholder.svg" width={96} />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>{file.name}</AttachmentTitle>
          <AttachmentDescription>{file.meta}</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label={`Remove ${file.name}`}>
            <XIcon aria-hidden="true" />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    ))}
  </div>
);

export default Example;
