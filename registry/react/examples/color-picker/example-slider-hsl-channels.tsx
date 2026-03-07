import {
  ColorPicker,
  ColorPickerSlider,
  ColorPickerView,
} from "@/registry/react/components/color-picker";

const Example = () => (
  <ColorPicker
    className="w-full max-w-64"
    defaultValue="hsla(136, 69%, 50%, 1)"
    format="hsla"
    inline
  >
    <ColorPickerView format="hsla">
      <div className="flex w-full flex-col gap-4">
        <ColorPickerSlider channel="hue" />
        <ColorPickerSlider channel="saturation" />
        <ColorPickerSlider channel="lightness" />
      </div>
    </ColorPickerView>
  </ColorPicker>
);

export default Example;
