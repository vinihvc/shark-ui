import { Checkbox } from "@/registry/react/components/checkbox";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";
import { Spinner } from "@/registry/react/components/spinner";
import { Switch } from "@/registry/react/components/switch";

export const FormControlsExample = () => (
  <div className="flex flex-wrap items-center gap-6">
    <Checkbox defaultChecked />
    <Checkbox />
    <Switch defaultChecked />
    <RadioGroup className="flex-row gap-6" defaultValue="b">
      <RadioGroupItem
        className="**:data-[slot=radio-group-item-text]:hidden"
        value="a"
      />
      <RadioGroupItem
        className="**:data-[slot=radio-group-item-text]:hidden"
        value="b"
      />
    </RadioGroup>
    <Spinner />
  </div>
);
