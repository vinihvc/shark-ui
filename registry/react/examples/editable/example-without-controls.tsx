import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Editable,
  EditableArea,
  EditableInput,
  EditablePreview,
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
      description="Click the field to edit, press Enter to save, Escape to cancel"
      title="Edit without controls"
    />
    <CardContent>
      <FieldGroup>
        <Field>
          <FieldLabel>Name</FieldLabel>
          <Editable defaultValue="Vinicius Vicentini">
            <EditableArea>
              <EditableInput asChild>
                <Input />
              </EditableInput>
              <EditablePreview />
            </EditableArea>
          </Editable>
        </Field>
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Editable defaultValue="vinicius@example.com">
            <EditableArea>
              <EditableInput asChild>
                <Input />
              </EditableInput>
              <EditablePreview />
            </EditableArea>
          </Editable>
        </Field>
      </FieldGroup>
    </CardContent>
  </Card>
);

export default Example;
