import { Checkbox } from "@/registry/react/components/checkbox";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";
import { Spinner } from "@/registry/react/components/spinner";
import { Switch } from "@/registry/react/components/switch";

export const FormControlsExample = () => {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Checkbox defaultChecked tabIndex={-1} />
      <Checkbox tabIndex={-1} />
      <Switch defaultChecked tabIndex={-1} />
      <RadioGroup className="flex-row gap-6" defaultValue="b">
        <RadioGroupItem
          className="**:data-[slot=radio-group-item-text]:hidden"
          tabIndex={-1}
          value="a"
        />
        <RadioGroupItem
          className="**:data-[slot=radio-group-item-text]:hidden"
          tabIndex={-1}
          value="b"
        />
      </RadioGroup>
      <Spinner />
    </div>
  );
};
