import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { REGISTRY_EXAMPLES_PATH } from "@/config/constants";

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
