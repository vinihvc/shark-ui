"use client";

import { createListCollection } from "@ark-ui/react";
import {
  NativeSelect,
  NativeSelectOption,
} from "@registry/react/components/native-select";
import { useIsMobile } from "@registry/react/hooks/use-is-mobile";
import { GRAY_COLORS } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/react/components/badge";
import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";
import { DEFAULT_GRAY_COLOR, type GrayColor, useConfig } from "@/store/config";

const collection = createListCollection({
  items: GRAY_COLORS,
});

export const ThemeSelectorGray = () => {
  const isMobile = useIsMobile();
  const [config, setConfig] = useConfig();

  const handleSelectColor = (color: GrayColor) => {
    setConfig({
      ...config,
      grayColor: color,
    });
  };

  if (isMobile) {
    return (
      <Field>
        <FieldLabel>Gray</FieldLabel>
        <NativeSelect
          onChange={({ target }) =>
            handleSelectColor(target.value as GrayColor)
          }
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
      <FieldLabel>Gray</FieldLabel>
      <Select
        collection={collection}
        onValueChange={({ value }) => handleSelectColor(value[0] as GrayColor)}
        value={[config.grayColor]}
      >
        <SelectTrigger className="w-full">
          <div className="flex items-center gap-2">
            <div
              className={cn("size-4 rounded-2xl", `bg-${config.grayColor}-500`)}
            />
            <SelectValue placeholder="Select a theme" />
          </div>
        </SelectTrigger>

        <SelectContent>
          {collection.items.map((item) => (
            <SelectItem item={item.value} key={item.value}>
              <div className="flex items-center gap-2">
                <div className={cn("size-4 rounded-2xl", item.hex)} />
                {item.label}
                {item.value === DEFAULT_GRAY_COLOR && (
                  <Badge size="sm" variant="info">
                    Default
                  </Badge>
                )}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  );
};
