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

const Example = () => (
  <div className="flex flex-wrap gap-3">
    {files.map((file) => (
      <Attachment key={file.name} orientation="vertical">
        <AttachmentMedia variant="image">
          <img alt="" height={96} src={file.src} width={96} />
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

const files = [
  {
    meta: "PNG · 820 KB",
    name: "workspace.png",
    src: "/images/gradients/green-dark.svg",
  },
  {
    meta: "JPG · 1.1 MB",
    name: "desk-reference.jpg",
    src: "/images/gradients/blue.svg",
  },
  {
    meta: "JPG · 940 KB",
    name: "office-reference.jpg",
    src: "/images/gradients/purple.svg",
  },
] as const;

export default Example;
