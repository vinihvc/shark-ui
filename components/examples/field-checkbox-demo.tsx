import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

export const FieldCheckbox = () => {
  return (
    <div className="flex flex-col gap-2">
      <FieldLabel className="w-full">
        <Field orientation="horizontal">
          <Checkbox tabIndex={-1} />
          <FieldContent>
            <FieldTitle> I agree to the terms and conditions</FieldTitle>
          </FieldContent>
        </Field>
      </FieldLabel>

      <FieldLabel className="w-full max-w-sm">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Enable notifications</FieldTitle>
            <FieldDescription>
              You can enable or disable notifications at any time.
            </FieldDescription>
          </FieldContent>
          <Switch defaultChecked tabIndex={-1} />
        </Field>
      </FieldLabel>
    </div>
  );
};
