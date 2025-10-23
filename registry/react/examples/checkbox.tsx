import { Checkbox, CheckboxGroup } from "@/registry/react/components/checkbox";
import { Field, FieldLabel } from "@/registry/react/components/field";

const CheckboxDemo = () => {
  const options = [
    {
      label: "Accept terms and conditions",
      value: "terms",
    },
    {
      label: "Receive notifications",
      value: "notifications",
    },
    {
      label: "Receive marketing emails",
      value: "marketing",
    },
  ];

  return (
    <CheckboxGroup className="space-y-3" defaultValue={["marketing"]}>
      {options.map((option) => (
        <Field className="flex-row" key={option.value}>
          <Checkbox value={option.value} />

          <FieldLabel>{option.label}</FieldLabel>
        </Field>
      ))}
    </CheckboxGroup>
  );
};

export default CheckboxDemo;
