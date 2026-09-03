import { access, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { SITE_CONFIG } from "../config/site";
import { getBlockRegistryArtifacts } from "../lib/blocks";
import { validateUniqueCompositionNames } from "../lib/compositions";
import type { RegistryItemType } from "../lib/registry";
import { getTemplateRegistryArtifacts } from "../lib/templates";
import { replaceRegistryImportsForCopy } from "../utils/formatter";

type RegistryKind = "component" | "hook" | "lib";
type SourceExt = "ts" | "tsx";

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
const SOURCE_EXTS: readonly SourceExt[] = ["tsx", "ts"];

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
  ext: SourceExt;
}

const buildMetadata = async (
  itemName: string,
  kind: RegistryKind,
  source?: SourceInput,
  framework = "react"
) => {
  const manifest = await loadManifest(itemName);
  const base = { $schema: SCHEMA, ...manifest };

  if (!source?.code.trim()) {
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

  const extraFiles = await Promise.all(
    (manifest.files ?? []).map(async (file) => ({
      ...file,
      content: replaceRegistryImportsForCopy(
        await readFile(join(CWD, file.path), "utf-8")
      ),
    }))
  );
  const primaryPath = `registry/${framework}/${subdir}/${itemName}.${source.ext}`;

  return {
    ...base,
    files: [
      {
        content: source.code,
        path: primaryPath,
        type: manifest.type,
      },
      ...extraFiles.filter((file) => file.path !== primaryPath),
    ],
  };
};

const writeArtifact = async (metadata: unknown, itemName: string) => {
  const filePath = join(PUBLIC_DIR, `${itemName}.json`);
  await writeFile(filePath, JSON.stringify(metadata, null, 2));
  console.log(`✅ Generated ${itemName}.json`);
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
      const code = replaceRegistryImportsForCopy(
        await readFile(join(dirPath, `${itemName}.${ext}`), "utf-8")
      );
      const metadata = await buildMetadata(
        itemName,
        kind,
        { code, ext },
        framework
      );
      await writeArtifact(metadata, itemName);
    })
  );

  console.log(`🎉 Successfully processed all ${chosen.size} ${label}!\n`);
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
  const names = (await readdir(PUBLIC_DIR)).filter((name) =>
    name.endsWith(".json")
  );

  const files = await Promise.all(
    names.map(async (name) => ({
      name,
      raw: await readFile(join(PUBLIC_DIR, name), "utf8"),
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
