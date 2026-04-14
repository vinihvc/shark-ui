import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import type { RegistryItemType } from "../lib/registry";

const REGISTRY_BUILD_FRAMEWORKS = ["react", "solid"] as const;
type RegistryBuildFramework = (typeof REGISTRY_BUILD_FRAMEWORKS)[number];

const REGISTRY_PUBLIC_SEGMENT: Record<RegistryBuildFramework, string> = {
  react: "r",
  solid: "s",
};

const REGISTRY_SOURCE_EXTENSION: Record<RegistryBuildFramework, string> = {
  react: ".tsx",
  solid: ".tsx",
};

type RegistryKind = "component" | "hook";

const extractItemMetadata = async (
  framework: RegistryBuildFramework,
  itemName: string,
  sourceCode: string,
  kind: RegistryKind,
  sourceExtension: string
) => {
  const manifestFilePath = join(
    process.cwd(),
    "registry",
    "manifest",
    framework,
    `${itemName}.ts`
  );

  let manifestData: RegistryItemType;

  try {
    await access(manifestFilePath);

    const manifestUrl = pathToFileURL(manifestFilePath).href;
    const manifestModule = await import(manifestUrl);
    manifestData = manifestModule.default as RegistryItemType;
  } catch {
    throw new Error(`Manifest not found for ${framework}/${itemName}`);
  }

  const subdir = kind === "hook" ? "hooks" : "components";
  const fileType =
    kind === "hook" ? ("registry:hook" as const) : ("registry:ui" as const);

  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    ...manifestData,
    files: [
      {
        path: `registry/${framework}/${subdir}/${itemName}${sourceExtension}`,
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
  framework: RegistryBuildFramework,
  itemName: string
) => {
  const segment = REGISTRY_PUBLIC_SEGMENT[framework];
  const publicDir = join(process.cwd(), "public", segment);
  await ensureDirectoryExists(publicDir);

  const outPath = join(publicDir, `${itemName}.json`);
  await writeFile(outPath, JSON.stringify(metadata, null, 2));
  console.log(`✅ Generated ${segment}/${itemName}.json`);

  return metadata;
};

const buildRegistryItem = async (
  framework: RegistryBuildFramework,
  itemName: string,
  kind: RegistryKind
) => {
  try {
    const subdir = kind === "hook" ? "hooks" : "components";
    const ext = REGISTRY_SOURCE_EXTENSION[framework];
    const filePath = join(
      process.cwd(),
      "registry",
      framework,
      subdir,
      `${itemName}${ext}`
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
      kind,
      ext
    );

    return await writeRegistryArtifact(metadata, framework, itemName);
  } catch (error) {
    console.error(
      `Failed to build registry item ${framework}/${itemName}`,
      error
    );
    return null;
  }
};

const processAllComponents = async (framework: RegistryBuildFramework) => {
  try {
    const componentsDir = join(
      process.cwd(),
      "registry",
      framework,
      "components"
    );

    try {
      await access(componentsDir);
    } catch {
      console.log(`No components directory for ${framework}; skipping.`);
      return;
    }

    const { readdir } = await import("node:fs/promises");
    const files = await readdir(componentsDir);
    const ext = REGISTRY_SOURCE_EXTENSION[framework];
    const componentFiles = files.filter((file) => file.endsWith(ext));

    console.log(
      `Found ${componentFiles.length} ${framework} components to process:`
    );

    for (const file of componentFiles) {
      const componentName = file.replace(ext, "");
      console.log(`\n📦 [${framework}] Processing ${componentName}...`);
      await buildRegistryItem(framework, componentName, "component");
    }

    console.log(
      `\n🎉 Successfully processed all ${componentFiles.length} ${framework} components!`
    );
  } catch (error) {
    console.error(`Failed to process ${framework} components:`, error);
  }
};

const processAllHooks = async (framework: RegistryBuildFramework) => {
  try {
    const hooksDir = join(process.cwd(), "registry", framework, "hooks");

    try {
      await access(hooksDir);
    } catch {
      return;
    }

    const { readdir } = await import("node:fs/promises");
    const files = await readdir(hooksDir);
    const ext = REGISTRY_SOURCE_EXTENSION[framework];
    const hookFiles = files.filter((file) => file.endsWith(ext));

    if (hookFiles.length === 0) {
      return;
    }

    console.log(`Found ${hookFiles.length} ${framework} hooks to process:`);

    for (const file of hookFiles) {
      const hookName = file.replace(ext, "");
      console.log(`\n🪝 [${framework}] Processing ${hookName}...`);
      await buildRegistryItem(framework, hookName, "hook");
    }

    console.log(
      `\n🎉 Successfully processed all ${hookFiles.length} ${framework} hooks!`
    );
  } catch (error) {
    console.error(`Failed to process ${framework} hooks:`, error);
  }
};

const main = async () => {
  for (const framework of REGISTRY_BUILD_FRAMEWORKS) {
    console.log(`\n========== Framework: ${framework} ==========`);
    await processAllComponents(framework);
    await processAllHooks(framework);
  }
};

main().catch(console.error);
