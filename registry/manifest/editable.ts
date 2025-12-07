import { SITE_CONFIG } from "@/config/site";
import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
	name: "editable",
	type: "registry:ui",
	dependencies,
	registryDependencies: [`${SITE_CONFIG.url}/r/input.json`],
};

export default manifest;
