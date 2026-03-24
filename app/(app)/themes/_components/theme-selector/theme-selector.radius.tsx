"use client";

import { createListCollection } from "@ark-ui/react";
import {
  NativeSelect,
  NativeSelectOption,
} from "@registry/react/components/native-select";
import { useIsMobile } from "@registry/react/hooks/use-is-mobile";
import { BORDER_RADIUS } from "@/lib/themes";
import { Badge } from "@/registry/react/components/badge";
import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";
import {
  type BorderRadius,
  DEFAULT_BORDER_RADIUS,
  useConfig,
} from "@/store/config";

const collection = createListCollection({
  items: BORDER_RADIUS,
});

export const ThemeSelectorRadius = () => {
  const isMobile = useIsMobile();
  const [config, setConfig] = useConfig();

  if (isMobile) {
    return (
      <Field>
        <FieldLabel>Radius</FieldLabel>
        <NativeSelect
          onChange={({ target }) =>
            setConfig({ ...config, borderRadius: target.value as BorderRadius })
          }
          value={config.borderRadius}
        >
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
      <FieldLabel>Radius</FieldLabel>
      <Select
        collection={collection}
        onValueChange={({ value }) =>
          setConfig({ ...config, borderRadius: value[0] as BorderRadius })
        }
        value={[config.borderRadius]}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a radius" />
        </SelectTrigger>

        <SelectContent>
          {collection.items.map((item) => (
            <SelectItem item={item.value} key={item.value}>
              {item.label}

              {item.value === DEFAULT_BORDER_RADIUS && (
                <Badge size="sm" variant="info">
                  Default
                </Badge>
              )}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  );
};
