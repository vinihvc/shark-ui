import { BracesIcon } from "lucide-react";
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";

const Example = () => (
  <Attachment className="max-w-sm">
    <AttachmentMedia>
      <BracesIcon aria-hidden="true" />
    </AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>tokens.ts</AttachmentTitle>
      <AttachmentDescription>TypeScript · 12 KB</AttachmentDescription>
    </AttachmentContent>
  </Attachment>
);

export default Example;
