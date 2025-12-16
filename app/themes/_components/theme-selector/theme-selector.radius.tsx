"use client";

import { createListCollection } from "@ark-ui/react";
import { BORDER_RADIUS } from "@/lib/themes";
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
  type BorderRadius,
  DEFAULT_BORDER_RADIUS,
  useConfig,
} from "@/store/config";

export const ThemeSelectorRadius = () => {
  const collection = createListCollection({
    items: BORDER_RADIUS,
  });

  const [config, setConfig] = useConfig();

  return (
    <Field>
      <FieldLabel>Radius</FieldLabel>
      <FieldInput>
        <Select
          collection={collection}
          onValueChange={({ value }) =>
            setConfig({ ...config, borderRadius: value[0] as BorderRadius })
          }
          value={[config.borderRadius]}
        >
          <SelectTrigger className="w-full">
            <SelectValueText placeholder="Select a radius" />
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
      </FieldInput>
    </Field>
  );
};
