import { Button } from "@/registry/react/components/button";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardInput,
  ClipboardTrigger,
} from "@/registry/react/components/clipboard";

const ClipboardDemo = () => (
  <div className="max-w-sm">
    <Clipboard value="https://x.com/vinihvc">
      <ClipboardInput />

      <ClipboardTrigger asChild>
        <Button size="icon-md">
          <ClipboardIndicator />
        </Button>
      </ClipboardTrigger>
    </Clipboard>
  </div>
);

export default ClipboardDemo;
