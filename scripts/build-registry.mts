import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import type { RegistryItemType } from "../lib/registry";

type RegistryKind = "component" | "hook";

const extractItemMetadata = async (
  framework: "react",
  itemName: string,
  sourceCode: string,
  kind: RegistryKind
) => {
  const manifestFilePath = join(
    process.cwd(),
    "registry",
    "manifest",
    `${itemName}.ts`
  );

  let manifestData: RegistryItemType;

  try {
    await access(manifestFilePath);

    const manifestUrl = pathToFileURL(manifestFilePath).href;
    const manifestModule = await import(manifestUrl);
    manifestData = manifestModule.default as RegistryItemType;
  } catch {
    throw new Error(`Manifest not found for ${itemName}`);
  }

  const subdir = kind === "hook" ? "hooks" : "components";
  const fileType =
    kind === "hook" ? ("registry:hook" as const) : ("registry:ui" as const);

  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    ...manifestData,
    files: [
      {
        path: `registry/${framework}/${subdir}/${itemName}.tsx`,
        content: sourceCode,
        type: fileType,
      },
    ],
  };
};

const ensureDirectoryExists = async (dirPath: string) => {
  try {
    await access(dirPath);
  } catch {
    await mkdir(dirPath, { recursive: true });
  }
};

const writeRegistryArtifact = async (
  metadata: Awaited<ReturnType<typeof extractItemMetadata>>,
  itemName: string
) => {
  const publicRDir = join(process.cwd(), "public", "r");
  await ensureDirectoryExists(publicRDir);

  const componentFilePath = join(publicRDir, `${itemName}.json`);
  await writeFile(componentFilePath, JSON.stringify(metadata, null, 2));
  console.log(`✅ Generated ${itemName}.json`);

  const registryPath = join(process.cwd(), "registry.json");
  let registry: { items: unknown[] };

  try {
    const registryContent = await readFile(registryPath, "utf-8");
    const parsedRegistry = JSON.parse(registryContent);
    registry = parsedRegistry as { items: unknown[] };
  } catch {
    throw new Error("Failed to read registry.json");
  }

  await writeFile(registryPath, JSON.stringify(registry, null, 2));
  console.log("✅ Updated registry.json");

  return metadata;
};

const buildRegistryItem = async (
  framework: "react",
  itemName: string,
  kind: RegistryKind
) => {
  try {
    const subdir = kind === "hook" ? "hooks" : "components";
    const filePath = join(
      process.cwd(),
      "registry",
      framework,
      subdir,
      `${itemName}.tsx`
    );

    try {
      await access(filePath);
    } catch {
      console.warn(`File not found: ${filePath}`);
      return null;
    }

    const sourceCode = await readFile(filePath, "utf-8");
    const metadata = await extractItemMetadata(
      framework,
      itemName,
      sourceCode,
      kind
    );

    return await writeRegistryArtifact(metadata, itemName);
  } catch (error) {
    console.error(`Failed to build registry item ${itemName}`, error);
    return null;
  }
};

const processAllComponents = async (framework: "react" = "react") => {
  try {
    const componentsDir = join(
      process.cwd(),
      "registry",
      framework,
      "components"
    );

    const { readdir } = await import("node:fs/promises");
    const files = await readdir(componentsDir);
    const componentFiles = files.filter((file) => file.endsWith(".tsx"));

    console.log(`Found ${componentFiles.length} components to process:`);

    for (const file of componentFiles) {
      const componentName = file.replace(".tsx", "");
      console.log(`\n📦 Processing ${componentName}...`);
      await buildRegistryItem("react", componentName, "component");
    }

    console.log(
      `\n🎉 Successfully processed all ${componentFiles.length} components!`
    );
  } catch (error) {
    console.error("Failed to process all components:", error);
  }
};

const processAllHooks = async (framework: "react" = "react") => {
  try {
    const hooksDir = join(process.cwd(), "registry", framework, "hooks");

    try {
      await access(hooksDir);
    } catch {
      console.log("No hooks directory; skipping hooks.");
      return;
    }

    const { readdir } = await import("node:fs/promises");
    const files = await readdir(hooksDir);
    const hookFiles = files.filter((file) => file.endsWith(".tsx"));

    console.log(`Found ${hookFiles.length} hooks to process:`);

    for (const file of hookFiles) {
      const hookName = file.replace(".tsx", "");
      console.log(`\n🪝 Processing ${hookName}...`);
      await buildRegistryItem("react", hookName, "hook");
    }

    console.log(`\n🎉 Successfully processed all ${hookFiles.length} hooks!`);
  } catch (error) {
    console.error("Failed to process all hooks:", error);
  }
};

const main = async () => {
  await processAllComponents();
  await processAllHooks();
};

main().catch(console.error);
