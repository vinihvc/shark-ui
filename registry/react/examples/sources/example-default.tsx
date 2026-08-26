import { Bubble, BubbleContent } from "@/registry/react/components/bubble";
import {
  InlineCitation,
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/registry/react/components/sources";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-3">
    <Sources defaultOpen>
      <SourcesTrigger count={2} />
      <SourcesContent>
        <Source href="https://react.dev" title="React Documentation" />
        <Source href="https://ark-ui.com" title="Ark UI" />
      </SourcesContent>
    </Sources>
    <Bubble>
      <BubbleContent>
        Hooks must be called at the top level
        <InlineCitation
          href="https://react.dev"
          index={1}
          title="React Documentation"
        />
        and stay outside nested conditions.
      </BubbleContent>
    </Bubble>
  </div>
);

export default Example;
