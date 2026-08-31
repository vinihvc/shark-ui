import { access, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { pathToFileURL } from "node:url";
import { SITE_CONFIG } from "../config/site";
import { getBlockRegistryArtifacts } from "../lib/blocks";
import { validateUniqueCompositionNames } from "../lib/compositions";
import type { RegistryItemType } from "../lib/registry";
import { getTemplateRegistryArtifacts } from "../lib/templates";
import {
  FRAMEWORKS,
  type RegistryComponentDefinition,
  type RegistryFramework,
  registryDefinitions,
} from "../registry/definitions";

type RegistryKind = "component" | "hook" | "lib";
type SourceExt = "svelte" | "ts" | "tsx" | "vue";

interface KindConfig {
  emoji: string;
  label: string;
  manifestType: string;
  subdir: string;
}

const SCHEMA = "https://ui.shadcn.com/schema/registry-item.json";
const CWD = process.cwd();
const PUBLIC_DIR = join(CWD, "public", "r");
const TRAILING_SLASH = /\/$/;
const LOCALHOST_RE = /localhost|127\.0\.0\.1/i;

/** Source extensions in priority order (first wins on ambiguity). */
const SOURCE_EXTS: readonly SourceExt[] = ["tsx", "ts", "vue", "svelte"];
const definitionByName = new Map<string, RegistryComponentDefinition>(
  registryDefinitions.map((definition) => [definition.name, definition])
);

const KINDS = {
  component: {
    emoji: "📦",
    label: "components",
    manifestType: "registry:ui",
    subdir: "components",
  },
  hook: {
    emoji: "🪝",
    label: "hooks",
    manifestType: "registry:hook",
    subdir: "hooks",
  },
  lib: {
    emoji: "📚",
    label: "libs",
    manifestType: "registry:lib",
    subdir: "lib",
  },
} as const satisfies Record<RegistryKind, KindConfig>;

// Cache the in-flight promise so concurrent callers dedupe automatically.
const manifestCache = new Map<string, Promise<RegistryItemType>>();

const loadManifest = (itemName: string): Promise<RegistryItemType> => {
  const cached = manifestCache.get(itemName);
  if (cached) {
    return cached;
  }

  const pending = (async () => {
    const path = join(CWD, "registry", "manifest", `${itemName}.ts`);
    try {
      const mod = await import(pathToFileURL(path).href);
      return mod.default as RegistryItemType;
    } catch (error) {
      throw new Error(`Manifest not found for ${itemName}`, { cause: error });
    }
  })();

  manifestCache.set(itemName, pending);
  return pending;
};

interface SourceInput {
  code: string;
  path: string;
}

const buildMetadata = async (
  itemName: string,
  kind: RegistryKind,
  sources: readonly SourceInput[] = [],
  framework: RegistryFramework = "react",
  frameworkRegistry = false
) => {
  const manifest = await loadManifest(itemName);
  const definition = definitionByName.get(itemName);
  const frameworkOverrides =
    frameworkRegistry && definition
      ? {
          dependencies: [
            ...definition.dependencies.common,
            ...definition.dependencies.frameworks[framework],
          ],
          meta: {
            ...(manifest.meta ?? {}),
            framework,
            status: definition.adapters[framework].status,
          },
          registryDependencies: definition.dependencies.registry[framework].map(
            (dependency) =>
              `${SITE_CONFIG.url.replace(TRAILING_SLASH, "")}/r/${framework}/${dependency}.json`
          ),
        }
      : {};
  const base = { $schema: SCHEMA, ...manifest, ...frameworkOverrides };

  if (sources.length === 0 || sources.every(({ code }) => !code.trim())) {
    console.warn(
      `[build-registry] ${itemName}: manifest type is "${manifest.type}" — skipping embedded`
    );
    return base;
  }

  const { manifestType, subdir } = KINDS[kind];

  if (manifest.type !== manifestType) {
    console.warn(
      `[build-registry] ${itemName}: kind="${kind}" expects manifest type "${manifestType}" but got "${manifest.type}" — skipping embedded files.`
    );
    return base;
  }

  return {
    ...base,
    files: sources.map((source) => ({
      content: source.code,
      path: `registry/${framework}/${subdir}/${source.path}`,
      type: manifest.type,
    })),
  };
};

const writeArtifact = async (
  metadata: unknown,
  itemName: string,
  framework?: RegistryFramework
) => {
  const directory = framework ? join(PUBLIC_DIR, framework) : PUBLIC_DIR;
  await mkdir(directory, { recursive: true });
  const filePath = join(directory, `${itemName}.json`);
  await writeFile(filePath, JSON.stringify(metadata, null, 2));
  console.log(
    `✅ Generated ${framework ? `${framework}/` : ""}${itemName}.json`
  );
};

/** Pick the best source file per item, honoring SOURCE_EXTS priority. */
const pickSourceFiles = (files: string[]) => {
  const chosen = new Map<string, SourceExt>();

  for (const file of files) {
    for (let i = 0; i < SOURCE_EXTS.length; i += 1) {
      const ext = SOURCE_EXTS[i];
      const suffix = `.${ext}`;
      if (!file.endsWith(suffix)) {
        continue;
      }

      const name = file.slice(0, -suffix.length);
      const existing = chosen.get(name);
      if (existing === undefined || i < SOURCE_EXTS.indexOf(existing)) {
        chosen.set(name, ext);
      }
      break;
    }
  }

  return chosen;
};

const processKind = async (kind: RegistryKind, framework = "react") => {
  const { subdir, label, emoji } = KINDS[kind];

  const dirPath = join(CWD, "registry", framework, subdir);

  try {
    await access(dirPath);
  } catch {
    console.log(`No ${subdir} directory; skipping ${label}.`);
    return;
  }

  const chosen = pickSourceFiles(await readdir(dirPath));
  console.log(`Found ${chosen.size} ${label} to process:`);

  await Promise.all(
    Array.from(chosen, async ([itemName, ext]) => {
      console.log(`${emoji} Processing ${itemName}...`);
      const code = await readFile(join(dirPath, `${itemName}.${ext}`), "utf-8");
      const sources: SourceInput[] = [{ code, path: `${itemName}.${ext}` }];
      if (kind === "component" && definitionByName.has(itemName)) {
        const contractPath = join(dirPath, "_shark", `${itemName}.contract.ts`);
        sources.push({
          code: await readFile(contractPath, "utf8"),
          path: `_shark/${itemName}.contract.ts`,
        });
      }
      const metadata = await buildMetadata(
        itemName,
        kind,
        sources,
        framework as RegistryFramework
      );
      await writeArtifact(metadata, itemName);
      if (framework === "react") {
        const frameworkMetadata = await buildMetadata(
          itemName,
          kind,
          sources,
          "react",
          true
        );
        await writeArtifact(frameworkMetadata, itemName, "react");
      }
    })
  );

  console.log(`🎉 Successfully processed all ${chosen.size} ${label}!\n`);
};

const processFrameworkComponents = async (framework: RegistryFramework) => {
  if (framework === "react") {
    return;
  }
  const componentRoot = join(CWD, "registry", framework, "components");
  const definitions = registryDefinitions.filter(
    (definition) => definition.adapters[framework].status !== "unsupported"
  );
  console.log(
    `Found ${definitions.length} ${framework} pilot components to process:`
  );

  await Promise.all(
    definitions.map(async (definition) => {
      const adapter = definition.adapters[framework];
      const sourcePaths = [
        ...adapter.sources,
        `_shark/${definition.name}.contract.ts`,
      ];
      const sources = await Promise.all(
        sourcePaths.map(async (path) => ({
          code: await readFile(join(componentRoot, path), "utf8"),
          path,
        }))
      );
      const metadata = await buildMetadata(
        definition.name,
        "component",
        sources,
        framework,
        true
      );
      await writeArtifact(metadata, definition.name, framework);
    })
  );
};

const processStandaloneManifests = async (itemNames: string[]) => {
  await Promise.all(
    itemNames.map(async (itemName) => {
      console.log(`📦 Processing standalone manifest ${itemName}...`);
      const manifest = await loadManifest(itemName);
      await writeArtifact({ $schema: SCHEMA, ...manifest }, itemName);
    })
  );
};

const processCompositions = async () => {
  const [blocks, templates] = await Promise.all([
    getBlockRegistryArtifacts(),
    getTemplateRegistryArtifacts(),
  ]);
  const groups = [
    { emoji: "🧱", items: blocks, label: "blocks" },
    { emoji: "🖥️", items: templates, label: "templates" },
  ] as const;
  validateUniqueCompositionNames(groups.map(({ items }) => items));

  await Promise.all(
    groups.map(async ({ emoji, items, label }) => {
      console.log(`Found ${items.length} ${label} to process:`);
      await Promise.all(
        items.map(async (composition) => {
          console.log(`${emoji} Processing ${composition.name}...`);
          const metadata = {
            $schema: SCHEMA,
            categories: [composition.category],
            dependencies: composition.dependencies ?? [],
            description: composition.description,
            files: composition.files.map(({ content, path, target, type }) => ({
              content,
              path,
              target,
              type,
            })),
            meta: composition.meta,
            name: composition.name,
            registryDependencies: composition.registryDependencies,
            title: composition.title,
            type: composition.type,
          };

          await writeArtifact(metadata, composition.name);
        })
      );
      console.log(`🎉 Successfully processed all ${items.length} ${label}!\n`);
    })
  );
};

const main = async () => {
  await mkdir(PUBLIC_DIR, { recursive: true });

  // generate registry for all kinds
  await Promise.all(
    (["component", "hook", "lib"] as const).map((kind) => processKind(kind))
  );
  await Promise.all(FRAMEWORKS.map(processFrameworkComponents));

  await processCompositions();

  await processStandaloneManifests([
    "ui",
    "style",
    "hitbox",
    "shimmer",
    "chat",
  ]);

  await assertPublishedRegistryUrls();
};

const assertPublishedRegistryUrls = async () => {
  const siteOrigin = SITE_CONFIG.url.replace(TRAILING_SLASH, "");
  const listJsonFiles = async (directory: string): Promise<string[]> => {
    const entries = await readdir(directory, { withFileTypes: true });
    const nested = await Promise.all(
      entries.map((entry) => {
        const path = join(directory, entry.name);
        if (entry.isDirectory()) {
          return listJsonFiles(path);
        }
        return entry.name.endsWith(".json") ? [path] : [];
      })
    );
    return nested.flat();
  };
  const names = await listJsonFiles(PUBLIC_DIR);

  const files = await Promise.all(
    names.map(async (name) => ({
      name: relative(PUBLIC_DIR, name),
      raw: await readFile(name, "utf8"),
    }))
  );

  for (const { name, raw } of files) {
    if (LOCALHOST_RE.test(raw)) {
      throw new Error(
        `localhost URL found in public/r/${name}. Registry artifacts must use ${siteOrigin}.`
      );
    }

    const parsed: unknown = JSON.parse(raw);
    if (
      typeof parsed !== "object" ||
      parsed === null ||
      !("registryDependencies" in parsed)
    ) {
      continue;
    }

    const { registryDependencies } = parsed;
    if (!Array.isArray(registryDependencies)) {
      continue;
    }

    for (const dep of registryDependencies) {
      if (typeof dep !== "string" || !dep.startsWith("http")) {
        continue;
      }
      if (!dep.startsWith(`${siteOrigin}/`)) {
        throw new Error(
          `public/r/${name}: registryDependency is not under ${siteOrigin}/`
        );
      }
    }
  }
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
