import { CheckIcon, X } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Editable,
  EditableArea,
  EditableCancelTrigger,
  EditableControl,
  EditableInput,
  EditablePreview,
  EditableSubmitTrigger,
} from "@/registry/react/components/editable";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Textarea } from "@/registry/react/components/textarea";

const Example = () => (
  <Card className="w-full max-w-sm">
    <CardHeader
      description="Double-click the text to start editing"
      title="Edit description"
    />
    <CardContent>
      <FieldGroup>
        <Field>
          <FieldLabel>Description</FieldLabel>
          <Editable
            defaultValue="This is a longer description that can be edited. Click to edit and make changes."
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
                <Button aria-label="Cancel" size="icon-md" variant="outline">
                  <X />
                </Button>
              </EditableCancelTrigger>
              <EditableSubmitTrigger asChild>
                <Button aria-label="Save" size="icon-md" variant="outline">
                  <CheckIcon />
                </Button>
              </EditableSubmitTrigger>
            </EditableControl>
          </Editable>
        </Field>
      </FieldGroup>
    </CardContent>
  </Card>
);

export default Example;
