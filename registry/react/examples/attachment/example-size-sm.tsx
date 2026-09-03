import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";

const Example = () => (
  <Attachment size="sm">
    <AttachmentMedia format="pdf" variant="file" />
    <AttachmentContent>
      <AttachmentTitle>project-brief.pdf</AttachmentTitle>
      <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
    </AttachmentContent>
  </Attachment>
);

export default Example;
