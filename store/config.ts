import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

export type ColorPalette = "default" | "blue";

export type Config = {
  colors: ColorPalette;
  packageManager: PackageManager;
};

const configAtom = atomWithStorage<Config>("config", {
  colors: "default",
  packageManager: "pnpm",
});

export const useConfig = () => useAtom(configAtom);
