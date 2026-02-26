import {
  ColorPicker,
  ColorPickerSlider,
  ColorPickerView,
} from "@/registry/react/components/color-picker";

const Example = () => (
  <ColorPicker
    className="w-full max-w-64"
    defaultValue="#0485F7"
    format="hsba"
    inline
  >
    <ColorPickerView format="hsba">
      <div className="flex w-full flex-col gap-4">
        <ColorPickerSlider channel="hue" />
        <ColorPickerSlider channel="saturation" />
        <ColorPickerSlider channel="brightness" />
      </div>
    </ColorPickerView>
  </ColorPicker>
);

export default Example;
