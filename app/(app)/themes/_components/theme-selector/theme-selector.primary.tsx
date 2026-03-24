"use client";

import { createListCollection } from "@ark-ui/react";
import {
  NativeSelect,
  NativeSelectOption,
} from "@registry/react/components/native-select";
import { useIsMobile } from "@registry/react/hooks/use-is-mobile";
import { useTheme } from "next-themes";
import { PRIMARY_COLORS } from "@/lib/themes";
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
import {
  DEFAULT_PRIMARY_COLOR,
  type PrimaryColor,
  useConfig,
} from "@/store/config";

export const ThemeSelectorPrimary = () => {
  const isMobile = useIsMobile();
  const { resolvedTheme } = useTheme();
  const [config, setConfig] = useConfig();

  const isLight = resolvedTheme === "light";

  const collection = createListCollection({
    items: PRIMARY_COLORS,
  });

  if (isMobile) {
    return (
      <Field>
        <FieldLabel>Primary</FieldLabel>
        <NativeSelect
          onChange={({ target }) =>
            setConfig({ ...config, primaryColor: target.value as PrimaryColor })
          }
          value={config.primaryColor}
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
      <FieldLabel>Primary</FieldLabel>
      <Select
        collection={collection}
        onValueChange={({ value }) =>
          setConfig({
            ...config,
            primaryColor: value[0] as PrimaryColor,
          })
        }
        value={[config.primaryColor]}
      >
        <SelectTrigger className="w-full">
          <div className="flex items-center gap-2">
            <div className="size-4 rounded-2xl bg-primary" />
            <SelectValue placeholder="Select a theme" />
          </div>
        </SelectTrigger>

        <SelectContent>
          {collection.items.map((item) => {
            const hexColor =
              typeof item.hex === "string"
                ? item.hex
                : item.hex[isLight ? "light" : "dark"];

            return (
              <SelectItem item={item.value} key={item.value}>
                <div className="flex items-center gap-2">
                  <div className={cn("size-3 rounded-2xl", hexColor)} />
                  {item.label}
                  {item.value === DEFAULT_PRIMARY_COLOR && (
                    <Badge size="sm" variant="info">
                      Default
                    </Badge>
                  )}
                </div>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </Field>
  );
};
