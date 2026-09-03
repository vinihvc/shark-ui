import {
  Attachment,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentRemove,
  AttachmentTitle,
} from "@/registry/react/components/attachment";

const Example = () => (
  <Attachment orientation="vertical">
    <AttachmentMedia format="pdf" variant="file" />
    <AttachmentContent>
      <AttachmentTitle>product-research.pdf</AttachmentTitle>
      <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
    </AttachmentContent>
    <AttachmentActions>
      <AttachmentRemove aria-label="Remove product-research.pdf" />
    </AttachmentActions>
  </Attachment>
);

export default Example;
