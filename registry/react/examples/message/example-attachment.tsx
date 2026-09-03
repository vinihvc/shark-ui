import { DownloadIcon } from "lucide-react";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";
import { Message, MessageContent } from "@/registry/react/components/message";
import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-8">
    <Message align="end">
      <MessageContent>
        <Attachment orientation="vertical">
          <AttachmentMedia variant="image">
            <img
              alt="Workspace"
              height={104}
              src="/images/gradients/green-dark.svg"
              width={104}
            />
          </AttachmentMedia>
        </Attachment>
        <MessageBubble align="end">
          <MessageBubbleContent>
            Here's the image. Can you add it to the PDF? Use it for the cover
            page.
          </MessageBubbleContent>
        </MessageBubble>
      </MessageContent>
    </Message>
    <Message>
      <MessageContent>
        <MessageBubble variant="secondary">
          <MessageBubbleContent>
            Done. Here's the PDF with the image added as the cover page.
          </MessageBubbleContent>
        </MessageBubble>
        <Attachment size="sm">
          <AttachmentMedia format="pdf" variant="file" />
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
    <Message align="end">
      <MessageContent>
        <MessageBubble align="end">
          <MessageBubbleContent>Thanks. Looks good.</MessageBubbleContent>
        </MessageBubble>
      </MessageContent>
    </Message>
  </div>
);

export default Example;
