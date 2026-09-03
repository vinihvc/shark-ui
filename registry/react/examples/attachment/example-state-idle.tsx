import { ClockIcon } from "lucide-react";
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";

const Example = () => (
  <Attachment className="max-w-sm" state="idle">
    <AttachmentMedia>
      <ClockIcon aria-hidden="true" />
    </AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>invoice.pdf</AttachmentTitle>
      <AttachmentDescription>Ready to upload</AttachmentDescription>
    </AttachmentContent>
  </Attachment>
);

export default Example;
