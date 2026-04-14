import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const DIR = join(ROOT, "registry", "solid", "components");

async function main() {
  const files = (await readdir(DIR)).filter((f) => f.endsWith(".tsx"));
  for (const f of files) {
    const p = join(DIR, f);
    let s = await readFile(p, "utf-8");

    s = s.replace(
      /^import \{ Portal \} from "@ark-ui\/solid\/portal";\n/gm,
      ""
    );

    s = s.replace(/<Portal>/g, "<>");
    s = s.replace(/<\/Portal>/g, "</>");

    s = s.replace(/\bReact\.createContext\b/g, "createContext");
    s = s.replace(/\bReact\.useContext\b/g, "useContext");

    s = s.replace(/\n(\s*)className,/g, "\n$1class: className,");

    const needsCtx =
      s.includes("createContext(") ||
      s.includes("useContext(") ||
      s.includes("useContext ");
    if (needsCtx && !s.includes('from "solid-js"')) {
      s = s.replace(
        /^import type \{ ComponentProps \} from "solid-js";\n/m,
        'import { createContext, useContext, type ComponentProps } from "solid-js";\n'
      );
    } else if (needsCtx && s.includes("import type { ComponentProps }")) {
      s = s.replace(
        'import type { ComponentProps } from "solid-js";',
        'import { createContext, useContext, type ComponentProps } from "solid-js";'
      );
    }

    await writeFile(p, s);
  }
}

main().catch(console.error);
