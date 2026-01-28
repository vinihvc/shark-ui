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
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <Editable className="w-full max-w-64" defaultValue="Editable content">
    <EditableArea>
      <EditableInput asChild>
        <Input />
      </EditableInput>
      <EditablePreview size="xs" />
    </EditableArea>
    <EditableControl>
      <EditableCancelTrigger asChild>
        <Button size="icon-xs" variant="outline">
          <X />
        </Button>
      </EditableCancelTrigger>
      <EditableSubmitTrigger asChild>
        <Button size="icon-xs" variant="outline">
          <Check />
        </Button>
      </EditableSubmitTrigger>
    </EditableControl>
  </Editable>
);

export default Example;
