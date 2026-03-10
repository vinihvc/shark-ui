import {
  ColorPicker,
  ColorPickerSwatch,
  ColorPickerSwatchGroup,
  ColorPickerSwatchIndicator,
  ColorPickerSwatchTrigger,
} from "@/registry/react/components/color-picker";

const Example = () => (
  <ColorPicker className="w-full max-w-64" inline>
    <ColorPickerSwatchGroup>
      <ColorPickerSwatchTrigger className="rounded-sm" value="#0485F7">
        <ColorPickerSwatch value="#0485F7">
          <ColorPickerSwatchIndicator />
        </ColorPickerSwatch>
      </ColorPickerSwatchTrigger>
    </ColorPickerSwatchGroup>
    <ColorPickerSwatchGroup>
      <ColorPickerSwatchTrigger className="rounded-md" value="#EF4444">
        <ColorPickerSwatch value="#EF4444">
          <ColorPickerSwatchIndicator />
        </ColorPickerSwatch>
      </ColorPickerSwatchTrigger>
    </ColorPickerSwatchGroup>
    <ColorPickerSwatchGroup>
      <ColorPickerSwatchTrigger className="rounded-lg" value="#F59E0B">
        <ColorPickerSwatch value="#F59E0B">
          <ColorPickerSwatchIndicator />
        </ColorPickerSwatch>
      </ColorPickerSwatchTrigger>
    </ColorPickerSwatchGroup>
    <ColorPickerSwatchGroup>
      <ColorPickerSwatchTrigger className="rounded-xl" value="#10B981">
        <ColorPickerSwatch value="#10B981">
          <ColorPickerSwatchIndicator />
        </ColorPickerSwatch>
      </ColorPickerSwatchTrigger>
    </ColorPickerSwatchGroup>
  </ColorPicker>
);

export default Example;
