import {
  ColorPicker,
  ColorPickerControl,
  ColorPickerInput,
} from "@/registry/react/components/color-picker";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <ColorPicker className="w-full max-w-64" defaultValue="#eb5e41" disabled>
    <ColorPickerControl>
      <ColorPickerInput asChild>
        <Input placeholder="#EB5E41" />
      </ColorPickerInput>
    </ColorPickerControl>
  </ColorPicker>
);

export default Example;
