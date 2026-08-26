import { Bubble, BubbleContent } from "@/registry/react/components/bubble";
import { Button } from "@/registry/react/components/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-3">
    <Bubble variant="muted">
      <BubbleContent>How can I help you today?</BubbleContent>
    </Bubble>
    <Bubble>
      <BubbleContent className="flex flex-col gap-2">
        <p>
          The accessibility review found two focus states that were visually too
          subtle in dark mode.
        </p>
        <Collapsible>
          <CollapsibleContent>
            <p>
              I checked the dialog, menu, and drawer paths because each one
              renders focusable controls. The ring contrast was below 3:1 on the
              muted surfaces.
            </p>
          </CollapsibleContent>
          <CollapsibleTrigger asChild>
            <Button className="h-auto p-0" size="sm" variant="link">
              Show more
            </Button>
          </CollapsibleTrigger>
        </Collapsible>
      </BubbleContent>
    </Bubble>
  </div>
);

export default Example;
