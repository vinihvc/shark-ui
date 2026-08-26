import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

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

export type BorderRadius = "none" | "xs" | "sm" | "md" | "lg";

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

export type InstallationMethod = "cli" | "manual";

export const DEFAULT_PRIMARY_COLOR = "neutral";
export const DEFAULT_GRAY_COLOR = "neutral";
export const DEFAULT_BORDER_RADIUS = "md";
export const DEFAULT_PACKAGE_MANAGER = "pnpm";
export const DEFAULT_INSTALLATION_METHOD = "cli";

export interface Config {
  borderRadius: BorderRadius;
  grayColor: GrayColor;
  installationMethod: InstallationMethod;
  packageManager: PackageManager;
  primaryColor: PrimaryColor;
}

export const configAtom = atomWithStorage<Config>("config", {
  borderRadius: DEFAULT_BORDER_RADIUS,
  grayColor: DEFAULT_GRAY_COLOR,
  installationMethod: DEFAULT_INSTALLATION_METHOD,
  packageManager: DEFAULT_PACKAGE_MANAGER,
  primaryColor: DEFAULT_PRIMARY_COLOR,
});

export const useConfig = () => useAtom(configAtom);
