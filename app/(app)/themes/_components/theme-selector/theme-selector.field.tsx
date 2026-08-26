"use client";

import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";
import { useIsMobile } from "@/registry/react/hooks/use-is-mobile";

interface ThemeSelectorFieldProps<T extends { label: string; value: string }> {
  collection: { items: T[] };
  label: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  renderItem: (item: T) => React.ReactNode;
  trigger?: React.ReactNode;
  value: string;
}

export const ThemeSelectorField = <T extends { label: string; value: string }>(
  props: ThemeSelectorFieldProps<T>
) => {
  const {
    collection,
    label,
    onValueChange,
    placeholder,
    renderItem,
    trigger,
    value,
  } = props;
  const isMobile = useIsMobile();

  const handleNativeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onValueChange(event.target.value);
  };

  const handleSelectChange = ({ value: next }: { value: string[] }) => {
    const [selected] = next;
    if (selected) {
      onValueChange(selected);
    }
  };

  if (isMobile) {
    return (
      <Field>
        <FieldLabel>{label}</FieldLabel>
        <NativeSelect onChange={handleNativeChange} value={value}>
          {collection.items.map((item) => (
            <NativeSelectOption key={item.value} value={item.value}>
              {item.label}
            </NativeSelectOption>
          ))}
        </NativeSelect>
      </Field>
    );
  }

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <Select
        collection={collection}
        onValueChange={handleSelectChange}
        value={[value]}
      >
        <SelectTrigger className="w-full">
          {trigger ? (
            <div className="flex items-center gap-2">
              {trigger}
              <SelectValue placeholder={placeholder} />
            </div>
          ) : (
            <SelectValue placeholder={placeholder} />
          )}
        </SelectTrigger>

        <SelectContent>
          {collection.items.map((item) => (
            <SelectItem item={item.value} key={item.value}>
              {renderItem(item)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  );
};
