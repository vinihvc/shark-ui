import type { BlockDefinition } from "@/lib/registry";
import { aiBlocks } from "./ai/_registry";
import { authenticationBlocks } from "./authentication/_registry";
import { dashboardBlocks } from "./dashboard/_registry";

export const BLOCKS = [
  ...authenticationBlocks,
  ...dashboardBlocks,
  ...aiBlocks,
] as readonly BlockDefinition[];
