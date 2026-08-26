import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["clsx", "tailwind-merge"];

const manifest: RegistryItemType = {
  dependencies,
  name: "utils",
  type: "registry:lib",
};

export default manifest;
