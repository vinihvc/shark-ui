import {
  ColorPicker,
  ColorPickerSlider,
  ColorPickerView,
} from "@/registry/react/components/color-picker";

const Example = () => (
  <ColorPicker
    className="h-56 justify-between"
    defaultValue="hsl(0, 100%, 50%)"
    format="hsla"
    inline
  >
    <ColorPickerView format="hsla">
      <div className="flex flex-col gap-4">
        <ColorPickerSlider channel="hue" orientation="vertical" />
      </div>
    </ColorPickerView>
  </ColorPicker>
);

export default Example;
