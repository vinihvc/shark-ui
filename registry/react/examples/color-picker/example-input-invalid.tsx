import {
  ColorPicker,
  ColorPickerControl,
  ColorPickerInput,
} from "@/registry/react/components/color-picker";
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <Field className="w-full max-w-64" invalid>
    <FieldLabel>Color</FieldLabel>
    <ColorPicker>
      <ColorPickerControl>
        <ColorPickerInput asChild>
          <Input placeholder="#EB5E41" />
        </ColorPickerInput>
      </ColorPickerControl>
    </ColorPicker>
    <FieldError>Please enter a valid hex color</FieldError>
  </Field>
);

export default Example;
