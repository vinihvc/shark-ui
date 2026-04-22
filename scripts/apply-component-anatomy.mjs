import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ANATOMIES } from "./component-anatomies.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

/** @type {Record<string, string>} */
const ANCHOR_AFTER_CODETABS = {
  sidebar: "## Structure",
  chart: "## Component",
  "color-picker": "## Modes",
};

for (const slug of Object.keys(ANATOMIES)) {
  const tree = ANATOMIES[slug];
  const file = path.join(root, "content/docs/components", `${slug}.mdx`);
  if (!fs.existsSync(file)) {
    console.error(`Missing doc: ${file}`);
    process.exit(1);
  }
  let c = fs.readFileSync(file, "utf8");
  if (c.includes("\n## Anatomy\n")) {
    console.log("skip (already has Anatomy):", slug);
    continue;
  }
  const anchor = ANCHOR_AFTER_CODETABS[slug] ?? "## Usage";
  const escaped = anchor.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`</CodeTabs>\\s*\\n\\n${escaped}`, "m");
  if (!re.test(c)) {
    console.error(`Needle not found [${slug}]:`, anchor);
    process.exit(1);
  }
  const block = `</CodeTabs>\n\n## Anatomy\n\n\`\`\`text\n${tree}\n\`\`\`\n\n${anchor}`;
  c = c.replace(re, block);
  fs.writeFileSync(file, c);
  console.log("updated:", slug);
}

console.log("total:", Object.keys(ANATOMIES).length);
