"use client";

import { createListCollection } from "@ark-ui/react";
import { BORDER_RADIUS } from "@/lib/themes";
import { Badge } from "@/registry/react/components/badge";
import {
  type BorderRadius,
  DEFAULT_BORDER_RADIUS,
  useConfig,
} from "@/store/config";
import { ThemeSelectorField } from "./theme-selector.field";

const collection = createListCollection({
  items: BORDER_RADIUS,
});

const renderRadiusItem = (item: (typeof BORDER_RADIUS)[number]) => (
  <>
    {item.label}
    {item.value === DEFAULT_BORDER_RADIUS && (
      <Badge size="sm" variant="info">
        Default
      </Badge>
    )}
  </>
);

export const ThemeSelectorRadius = () => {
  const [config, setConfig] = useConfig();

  const handleSelectColor = (value: string) => {
    setConfig({
      ...config,
      borderRadius: value as BorderRadius,
    });
  };

  return (
    <ThemeSelectorField
      collection={collection}
      label="Radius"
      onValueChange={handleSelectColor}
      placeholder="Select a radius"
      renderItem={renderRadiusItem}
      value={config.borderRadius}
    />
  );
};
