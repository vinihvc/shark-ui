import { Button } from "@/registry/react/components/button";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardInput,
  ClipboardTrigger,
} from "@/registry/react/components/clipboard";

const Example = () => (
  <div className="max-w-sm">
    <Clipboard timeout={5000} value="https://x.com/vinihvc">
      <ClipboardInput />

      <ClipboardTrigger asChild>
        <Button size="icon-md">
          <ClipboardIndicator />
        </Button>
      </ClipboardTrigger>
    </Clipboard>
  </div>
);

export default Example;
