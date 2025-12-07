import { SITE_CONFIG } from "@/config/site";
import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "tailwind-variants", "lucide-react"];

const manifest: RegistryItemType = {
	name: "sheet",
	type: "registry:ui",
	dependencies,
	registryDependencies: [
		`${SITE_CONFIG.url}/r/button.json`,
		`${SITE_CONFIG.url}/r/dialog.json`,
	],
};

export default manifest;
