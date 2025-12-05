import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import type { RegistryItemType } from "../lib/registry";

const extractComponentMetadata = async (
  framework: "react",
  componentName: string,
  sourceCode: string
) => {
  const manifestFilePath = join(
    process.cwd(),
    "registry",
    "manifest",
    `${componentName}.ts`
  );

  let manifestData: RegistryItemType;

  try {
    // Check if manifest file exists
    await access(manifestFilePath);

    // Dynamically import the TypeScript manifest file using file:// URL
    const manifestUrl = pathToFileURL(manifestFilePath).href;
    const manifestModule = await import(manifestUrl);
    manifestData = manifestModule.default as RegistryItemType;
  } catch {
    // If manifest doesn't exist, create a default one
    manifestData = {
      name: componentName,
      type: "registry:ui",
      dependencies: ["@ark-ui/react"],
    };
  }

  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    ...manifestData,
    files: [
      {
        path: `registry/${framework}/components/${componentName}.tsx`,
        content: sourceCode,
        type: "registry:ui",
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

const buildRegistry = async (
  framework: "react" = "react",
  componentName = "avatar"
) => {
  try {
    const filePath = join(
      process.cwd(),
      "registry",
      framework,
      "components",
      `${componentName}.tsx`
    );

    // Check if file exists before reading
    try {
      await access(filePath);
    } catch {
      console.warn(`File not found: ${filePath}`);
      return null;
    }

    // Read the file content
    const sourceCode = await readFile(filePath, "utf-8");

    // Extract metadata from source code
    const metadata = await extractComponentMetadata(
      framework,
      componentName,
      sourceCode
    );

    // Ensure public/r directory exists
    const publicRDir = join(process.cwd(), "public", "r");
    await ensureDirectoryExists(publicRDir);

    // Create individual component JSON file
    const componentFilePath = join(publicRDir, `${componentName}.json`);
    await writeFile(componentFilePath, JSON.stringify(metadata, null, 2));
    console.log(`✅ Generated ${componentName}.json`);

    // Update main registry.json
    const registryPath = join(process.cwd(), "registry.json");
    let registry: { items: unknown[] };

    try {
      const registryContent = await readFile(registryPath, "utf-8");
      const parsedRegistry = JSON.parse(registryContent);
      registry = parsedRegistry as { items: unknown[] };
    } catch {
      throw new Error("Failed to read registry.json");
    }

    // Write updated registry
    await writeFile(registryPath, JSON.stringify(registry, null, 2));
    console.log("✅ Updated registry.json");

    return metadata;
  } catch (error) {
    console.error("Failed to build registry", error);
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

    // Get all .tsx files in the components directory
    const { readdir } = await import("node:fs/promises");
    const files = await readdir(componentsDir);
    const componentFiles = files.filter((file) => file.endsWith(".tsx"));

    console.log(`Found ${componentFiles.length} components to process:`);

    for (const file of componentFiles) {
      const componentName = file.replace(".tsx", "");
      console.log(`\n📦 Processing ${componentName}...`);
      await buildRegistry("react", componentName);
    }

    console.log(
      `\n🎉 Successfully processed all ${componentFiles.length} components!`
    );
  } catch (error) {
    console.error("Failed to process all components:", error);
  }
};

// Execute the function - you can choose to process a single component or all components
// For single component: buildRegistry("react", "avatar").catch(console.error);
// For all components: processAllComponents("react").catch(console.error);

// Default: process all components
processAllComponents().catch(console.error);
