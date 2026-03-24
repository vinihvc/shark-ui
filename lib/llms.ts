import type { InferPageType } from "fumadocs-core/source";
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
