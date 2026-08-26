"use client";

import { createListCollection } from "@ark-ui/react";
import { GRAY_COLORS } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/react/components/badge";
import { DEFAULT_GRAY_COLOR, type GrayColor, useConfig } from "@/store/config";
import { ThemeSelectorField } from "./theme-selector.field";

const collection = createListCollection({
  items: GRAY_COLORS,
});

const renderGrayItem = (item: (typeof GRAY_COLORS)[number]) => (
  <div className="flex items-center gap-2">
    <div className={cn("size-4 rounded-2xl", item.hex)} />
    {item.label}
    {item.value === DEFAULT_GRAY_COLOR && (
      <Badge size="sm" variant="info">
        Default
      </Badge>
    )}
  </div>
);

export const ThemeSelectorGray = () => {
  const [config, setConfig] = useConfig();
  const current = collection.items.find(
    (item) => item.value === config.grayColor
  );

  const handleSelectColor = (value: string) => {
    setConfig({
      ...config,
      grayColor: value as GrayColor,
    });
  };

  return (
    <ThemeSelectorField
      collection={collection}
      label="Gray"
      onValueChange={handleSelectColor}
      placeholder="Select a theme"
      renderItem={renderGrayItem}
      trigger={
        <div
          className={cn("size-4 rounded-2xl", current?.hex ?? "bg-neutral-500")}
        />
      }
      value={config.grayColor}
    />
  );
};
