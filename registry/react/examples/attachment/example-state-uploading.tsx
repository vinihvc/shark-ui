import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";
import { Spinner } from "@/registry/react/components/spinner";

const Example = () => (
  <Attachment className="max-w-sm" state="uploading">
    <AttachmentMedia>
      <Spinner />
    </AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>design-system.zip</AttachmentTitle>
      <AttachmentDescription>Uploading · 64%</AttachmentDescription>
    </AttachmentContent>
  </Attachment>
);

export default Example;
