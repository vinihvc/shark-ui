"use client";

import { createListCollection } from "@ark-ui/react";
import { useTheme } from "next-themes";
import { GRAY_COLORS } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/react/components/badge";
import {
  Field,
  FieldInput,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValueText,
} from "@/registry/react/components/select";
import { DEFAULT_GRAY_COLOR, type GrayColor, useConfig } from "@/store/config";

export const ThemeSelectorGray = () => {
  const { resolvedTheme } = useTheme();

  const isLight = resolvedTheme === "light";

  const [config, setConfig] = useConfig();

  const collection = createListCollection({
    items: GRAY_COLORS,
  });

  return (
    <Field>
      <FieldLabel>Gray</FieldLabel>
      <FieldInput>
        <Select
          collection={collection}
          onValueChange={({ value }) =>
            setConfig({
              ...config,
              grayColor: value[0] as GrayColor,
            })
          }
          value={[config.grayColor]}
        >
          <SelectTrigger className="w-full">
            <div className="flex items-center gap-2">
              <div className="size-4 rounded-md bg-background" />
              <SelectValueText placeholder="Select a theme" />
            </div>
          </SelectTrigger>

          <SelectContent>
            {collection.items.map((item) => (
              <SelectItem item={item.value} key={item.value}>
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "size-4 rounded-md border",
                      item.hex[isLight ? "light" : "dark"]
                    )}
                  />
                  {item.label}
                  {item.value === DEFAULT_GRAY_COLOR && (
                    <Badge variant="info">Default</Badge>
                  )}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FieldInput>
    </Field>
  );
};
