import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { REGISTRY_EXAMPLES_PATH } from "@/config/constants";

export function getAllRegistryComponentNames(): string[] {
  const basePath = join(process.cwd(), REGISTRY_EXAMPLES_PATH);
  const entries = readdirSync(basePath, { withFileTypes: true });
  return entries
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();
}

const COMPONENT_DESCRIPTIONS: Record<string, string> = {
  checkbox: "Control for multiple selections in a set.",
  switch: "A control element that allows for a binary selection.",
  "radio-group": "Allows single selection from multiple options.",
};

const transformImports = (code: string) =>
  code.replaceAll("@/registry/react/components", "@/components/ui");

export function getComponentExamplesForLLM(
  componentNames: string[]
): string {
  const sections: string[] = [];

  const basePath = join(process.cwd(), REGISTRY_EXAMPLES_PATH);

  for (const name of componentNames) {
    const componentPath = join(basePath, name);
    let files: string[];

    try {
      files = readdirSync(componentPath);
    } catch {
      continue;
    }

    const exampleFiles = files
      .filter(
        (f) => f.startsWith("example-") && f.endsWith(".tsx")
      )
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
      const filePath = join(componentPath, file);
      let code: string;

      try {
        code = readFileSync(filePath, "utf-8");
      } catch {
        continue;
      }

      const transformed = transformImports(code);
      const exampleName = file.replace(/^example-|\.tsx$/g, "");

      lines.push(`## Example: ${exampleName}`, "", "```tsx", transformed, "```", "");
    }

    sections.push(lines.join("\n").trimEnd());
  }

  return sections.join("\n\n");
}
