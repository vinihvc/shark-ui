import { SITE_CONFIG } from "@/config/site";
import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
	name: "toggle",
	type: "registry:ui",
	dependencies,
	registryDependencies: [`${SITE_CONFIG.url}/r/button.json`],
};

export default manifest;
