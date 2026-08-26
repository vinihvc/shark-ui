import type { TemplateDefinition } from "@/lib/registry";
import { aiTemplates } from "./ai/_registry";

export const TEMPLATES = [...aiTemplates] as readonly TemplateDefinition[];
