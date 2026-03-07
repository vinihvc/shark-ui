import {
  ColorPicker,
  ColorPickerSlider,
  ColorPickerTransparencyGrid,
  ColorPickerView,
} from "@/registry/react/components/color-picker";

const Example = () => (
  <ColorPicker
    className="w-full max-w-64"
    defaultValue="hsla(0, 100%, 50%, 0.5)"
    format="rgba"
    inline
  >
    <ColorPickerView format="rgba">
      <ColorPickerSlider channel="alpha">
        <ColorPickerTransparencyGrid />
      </ColorPickerSlider>
    </ColorPickerView>
  </ColorPicker>
);

export default Example;
