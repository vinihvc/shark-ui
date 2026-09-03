import type { BlockDefinition } from "@/lib/registry";
import { aiBlocks } from "./ai/_registry";
import { authenticationBlocks } from "./authentication/_registry";
import { dashboardBlocks } from "./dashboard/_registry";
import { sidebarBlocks } from "./sidebar/_registry";

export const BLOCKS = [
  ...authenticationBlocks,
  ...dashboardBlocks,
  ...aiBlocks,
  ...sidebarBlocks,
] as readonly BlockDefinition[];
