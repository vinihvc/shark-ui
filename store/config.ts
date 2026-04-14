import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import type { RegistryFramework } from "@/lib/registry-frameworks";

export type PrimaryColor =
  | "neutral"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"
  | "pink"
  | "rose";

export type GrayColor =
  | "neutral"
  | "slate"
  | "gray"
  | "zinc"
  | "stone"
  | "mauve"
  | "olive"
  | "mist"
  | "taupe";

export type BorderRadius = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

export type InstallationMethod = "cli" | "manual";

export const DEFAULT_PRIMARY_COLOR = "neutral";
export const DEFAULT_GRAY_COLOR = "neutral";
export const DEFAULT_BORDER_RADIUS = "md";
export const DEFAULT_PACKAGE_MANAGER = "pnpm";
export const DEFAULT_INSTALLATION_METHOD = "cli";
export const DEFAULT_FRAMEWORK = "react";

export interface Config {
  borderRadius: BorderRadius;
  framework: RegistryFramework;
  grayColor: GrayColor;
  installationMethod: InstallationMethod;
  packageManager: PackageManager;
  primaryColor: PrimaryColor;
}

export const configAtom = atomWithStorage<Config>("config", {
  primaryColor: DEFAULT_PRIMARY_COLOR,
  grayColor: DEFAULT_GRAY_COLOR,
  borderRadius: DEFAULT_BORDER_RADIUS,
  packageManager: DEFAULT_PACKAGE_MANAGER,
  installationMethod: DEFAULT_INSTALLATION_METHOD,
  framework: DEFAULT_FRAMEWORK,
});

export const useConfig = () => useAtom(configAtom);
