import { Button } from "@/registry/react/components/button";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardInput,
  ClipboardTrigger,
} from "@/registry/react/components/clipboard";
import { Field, FieldLabel } from "@/registry/react/components/field";

const ClipboardDemo = () => (
  <Field>
    <FieldLabel>Copy this value</FieldLabel>

    <Clipboard
      className="flex items-center gap-2"
      value="https://x.com/vinihvc"
    >
      <ClipboardInput />

      <ClipboardTrigger asChild>
        <Button size="icon-md">
          <ClipboardIndicator />
        </Button>
      </ClipboardTrigger>
    </Clipboard>
  </Field>
);

export default ClipboardDemo;
