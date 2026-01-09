import {
  Editable,
  EditableArea,
  EditableInput,
  EditablePreview,
} from "@/registry/react/components/editable";
import { Field, FieldLabel } from "@/registry/react/components/field";

const EditableDemo = () => (
  <Field className="w-80">
    <FieldLabel>Double click to edit</FieldLabel>

    <Editable defaultValue="Vinicius Vicentini">
      <EditableArea>
        <EditableInput />

        <EditablePreview />
      </EditableArea>
    </Editable>
  </Field>
);

export default EditableDemo;
