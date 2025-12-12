"use client";

import { createListCollection } from "@ark-ui/react";
import { useTheme } from "next-themes";
import { PRIMARY_COLORS } from "@/lib/themes";
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
import {
  DEFAULT_PRIMARY_COLOR,
  type PrimaryColor,
  useConfig,
} from "@/store/config";

export const ThemeSelectorPrimary = () => {
  const { resolvedTheme } = useTheme();

  const isLight = resolvedTheme === "light";

  const collection = createListCollection({
    items: PRIMARY_COLORS,
  });

  const [config, setConfig] = useConfig();

  return (
    <Field>
      <FieldLabel>Primary</FieldLabel>
      <FieldInput>
        <Select
          collection={collection}
          onValueChange={({ value }) =>
            setConfig({ ...config, primaryColor: value[0] as PrimaryColor })
          }
          value={[config.primaryColor]}
        >
          <SelectTrigger className="w-full">
            <div className="flex items-center gap-2">
              <div className="size-4 rounded-md border bg-primary" />
              <SelectValueText placeholder="Select a theme" />
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
                    <div className={cn("size-3 rounded-md", hex)} />
                    {item.label}
                    {item.value === DEFAULT_PRIMARY_COLOR && (
                      <Badge variant="info">Default</Badge>
                    )}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </FieldInput>
    </Field>
  );
};
