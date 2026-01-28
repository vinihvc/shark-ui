import { Button } from "@/registry/react/components/button";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardTrigger,
  ClipboardValueText,
} from "@/registry/react/components/clipboard";

const Example = () => (
  <Clipboard value="https://x.com/vinihvc">
    <ClipboardValueText />
    <ClipboardTrigger asChild>
      <Button size="icon-md">
        <ClipboardIndicator />
      </Button>
    </ClipboardTrigger>
  </Clipboard>
);

export default Example;
