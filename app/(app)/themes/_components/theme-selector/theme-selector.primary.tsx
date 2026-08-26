"use client";

import { createListCollection } from "@ark-ui/react";
import { useTheme } from "@teispace/next-themes";
import { PRIMARY_COLORS } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/react/components/badge";
import {
  DEFAULT_PRIMARY_COLOR,
  type PrimaryColor,
  useConfig,
} from "@/store/config";
import { ThemeSelectorField } from "./theme-selector.field";

const collection = createListCollection({
  items: PRIMARY_COLORS,
});

const renderPrimaryItem = (
  item: (typeof PRIMARY_COLORS)[number],
  isLight: boolean
) => {
  const hexColor =
    typeof item.hex === "string"
      ? item.hex
      : item.hex[isLight ? "light" : "dark"];

  return (
    <div className="flex items-center gap-2">
      <div className={cn("size-3 rounded-2xl", hexColor)} />
      {item.label}
      {item.value === DEFAULT_PRIMARY_COLOR && (
        <Badge size="sm" variant="info">
          Default
        </Badge>
      )}
    </div>
  );
};

const renderPrimaryItemLight = (item: (typeof PRIMARY_COLORS)[number]) =>
  renderPrimaryItem(item, true);

const renderPrimaryItemDark = (item: (typeof PRIMARY_COLORS)[number]) =>
  renderPrimaryItem(item, false);

export const ThemeSelectorPrimary = () => {
  const { resolvedTheme } = useTheme();
  const [config, setConfig] = useConfig();
  const isLight = resolvedTheme === "light";

  const handleSelectColor = (value: string) => {
    setConfig({
      ...config,
      primaryColor: value as PrimaryColor,
    });
  };

  return (
    <ThemeSelectorField
      collection={collection}
      label="Primary"
      onValueChange={handleSelectColor}
      placeholder="Select a theme"
      renderItem={isLight ? renderPrimaryItemLight : renderPrimaryItemDark}
      trigger={<div className="size-4 rounded-2xl bg-primary" />}
      value={config.primaryColor}
    />
  );
};
