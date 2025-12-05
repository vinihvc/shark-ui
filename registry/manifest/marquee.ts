import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react"];

const cssVars = {
	theme: {
		"--animate-marquee-x": "marqueeX 10s linear infinite",
		"--animate-marquee-y": "marqueeY 10s linear infinite",
	},
};

const css = {
	"@keyframes marqueeX":
		"from { transform: translateX(0); } to { transform: translateX(var(--marquee-translate)); }",
	"@keyframes marqueeY":
		"from { transform: translateY(0); } to { transform: translateY(var(--marquee-translate)); }",
};

const manifest: RegistryItemType = {
	name: "marquee",
	type: "registry:ui",
	dependencies,
	cssVars,
	css,
};

export default manifest;
