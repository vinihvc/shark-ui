import { Check, Edit, X } from "lucide-react";
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
  EditableEditTrigger,
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

const Example = () => (
  <Card className="w-full max-w-sm">
    <CardHeader
      description="Use the edit button to start editing (no automatic activation)"
      title="Edit with manual trigger"
    />
    <CardContent>
      <FieldGroup>
        <Field>
          <FieldLabel>Name</FieldLabel>
          <Editable activationMode="none" defaultValue="Vinicius Vicentini">
            <EditableArea>
              <EditableInput asChild>
                <Input />
              </EditableInput>
              <EditablePreview />
            </EditableArea>
            <EditableControl>
              <EditableEditTrigger asChild>
                <Button aria-label="Edit" size="icon-md" variant="outline">
                  <Edit />
                </Button>
              </EditableEditTrigger>
              <EditableCancelTrigger asChild>
                <Button aria-label="Cancel" size="icon-md" variant="outline">
                  <X />
                </Button>
              </EditableCancelTrigger>
              <EditableSubmitTrigger asChild>
                <Button aria-label="Save" size="icon-md" variant="outline">
                  <Check />
                </Button>
              </EditableSubmitTrigger>
            </EditableControl>
          </Editable>
        </Field>
        <Field>
          <FieldLabel>Username</FieldLabel>
          <Editable activationMode="none" defaultValue="@vinihvc">
            <EditableArea>
              <EditableInput asChild>
                <Input />
              </EditableInput>
              <EditablePreview />
            </EditableArea>
            <EditableControl>
              <EditableEditTrigger asChild>
                <Button aria-label="Edit" size="icon-md" variant="outline">
                  <Edit />
                </Button>
              </EditableEditTrigger>
              <EditableCancelTrigger asChild>
                <Button aria-label="Cancel" size="icon-md" variant="outline">
                  <X />
                </Button>
              </EditableCancelTrigger>
              <EditableSubmitTrigger asChild>
                <Button aria-label="Save" size="icon-md" variant="outline">
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

export default Example;
