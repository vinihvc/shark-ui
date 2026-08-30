import {
  ColorPicker,
  ColorPickerSwatch,
  ColorPickerSwatchGroup,
  ColorPickerSwatchIndicator,
  ColorPickerSwatchTrigger,
} from "@/registry/react/components/color-picker";

const Example = () => (
  <ColorPicker className="w-full max-w-64" disabled>
    <ColorPickerSwatchGroup>
      {swatches.map((color) => (
        <ColorPickerSwatchTrigger key={color} value={color}>
          <ColorPickerSwatch value={color}>
            <ColorPickerSwatchIndicator />
          </ColorPickerSwatch>
        </ColorPickerSwatchTrigger>
      ))}
    </ColorPickerSwatchGroup>
  </ColorPicker>
);

const swatches = ["#0485F7", "#EF4444", "#F59E0B", "#10B981"];

export default Example;
