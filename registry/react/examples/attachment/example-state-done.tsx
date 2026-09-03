import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";

const Example = () => (
  <Attachment className="max-w-sm" state="done">
    <AttachmentMedia format="pdf" variant="file" />
    <AttachmentContent>
      <AttachmentTitle>brand-guidelines.pdf</AttachmentTitle>
      <AttachmentDescription>Ready · 1.8 MB</AttachmentDescription>
    </AttachmentContent>
  </Attachment>
);

export default Example;
