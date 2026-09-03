import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";
import { Spinner } from "@/registry/react/components/spinner";

const Example = () => (
  <Attachment className="max-w-sm" state="processing">
    <AttachmentMedia>
      <Spinner />
    </AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>interview-notes.m4a</AttachmentTitle>
      <AttachmentDescription>Preparing preview</AttachmentDescription>
    </AttachmentContent>
  </Attachment>
);

export default Example;
