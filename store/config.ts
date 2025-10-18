import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

export type Config = {
  packageManager: PackageManager;
};

const configAtom = atomWithStorage<Config>("config", {
  packageManager: "pnpm",
});

export const useConfig = () => useAtom(configAtom);

const selectedCommandAtom = atom((get) => {
  const commands = {
    npm: "npm install",
    pnpm: "pnpm add",
    yarn: "yarn add",
    bun: "bun add",
  };

  const config = get(configAtom);

  return commands[config.packageManager];
});

export const useSelectedCommand = () => useAtom(selectedCommandAtom);
