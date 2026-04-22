import { Button } from "@/registry/react/components/button";
import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerContent,
  ColorPickerControl,
  ColorPickerSwatchPreview,
  ColorPickerTrigger,
} from "@/registry/react/components/color-picker";

const Example = () => (
  <ColorPicker className="w-full max-w-64" defaultValue="#eb5e41" disabled>
    <ColorPickerControl>
      <ColorPickerTrigger asChild>
        <Button size="lg" variant="ghost">
          <ColorPickerSwatchPreview className="size-6" />
          Pick as color
        </Button>
      </ColorPickerTrigger>
    </ColorPickerControl>
    <ColorPickerContent>
      <ColorPickerArea />
    </ColorPickerContent>
  </ColorPicker>
);

export default Example;
