import {
  ColorPicker,
  ColorPickerInput,
  ColorPickerSwatchPreview,
} from "@/registry/react/components/color-picker";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  InputGroup,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const Example = () => (
  <ColorPicker
    className="w-full max-w-xs items-end"
    defaultValue="rgba(235, 94, 65, 0.8)"
  >
    <ColorPickerSwatchPreview />

    <Field>
      <FieldLabel>Hex</FieldLabel>
      <InputGroup>
        <ColorPickerInput asChild channel="hex">
          <InputGroupInput />
        </ColorPickerInput>
      </InputGroup>
    </Field>
    <Field>
      <FieldLabel>Alpha</FieldLabel>
      <ColorPickerInput asChild channel="alpha">
        <Input />
      </ColorPickerInput>
    </Field>
  </ColorPicker>
);

export default Example;
