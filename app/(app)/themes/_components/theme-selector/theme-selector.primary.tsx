"use client";

import { createListCollection } from "@ark-ui/react";
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
  const { resolvedTheme } = useTheme();
  const [config, setConfig] = useConfig();

  const isLight = resolvedTheme === "light";

  const collection = createListCollection({
    items: PRIMARY_COLORS,
  });

  const handleSelectColor = (color: PrimaryColor) => {
    setConfig({
      ...config,
      primaryColor: color,
    });
  };

  return (
    <Field>
      <FieldLabel>Primary</FieldLabel>
      <Select
        collection={collection}
        onValueChange={({ value }) =>
          handleSelectColor(value[0] as PrimaryColor)
        }
        value={[config.primaryColor]}
      >
        <SelectTrigger className="w-full">
          <div className="flex items-center gap-2">
            <div className="size-4 rounded-full border bg-primary" />
            <SelectValue placeholder="Select a theme" />
          </div>
        </SelectTrigger>

        <SelectContent>
          {collection.items.map((item) => {
            const hex =
              typeof item.hex === "string"
                ? item.hex
                : item.hex[isLight ? "light" : "dark"];

            return (
              <SelectItem item={item.value} key={item.value}>
                <div className="flex items-center gap-2">
                  <div className={cn("size-3 rounded-full", hex)} />
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
