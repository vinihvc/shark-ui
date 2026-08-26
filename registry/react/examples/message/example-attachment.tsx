import { DownloadIcon, FileTextIcon } from "lucide-react";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";
import { Bubble, BubbleContent } from "@/registry/react/components/bubble";
import { Message, MessageContent } from "@/registry/react/components/message";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-6">
    <Message>
      <MessageContent>
        <Bubble>
          <BubbleContent>
            Here's the image. Can you add it to the PDF? Use it for the cover
            page.
          </BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
    <Message align="end">
      <MessageContent>
        <Bubble align="end" variant="secondary">
          <BubbleContent>
            Done. Here's the PDF with the image added as the cover page.
          </BubbleContent>
        </Bubble>
        <Attachment>
          <AttachmentMedia>
            <FileTextIcon aria-hidden="true" />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
            <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="Download sales-dashboard.pdf">
              <DownloadIcon aria-hidden="true" />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>
      </MessageContent>
    </Message>
  </div>
);

export default Example;
