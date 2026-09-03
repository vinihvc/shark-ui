import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";

const Example = () => (
  <Attachment className="max-w-sm">
    <AttachmentMedia format="pdf" variant="file" />
    <AttachmentContent>
      <AttachmentTitle>launch-plan.pdf</AttachmentTitle>
      <AttachmentDescription>PDF · 1.8 MB</AttachmentDescription>
    </AttachmentContent>
  </Attachment>
);

export default Example;
