import { Field } from "@/registry/react/components/field";
import {
  Slider,
  SliderLabel,
  SliderValue,
} from "@/registry/react/components/slider";

const Example = () => (
  <Field className="w-full max-w-xs">
    <Slider defaultValue={[50]}>
      <div className="flex items-center justify-between">
        <SliderLabel>Opacity</SliderLabel>
        <SliderValue />
      </div>
    </Slider>
  </Field>
);

export default Example;
