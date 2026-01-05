import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type PrimaryColor =
  | "default"
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

export type GrayColor = "neutral" | "slate" | "gray" | "zinc" | "stone";

export type BorderRadius = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

export type InstallationMethod = "cli" | "manual";

export const DEFAULT_PRIMARY_COLOR = "default";
export const DEFAULT_GRAY_COLOR = "neutral";
export const DEFAULT_BORDER_RADIUS = "sm";
export const DEFAULT_PACKAGE_MANAGER = "pnpm";
export const DEFAULT_INSTALLATION_METHOD = "cli";

export interface Config {
  primaryColor: PrimaryColor;
  grayColor: GrayColor;
  borderRadius: BorderRadius;
  packageManager: PackageManager;
  installationMethod: InstallationMethod;
}

const configAtom = atomWithStorage<Config>("config", {
  primaryColor: DEFAULT_PRIMARY_COLOR,
  grayColor: DEFAULT_GRAY_COLOR,
  borderRadius: DEFAULT_BORDER_RADIUS,
  packageManager: DEFAULT_PACKAGE_MANAGER,
  installationMethod: DEFAULT_INSTALLATION_METHOD,
});

export const useConfig = () => useAtom(configAtom);
