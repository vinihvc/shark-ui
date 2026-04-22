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
  ColorPickerView,
} from "@/registry/react/components/color-picker";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const Example = () => (
  <ColorPicker className="w-full max-w-64" defaultValue="#eb5e41" format="hsla">
    <ColorPickerControl>
      <InputGroup>
        <ColorPickerTrigger asChild>
          <InputGroupAddon>
            <ColorPickerSwatchPreview />
          </InputGroupAddon>
        </ColorPickerTrigger>
        <ColorPickerInput asChild>
          <InputGroupInput />
        </ColorPickerInput>
      </InputGroup>
    </ColorPickerControl>

    <ColorPickerContent>
      <ColorPickerArea>
        <ColorPickerAreaThumb />
      </ColorPickerArea>
      <ColorPickerView format="hsla">
        <ColorPickerSlider channel="hue" />
      </ColorPickerView>
    </ColorPickerContent>
  </ColorPicker>
);

export default Example;
