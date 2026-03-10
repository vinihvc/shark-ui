import {
  ColorPicker,
  ColorPickerSlider,
  ColorPickerView,
} from "@/registry/react/components/color-picker";

const Example = () => (
  <ColorPicker
    className="w-full max-w-64"
    defaultValue="#EB5E41"
    disabled
    format="hsla"
    inline
  >
    <ColorPickerView format="hsla">
      <ColorPickerSlider channel="hue" />
    </ColorPickerView>
  </ColorPicker>
);

export default Example;
