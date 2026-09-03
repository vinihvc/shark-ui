import { Button } from "@/registry/react/components/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";
import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-3">
    <MessageBubble variant="secondary">
      <MessageBubbleContent>
        Can you send the recap from the client call?
      </MessageBubbleContent>
    </MessageBubble>
    <MessageBubble align="end">
      <MessageBubbleContent>
        <Collapsible className="relative" collapsedHeight="5.5rem">
          <div className="relative">
            <CollapsibleContent>
              <p>
                They approved the homepage with two changes: shorten the hero
                headline, and lead the pricing table with the annual plan. The
                empty-state illustration is still blocked, they haven't sent
                brand assets yet. I said we'd ship everything else Thursday and
                ping them next week about the art. Notes are in the Linear
                project.
              </p>
            </CollapsibleContent>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-(--message-bubble-surface) to-transparent group-data-[state=open]/collapsible:hidden"
            />
          </div>
          <CollapsibleTrigger asChild>
            <Button
              className="ms-auto mt-1 block h-auto w-fit p-0 text-primary-foreground/90 hover:text-primary-foreground hover:no-underline"
              clickEffect={false}
              size="sm"
              variant="link"
            >
              <span className="group-data-[state=open]/collapsible:hidden">
                Read more
              </span>
              <span className="hidden group-data-[state=open]/collapsible:inline">
                Show less
              </span>
            </Button>
          </CollapsibleTrigger>
        </Collapsible>
      </MessageBubbleContent>
    </MessageBubble>
  </div>
);

export default Example;
