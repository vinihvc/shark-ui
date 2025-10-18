import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { z } from "zod";

const componentMetadataSchema = z.object({
  name: z.string(),
  type: z.string(),
  description: z.string(),
  category: z.string(),
  tags: z.array(z.string()),
  dependencies: z.array(z.string()),
  registryDependencies: z.array(z.string()),
  files: z.array(
    z.object({
      name: z.string(),
      content: z.string(),
    })
  ),
  categories: z.array(z.string()),
  meta: z.object({
    category: z.string(),
    tags: z.array(z.string()),
    dependencies: z.array(z.string()),
  }),
});

const componentRegistrySchema = z.object({
  name: z.string(),
  version: z.string(),
  description: z.string(),
  url: z.string(),
  items: z.array(componentMetadataSchema),
});

type ComponentMetadata = z.infer<typeof componentMetadataSchema>;
type ComponentRegistry = z.infer<typeof componentRegistrySchema>;

const extractComponentMetadata = (
  sourceCode: string,
  componentName: string
): ComponentMetadata => {
  const metadata = {
    name: componentName,
    type: "components:ui",
    description: `A ${componentName} component built with Ark UI`,
    category: "ui",
    tags: [componentName],
    dependencies: ["@ark-ui/react"],
    registryDependencies: [],
    files: [
      {
        name: `${componentName}.tsx`,
        content: sourceCode,
      },
    ],
    categories: ["ui"],
    meta: {
      category: "ui",
      tags: [componentName],
      dependencies: ["@ark-ui/react"],
    },
  };

  return componentMetadataSchema.parse(metadata);
};

const ensureDirectoryExists = async (dirPath: string) => {
  try {
    await access(dirPath);
  } catch {
    await mkdir(dirPath, { recursive: true });
  }
};

const buildRegistry = async (framework = "react", component = "avatar") => {
  try {
    const filePath = join(
      process.cwd(),
      "registry",
      framework,
      "components",
      `${component}.tsx`
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
    const metadata = extractComponentMetadata(sourceCode, component);

    // Ensure public/r directory exists
    const publicRDir = join(process.cwd(), "public", "r");
    await ensureDirectoryExists(publicRDir);

    // Create individual component JSON file
    const componentFilePath = join(publicRDir, `${component}.json`);
    await writeFile(componentFilePath, JSON.stringify(metadata, null, 2));
    console.log(`✅ Generated ${component}.json`);

    // Update main registry.json
    const registryPath = join(process.cwd(), "registry.json");
    let registry: ComponentRegistry;

    try {
      const registryContent = await readFile(registryPath, "utf-8");
      const parsedRegistry = JSON.parse(registryContent);
      registry = componentRegistrySchema.parse(parsedRegistry);
    } catch {
      // Create new registry if it doesn't exist
      registry = {
        name: "shark-ui",
        version: "1.0.0",
        description: "shadcn components powered by ark-ui",
        url: "https://github.com/vinihvc/shark-ui",
        items: [],
      };
    }

    // Check if component already exists in registry
    const existingIndex = registry.items.findIndex(
      (item: ComponentMetadata) => item.name === component
    );

    if (existingIndex >= 0) {
      // Update existing component
      registry.items[existingIndex] = metadata;
      console.log(`🔄 Updated ${component} in registry`);
    } else {
      // Add new component
      registry.items.push(metadata);
      console.log(`➕ Added ${component} to registry`);
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

const processAllComponents = async (framework = "react") => {
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
      await buildRegistry(framework, componentName);
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
