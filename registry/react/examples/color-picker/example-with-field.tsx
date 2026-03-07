import {
  ColorPicker,
  ColorPickerInput,
} from "@/registry/react/components/color-picker";
import {
  Field,
  FieldHelper,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <ColorPicker className="w-full max-w-64" defaultValue="#eb5e41">
    <Field>
      <FieldLabel>Color</FieldLabel>
      <ColorPickerInput asChild>
        <Input />
      </ColorPickerInput>
      <FieldHelper>Enter your brand's primary color</FieldHelper>
    </Field>
  </ColorPicker>
);

export default Example;
