import { Button } from "@/registry/react/components/button";
import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerAreaThumb,
  ColorPickerContent,
  ColorPickerControl,
  ColorPickerInput,
  ColorPickerSlider,
  ColorPickerSwatchPreview,
  ColorPickerTrigger,
} from "@/registry/react/components/color-picker";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <ColorPicker className="w-full max-w-64" format="rgba">
    <ColorPickerControl>
      <ColorPickerTrigger asChild>
        <Button size="lg" variant="ghost">
          <ColorPickerSwatchPreview className="size-6" />
          Pick a color
        </Button>
      </ColorPickerTrigger>
    </ColorPickerControl>
    <ColorPickerContent>
      <ColorPickerArea>
        <ColorPickerAreaThumb />
      </ColorPickerArea>
      <ColorPickerSlider channel="hue" />
      <div className="grid grid-cols-3 gap-2">
        <ColorPickerInput asChild channel="red">
          <Input />
        </ColorPickerInput>
        <ColorPickerInput asChild channel="green">
          <Input />
        </ColorPickerInput>
        <ColorPickerInput asChild channel="blue">
          <Input />
        </ColorPickerInput>
      </div>
    </ColorPickerContent>
  </ColorPicker>
);

export default Example;
