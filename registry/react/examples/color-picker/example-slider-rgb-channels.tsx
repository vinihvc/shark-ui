import {
  ColorPicker,
  ColorPickerSlider,
  ColorPickerView,
} from "@/registry/react/components/color-picker";

const Example = () => (
  <ColorPicker
    className="w-full max-w-64"
    defaultValue="#ff6432"
    format="rgba"
    inline
  >
    <ColorPickerView format="rgba">
      <div className="flex w-full flex-col gap-4">
        <ColorPickerSlider channel="red" />
        <ColorPickerSlider channel="green" />
        <ColorPickerSlider channel="blue" />
      </div>
    </ColorPickerView>
  </ColorPicker>
);

export default Example;
