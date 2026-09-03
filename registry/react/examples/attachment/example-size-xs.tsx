import {
  Attachment,
  AttachmentContent,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";

const Example = () => (
  <Attachment size="xs">
    <AttachmentMedia format="pdf" variant="file" />
    <AttachmentContent>
      <AttachmentTitle>project-brief.pdf</AttachmentTitle>
    </AttachmentContent>
  </Attachment>
);

export default Example;
