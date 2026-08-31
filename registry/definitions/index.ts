import button from "./button";
import checkbox from "./checkbox";
import dialog from "./dialog";
import sidebar from "./sidebar";

export const registryDefinitions = [button, checkbox, dialog, sidebar] as const;

export type {
  AdapterStatus,
  RegistryComponentDefinition,
  RegistryFramework,
} from "./schema";
export { FRAMEWORKS } from "./schema";
