import { Check, X } from "lucide-react";
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
import { Input } from "@/registry/react/components/input";

const EditableDemo = () => (
  <Card className="w-full max-w-sm">
    <CardHeader
      description="Click in the field or edit button to start editing"
      title="Edit user"
    />
    <CardContent>
      <FieldGroup>
        <Field>
          <FieldLabel>Name</FieldLabel>
          <Editable defaultValue="Vinicius Vicentini">
            <EditableArea>
              <EditableInput asChild>
                <Input className="w-full" />
              </EditableInput>
              <EditablePreview />
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
        </Field>
        <Field>
          <FieldLabel>Username</FieldLabel>
          <Editable defaultValue="@vinihvc">
            <EditableArea>
              <EditableInput asChild>
                <Input />
              </EditableInput>
              <EditablePreview />
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
        </Field>
      </FieldGroup>
    </CardContent>
  </Card>
);

export default EditableDemo;
