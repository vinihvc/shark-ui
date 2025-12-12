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
      disabled: true,
    },
    {
      label: "Receive marketing emails",
      value: "marketing",
    },
  ];

  return (
    <CheckboxGroup className="gap-3" defaultValue={["marketing"]}>
      {options.map((option) => (
        <Field
          className="flex-row"
          disabled={option.disabled}
          key={option.value}
        >
          <Checkbox disabled={option.disabled} value={option.value} />

          <FieldLabel>{option.label}</FieldLabel>
        </Field>
      ))}
    </CheckboxGroup>
  );
};

export default CheckboxDemo;
