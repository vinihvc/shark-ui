import { Check, X } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Editable,
  EditableArea,
  EditableCancelTrigger,
  EditableControl,
  EditableInput,
  EditablePreview,
  EditableSubmitTrigger,
} from "@/registry/react/components/editable";
import { Textarea } from "@/registry/react/components/textarea";

const Example = () => (
  <Editable
    className="w-full max-w-64"
    defaultValue="Editable content"
    orientation="vertical"
  >
    <EditableArea>
      <EditableInput asChild>
        <Textarea className="min-h-24" />
      </EditableInput>
      <EditablePreview className="min-h-24" />
    </EditableArea>
    <EditableControl>
      <EditableCancelTrigger asChild>
        <Button size="icon-md" variant="outline">
          <X />
        </Button>
      </EditableCancelTrigger>
      <EditableSubmitTrigger asChild>
        <Button size="icon-md" variant="outline">
          <Check />
        </Button>
      </EditableSubmitTrigger>
    </EditableControl>
  </Editable>
);

export default Example;
