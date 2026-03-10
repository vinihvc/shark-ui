import { Button } from "@/registry/react/components/button";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardTrigger,
  ClipboardValue,
} from "@/registry/react/components/clipboard";

const Example = () => (
  <Clipboard value="https://x.com/vinihvc">
    <ClipboardValue />
    <ClipboardTrigger asChild>
      <Button size="icon-md">
        <ClipboardIndicator />
      </Button>
    </ClipboardTrigger>
  </Clipboard>
);

export default Example;
