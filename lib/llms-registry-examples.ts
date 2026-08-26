import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { REGISTRY_EXAMPLES_PATH } from "@/config/constants";

const COMPONENT_DESCRIPTIONS: Record<string, string> = {
  checkbox: "Control for multiple selections in a set.",
  form: "React Hook Form, TanStack Form, and Formisch patterns with Shark UI Field primitives.",
  "radio-group": "Allows single selection from multiple options.",
  switch: "A control element that allows for a binary selection.",
  "tags-input":
    "Multi-value tag entry with keyboard navigation and optional combobox autocomplete.",
};

const EXAMPLE_PREFIX = /^example-/;
const TSX_EXT = /\.tsx$/;
const TS_EXT = /\.ts$/;

const transformImports = (code: string) =>
  code.replaceAll("@/registry/react/components", "@/components/ui");

const examplesRoot = join(
  /* turbopackIgnore: true */
  process.cwd(),
  REGISTRY_EXAMPLES_PATH
);

/** Form guide examples live under `form/<framework>/example-*.tsx`. */
const FORM_EXAMPLE_FRAMEWORKS = ["rhf", "tanstack", "formisch"] as const;

interface ExampleEntry {
  absPath: string;
  fence: "tsx" | "ts";
  heading: string;
}

function isExampleSourceFile(name: string): boolean {
  return (
    name.startsWith("example-") &&
    (name.endsWith(".tsx") || name.endsWith(".ts"))
  );
}

function readExampleEntriesFlat(componentPath: string): ExampleEntry[] {
  let files: string[];

  try {
    files = readdirSync(
      /* turbopackIgnore: true */
      componentPath
    );
  } catch {
    return [];
  }

  return files
    .filter((f) => f.startsWith("example-") && f.endsWith(".tsx"))
    .sort()
    .map((file) => ({
      absPath: join(
        /* turbopackIgnore: true */
        componentPath,
        file
      ),
      fence: "tsx" as const,
      heading: file.replace(EXAMPLE_PREFIX, "").replace(TSX_EXT, ""),
    }));
}

function readExampleEntriesForm(componentPath: string): ExampleEntry[] {
  const out: ExampleEntry[] = [];

  for (const fw of FORM_EXAMPLE_FRAMEWORKS) {
    const fwPath = join(
      /* turbopackIgnore: true */
      componentPath,
      fw
    );
    let files: string[];

    try {
      files = readdirSync(
        /* turbopackIgnore: true */
        fwPath
      );
    } catch {
      continue;
    }

    for (const file of files.filter(isExampleSourceFile).sort()) {
      const base = file
        .replace(EXAMPLE_PREFIX, "")
        .replace(TSX_EXT, "")
        .replace(TS_EXT, "");

      out.push({
        absPath: join(
          /* turbopackIgnore: true */
          fwPath,
          file
        ),
        fence: file.endsWith(".ts") ? "ts" : "tsx",
        heading: `${fw}/${base}`,
      });
    }
  }

  return out.sort((a, b) => a.heading.localeCompare(b.heading));
}

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

    const exampleEntries =
      name === "form"
        ? readExampleEntriesForm(componentPath)
        : readExampleEntriesFlat(componentPath);

    if (exampleEntries.length === 0) {
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

    for (const { absPath, heading, fence } of exampleEntries) {
      let code: string;

      try {
        code = readFileSync(
          /* turbopackIgnore: true */
          absPath,
          "utf-8"
        );
      } catch {
        continue;
      }

      const transformed = transformImports(code);

      lines.push(
        `## Example: ${heading}`,
        "",
        `\`\`\`${fence}`,
        transformed,
        "```",
        ""
      );
    }

    sections.push(lines.join("\n").trimEnd());
  }

  return sections.join("\n\n");
}
