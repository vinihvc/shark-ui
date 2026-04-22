"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Tabs } from "@/registry/react/components/tabs";
import { type InstallationMethod, useConfig } from "@/store/config";

export const CodeTabs = (props: React.ComponentProps<typeof Tabs>) => {
  const { className, ...rest } = props;

  const [config, setConfig] = useConfig();

  const installationType = React.useMemo(
    () => config.installationMethod || "cli",
    [config]
  );

  return (
    <Tabs
      className={cn("relative mt-6 w-full", className)}
      onValueChange={({ value }) =>
        setConfig({
          ...config,
          installationMethod: value as InstallationMethod,
        })
      }
      value={installationType}
      {...rest}
    />
  );
};
