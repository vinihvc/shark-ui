"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@registry/react/components/select";
import React from "react";
import { useHotKeys } from "@/hooks/use-hot-keys";
import {
  REGISTRY_FRAMEWORKS,
  type RegistryFramework,
} from "@/lib/registry-frameworks";
import { useConfig } from "@/store/config";
import { capitalize } from "@/utils/formatter";
import { ReactIcon } from "../icons/react";
import { SolidIcon } from "../icons/solid";

const collection = createListCollection({
  items: REGISTRY_FRAMEWORKS.map((framework) => ({
    value: framework,
    label: capitalize(framework),
  })),
});

const FRAMEWORK_ICONS = {
  react: ReactIcon,
  solid: SolidIcon,
};

export const FrameworkSwitcher = () => {
  const [config, setConfig] = useConfig();

  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelectFramework = (value: RegistryFramework) => {
    setConfig((prev) => ({
      ...prev,
      framework: value,
    }));
  };

  useHotKeys(["f", "F"], () => setIsOpen(true));

  return (
    <Select
      aria-label="Switch framework"
      collection={collection}
      onOpenChange={({ open }) => setIsOpen(open)}
      onValueChange={({ value }) =>
        handleSelectFramework(value[0] as RegistryFramework)
      }
      open={isOpen}
      value={[config.framework]}
    >
      <SelectTrigger className="w-max border-0 shadow-none **:data-[slot=select-trigger-actions]:hidden dark:bg-transparent">
        <SelectValue placeholder="Select a framework" />
      </SelectTrigger>
      <SelectContent>
        {collection.items.map((item) => {
          const Icon = FRAMEWORK_ICONS[item.value as RegistryFramework];

          return (
            <SelectItem className="capitalize" item={item} key={item.value}>
              <Icon />
              {item.value}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
