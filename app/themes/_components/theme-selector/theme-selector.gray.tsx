"use client";

import { createListCollection } from "@ark-ui/react";
import React from "react";
import { GRAY_COLORS } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/react/components/badge";
import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValueText,
} from "@/registry/react/components/select";
import { DEFAULT_GRAY_COLOR, type GrayColor, useConfig } from "@/store/config";

export const ThemeSelectorGray = () => {
  const [config, setConfig] = useConfig();

  const collection = createListCollection({
    items: GRAY_COLORS,
  });

  const [selectedColor, setSelectedColor] = React.useState(config.grayColor);

  const handleSelectColor = (color: GrayColor) => {
    setSelectedColor(color);
    setConfig({
      ...config,
      grayColor: color,
    });
  };

  return (
    <Field>
      <FieldLabel>Gray</FieldLabel>
      <Select
        collection={collection}
        onValueChange={({ value }) => handleSelectColor(value[0] as GrayColor)}
        value={[selectedColor]}
      >
        <SelectTrigger className="w-full">
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "size-4 rounded-md border",
                `bg-${selectedColor}-900`
              )}
            />
            <SelectValueText placeholder="Select a theme" />
          </div>
        </SelectTrigger>

        <SelectContent>
          {collection.items.map((item) => (
            <SelectItem item={item.value} key={item.value}>
              <div className="flex items-center gap-2">
                <div className={cn("size-4 rounded-md border", item.hex)} />
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
