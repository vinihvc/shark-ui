import { readFile } from "node:fs/promises";
import { dirname, extname, join, posix, resolve } from "node:path";
import { cache } from "react";
import { highlightCode } from "@/lib/highlight-code";
import type {
  CompositionArtifact,
  CompositionArtifactFile,
  CompositionCategory,
  CompositionDefinition,
  CompositionFileDefinition,
  CompositionFileTreeNode,
  PublishedComposition,
  PublishedCompositionFile,
} from "@/lib/registry";
import { replaceRegistryImportsForCopy } from "@/utils/formatter";

const SOURCE_EXTENSIONS = [".tsx", ".ts", ".jsx", ".js", ".json"] as const;
const RELATIVE_IMPORT_PATTERN = /(from\s+["']|import\s+["'])(\.[^"']+)(["'])/g;
const REGISTRY_COMPONENT_IMPORT_PATTERN =
  /@\/registry\/react\/components\/([a-z0-9-]+)/g;
const CODE_EXTENSION_PATTERN = /\.(?:tsx?|jsx?)$/;

interface CompositionCatalogOptions<Definition extends CompositionDefinition> {
  categories: readonly CompositionCategory[];
  definitions: readonly Definition[];
  label: "blocks" | "templates";
  sourceDirectory: "blocks" | "templates";
}

const stripCodeExtension = (path: string) =>
  path.replace(CODE_EXTENSION_PATTERN, "");

const toConsumerImport = (target: string) => {
  if (target.startsWith("@components/")) {
    return stripCodeExtension(target.replace("@components/", "@/components/"));
  }
  if (target.startsWith("@ui/")) {
    return stripCodeExtension(target.replace("@ui/", "@/components/ui/"));
  }
  if (target.startsWith("@lib/")) {
    return stripCodeExtension(target.replace("@lib/", "@/lib/"));
  }
  if (target.startsWith("@hooks/")) {
    return stripCodeExtension(target.replace("@hooks/", "@/hooks/"));
  }
  return null;
};

const getConsumerImport = (
  currentFile: CompositionFileDefinition,
  importedFile: CompositionFileDefinition
) => {
  const aliasedTarget = importedFile.target
    ? toConsumerImport(importedFile.target)
    : null;
  if (aliasedTarget) {
    return aliasedTarget;
  }
  if (!(currentFile.target && importedFile.target)) {
    return null;
  }

  const relativeTarget = posix.relative(
    posix.dirname(currentFile.target),
    importedFile.target
  );
  const normalized = relativeTarget.startsWith(".")
    ? relativeTarget
    : `./${relativeTarget}`;
  return stripCodeExtension(normalized);
};

const getLanguage = (path: string) => extname(path).slice(1) || "tsx";

export const getCompositionFileDisplayPath = (
  file: CompositionFileDefinition
) => {
  if (!file.target) {
    return file.path;
  }
  return file.target
    .replace("@components/", "components/")
    .replace("@ui/", "components/ui/")
    .replace("@lib/", "lib/")
    .replace("@hooks/", "hooks/");
};

export const createCompositionFileTree = (
  files: CompositionFileDefinition[]
) => {
  const root: CompositionFileTreeNode[] = [];
  for (const file of files) {
    const path = getCompositionFileDisplayPath(file);
    const parts = path.split("/");
    let level = root;

    for (const [index, part] of parts.entries()) {
      const isFile = index === parts.length - 1;
      let node = level.find((entry) => entry.name === part);
      if (!node) {
        node = isFile ? { name: part, path } : { children: [], name: part };
        level.push(node);
      }
      if (!isFile) {
        node.children ??= [];
        level = node.children;
      }
    }
  }
  return root;
};

export const validateUniqueCompositionNames = (
  collections: readonly (readonly Pick<CompositionDefinition, "name">[])[]
) => {
  const names = new Set<string>();
  for (const collection of collections) {
    for (const composition of collection) {
      if (names.has(composition.name)) {
        throw new Error(
          `[registry] duplicate public composition name: ${composition.name}.`
        );
      }
      names.add(composition.name);
    }
  }
};

export const createCompositionCatalog = <
  Definition extends CompositionDefinition,
>({
  categories,
  definitions,
  label,
  sourceDirectory,
}: CompositionCatalogOptions<Definition>) => {
  const toSourcePath = (
    composition: CompositionDefinition,
    file: CompositionFileDefinition
  ) =>
    join(
      process.cwd(),
      "registry",
      "react",
      sourceDirectory,
      composition.category,
      composition.name,
      file.source
    );

  const resolveRelativeFile = (
    composition: CompositionDefinition,
    currentFile: CompositionFileDefinition,
    specifier: string
  ) => {
    const sourceRoot = join(
      process.cwd(),
      "registry",
      "react",
      sourceDirectory,
      composition.category,
      composition.name
    );
    const base = resolve(sourceRoot, dirname(currentFile.source), specifier);
    const candidates = [
      base,
      ...SOURCE_EXTENSIONS.map((extension) => `${base}${extension}`),
      ...SOURCE_EXTENSIONS.map((extension) => join(base, `index${extension}`)),
    ];
    return composition.files.find((candidate) =>
      candidates.includes(toSourcePath(composition, candidate))
    );
  };

  const prepareFileContent = (
    composition: CompositionDefinition,
    file: CompositionFileDefinition,
    source: string
  ) => {
    const withConsumerImports = source.replace(
      RELATIVE_IMPORT_PATTERN,
      (match, prefix: string, specifier: string, suffix: string) => {
        const importedFile = resolveRelativeFile(composition, file, specifier);
        if (!importedFile) {
          return match;
        }
        const consumerImport = getConsumerImport(file, importedFile);
        return consumerImport ? `${prefix}${consumerImport}${suffix}` : match;
      }
    );
    return replaceRegistryImportsForCopy(withConsumerImports);
  };

  const loadPreparedFiles = async (
    composition: CompositionDefinition
  ): Promise<CompositionArtifactFile[]> => {
    const knownCategory = categories.some(
      (category) => category.slug === composition.category
    );
    if (!knownCategory) {
      throw new Error(
        `[${label}] ${composition.name}: unknown category "${composition.category}".`
      );
    }

    const pageFiles = composition.files.filter(
      (file) => file.type === "registry:page"
    );
    if (pageFiles.length !== 1) {
      throw new Error(
        `[${label}] ${composition.name}: expected exactly one registry:page file.`
      );
    }

    const sourcePaths = new Set(composition.files.map((file) => file.source));
    if (sourcePaths.size !== composition.files.length) {
      throw new Error(`[${label}] ${composition.name}: duplicate source file.`);
    }

    return Promise.all(
      composition.files.map(async (file): Promise<CompositionArtifactFile> => {
        if (
          (file.type === "registry:page" || file.type === "registry:file") &&
          !file.target
        ) {
          throw new Error(
            `[${label}] ${composition.name}: ${file.type} ${file.source} requires a target.`
          );
        }

        let source: string;
        try {
          source = await readFile(toSourcePath(composition, file), "utf8");
        } catch (error) {
          throw new Error(
            `[${label}] ${composition.name}: source file not found: ${file.source}.`,
            { cause: error }
          );
        }

        for (const match of source.matchAll(RELATIVE_IMPORT_PATTERN)) {
          const [, , specifier] = match;
          if (specifier && !resolveRelativeFile(composition, file, specifier)) {
            throw new Error(
              `[${label}] ${composition.name}: relative import "${specifier}" from ${file.source} is missing from files.`
            );
          }
        }

        for (const match of source.matchAll(
          REGISTRY_COMPONENT_IMPORT_PATTERN
        )) {
          const [, dependency] = match;
          const declared = composition.registryDependencies.some((entry) =>
            entry.endsWith(`/r/${dependency}.json`)
          );
          if (!declared) {
            throw new Error(
              `[${label}] ${composition.name}: @shark/${dependency} is imported by ${file.source} but not declared as a registry dependency.`
            );
          }
        }

        const content = prepareFileContent(composition, file, source);
        return {
          ...file,
          content,
          displayPath: getCompositionFileDisplayPath(file),
        };
      })
    );
  };

  const assertUniqueNames = (items: readonly CompositionDefinition[]) => {
    const names = new Set<string>();
    for (const composition of items) {
      if (names.has(composition.name)) {
        throw new Error(
          `[${label}] duplicate composition name: ${composition.name}.`
        );
      }
      names.add(composition.name);
    }
  };

  const validateDefinitions = async (
    items: readonly CompositionDefinition[] = definitions
  ) => {
    assertUniqueNames(items);
    await Promise.all(items.map((item) => loadPreparedFiles(item)));
  };

  const toPublishedWithoutPreview = (
    composition: CompositionDefinition,
    files: CompositionArtifactFile[]
  ): CompositionArtifact => {
    const { preview: _preview, ...published } = composition;
    return { ...published, files };
  };

  const loadPublishedComposition = cache(
    async (
      composition: CompositionDefinition
    ): Promise<PublishedComposition> => {
      const prepared = await loadPreparedFiles(composition);
      const files = await Promise.all(
        prepared.map(
          async (file): Promise<PublishedCompositionFile> => ({
            ...file,
            highlightedContent: await highlightCode(
              file.content,
              getLanguage(file.path)
            ),
          })
        )
      );
      return { ...toPublishedWithoutPreview(composition, prepared), files };
    }
  );

  const sortCompositions = <
    Item extends { category: string; meta: { order: number } },
  >(
    items: Item[]
  ) =>
    items.toSorted((a, b) => {
      const categoryA = categories.find(
        (category) => category.slug === a.category
      );
      const categoryB = categories.find(
        (category) => category.slug === b.category
      );
      return (
        (categoryA?.order ?? 999) - (categoryB?.order ?? 999) ||
        a.meta.order - b.meta.order
      );
    });

  const getCompositionArtifacts = cache(async () => {
    assertUniqueNames(definitions);
    const compositions = await Promise.all(
      definitions.map(async (composition) =>
        toPublishedWithoutPreview(
          composition,
          await loadPreparedFiles(composition)
        )
      )
    );
    return sortCompositions(compositions);
  });

  const getPublishedCompositions = cache(async () => {
    assertUniqueNames(definitions);
    const compositions = await Promise.all(
      definitions.map(loadPublishedComposition)
    );
    return sortCompositions(compositions);
  });

  const getPublishedComposition = cache((category: string, name: string) => {
    const composition = definitions.find(
      (item) => item.category === category && item.name === name
    );
    return composition ? loadPublishedComposition(composition) : null;
  });

  const getDefinition = (category: string, name: string) =>
    definitions.find(
      (composition) =>
        composition.category === category && composition.name === name
    ) ?? null;

  return {
    getCompositionArtifacts,
    getDefinition,
    getPublishedComposition,
    getPublishedCompositions,
    validateDefinitions,
  };
};
