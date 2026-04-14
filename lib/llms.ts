import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { InferPageType } from "fumadocs-core/source";
import { REGISTRY_EXAMPLES_PATH } from "@/config/constants";
import { SITE_CONFIG } from "@/config/site";
import { source } from "@/lib/fumadocs";

export type LLMPage = InferPageType<typeof source>;

export const getLLMFullText = async (page: LLMPage) => {
  const processed = await page.data.getText("processed");

  return `# ${page.data.title} (${page.url})

${processed}`;
};

export const getLLMText = (page: LLMPage) => {
  return `- [${page.data.title}](${page.url}): ${page.data.description}`;
};

export const getComponentPages = () =>
  source.getPages().filter((p: LLMPage) => p.slugs[0] === "components");

export const getPatternPages = () =>
  source.getPages().filter((p: LLMPage) => p.slugs[0] !== "components");

const SECTIONS = [
  "components",
  "installation",
  "utilities",
  "forms",
  "changelog",
] as const;

const SECTION_LABELS: Record<(typeof SECTIONS)[number], string> = {
  components: "Components",
  installation: "Installation",
  utilities: "Utilities",
  forms: "Forms",
  changelog: "Changelog",
};

function groupPagesBySection(pages: LLMPage[]) {
  const bySection = new Map<string, LLMPage[]>();
  for (const page of pages) {
    const first = page.slugs[0];
    const section =
      first && SECTIONS.includes(first as (typeof SECTIONS)[number])
        ? first
        : "handbook";
    const list = bySection.get(section) ?? [];
    list.push(page);
    bySection.set(section, list);
  }
  return bySection;
}

function appendComponentsSection(
  lines: string[],
  bySection: Map<string, LLMPage[]>,
  baseUrl: string
) {
  const componentPages = bySection.get("components") ?? [];
  const components = componentPages.filter((p) => p.slugs.length > 1);
  const hasIndex = componentPages.some((p) => p.slugs.length === 1);
  if (!hasIndex && components.length === 0) {
    return;
  }

  lines.push("### Components", "");
  if (hasIndex) {
    lines.push(
      `- [All Components](${baseUrl}/docs/components): Explore the full list of components available in the library.`,
      ""
    );
  }
  for (const p of components) {
    lines.push(
      `- [${p.data.title}](${baseUrl}${p.url}): ${p.data.description}`
    );
  }
  lines.push("");
}

export const buildLLMIndex = (baseUrl = SITE_CONFIG.url) => {
  const pages = source.getPages();
  const bySection = groupPagesBySection(pages);
  const lines: string[] = [];

  appendComponentsSection(lines, bySection, baseUrl);

  const handbook = bySection.get("handbook") ?? [];
  if (handbook.length > 0) {
    lines.push("### Handbook", "");
    for (const p of handbook) {
      lines.push(
        `- [${p.data.title}](${baseUrl}${p.url}): ${p.data.description}`
      );
    }
    lines.push("");
  }

  for (const key of SECTIONS) {
    if (key === "components") {
      continue;
    }
    const list = bySection.get(key) ?? [];
    if (list.length > 0) {
      lines.push(`### ${SECTION_LABELS[key]}`, "");
      for (const p of list) {
        lines.push(
          `- [${p.data.title}](${baseUrl}${p.url}): ${p.data.description}`
        );
      }
      lines.push("");
    }
  }

  return lines.join("\n").trimEnd();
};

const COMPONENT_DESCRIPTIONS: Record<string, string> = {
  checkbox: "Control for multiple selections in a set.",
  switch: "A control element that allows for a binary selection.",
  "radio-group": "Allows single selection from multiple options.",
};

const transformImports = (code: string) =>
  code.replaceAll("@/registry/react/components", "@/components/ui");

const examplesRoot = join(
  /* turbopackIgnore: true */
  process.cwd(),
  REGISTRY_EXAMPLES_PATH
);

export function getAllRegistryComponentNames(): string[] {
  const entries = readdirSync(
    /* turbopackIgnore: true */
    examplesRoot,
    { withFileTypes: true }
  );
  return entries
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();
}

export function getComponentExamplesForLLM(componentNames: string[]): string {
  const sections: string[] = [];

  for (const name of componentNames) {
    const componentPath = join(
      /* turbopackIgnore: true */
      examplesRoot,
      name
    );
    let files: string[];

    try {
      files = readdirSync(
        /* turbopackIgnore: true */
        componentPath
      );
    } catch {
      continue;
    }

    const exampleFiles = files
      .filter((f) => f.startsWith("example-") && f.endsWith(".tsx"))
      .sort();

    if (exampleFiles.length === 0) {
      continue;
    }

    const title = name
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    const description =
      COMPONENT_DESCRIPTIONS[name] ?? `Examples for ${title} component.`;

    const lines: string[] = [
      `# ${title} - Examples and Patterns`,
      "",
      description,
      "",
    ];

    for (const file of exampleFiles) {
      const filePath = join(
        /* turbopackIgnore: true */
        examplesRoot,
        name,
        file
      );
      let code: string;

      try {
        code = readFileSync(
          /* turbopackIgnore: true */
          filePath,
          "utf-8"
        );
      } catch {
        continue;
      }

      const transformed = transformImports(code);
      const exampleName = file.replace(/^example-|\.tsx$/g, "");

      lines.push(
        `## Example: ${exampleName}`,
        "",
        "```tsx",
        transformed,
        "```",
        ""
      );
    }

    sections.push(lines.join("\n").trimEnd());
  }

  return sections.join("\n\n");
}
