/**
 * One-time bulk scaffold: copies React registry components to Solid and applies
 * mechanical transforms. Manual follow-up may be needed for hooks/context.
 * Skips chart.tsx. Run: pnpm exec tsx --tsconfig ./tsconfig.scripts.json ./scripts/bulk-port-solid-from-react.mts
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const REACT = join(ROOT, "registry", "react", "components");
const SOLID = join(ROOT, "registry", "solid", "components");

function transform(src: string, fileBase: string): string {
  let s = src;

  s = s.replace(/^"use client";\n\n?/m, "");

  s = s.replaceAll("@ark-ui/react/", "@ark-ui/solid/");
  s = s.replaceAll('from "react"', 'from "solid-js"');
  s = s.replaceAll('import type React from "react";\n', "");
  s = s.replaceAll('import React from "react";\n', "");
  s = s.replaceAll('import * as React from "react";\n', "");

  s = s.replaceAll(
    "@/registry/react/components/",
    "@/registry/solid/components/"
  );
  s = s.replaceAll("lucide-react", "lucide-solid");

  s = s.replaceAll("React.ComponentProps<", "ComponentProps<");
  s = s.replaceAll("React.ReactNode", "JSX.Element");
  s = s.replaceAll("React.ReactElement", "JSX.Element");
  s = s.replaceAll("React.FC", "VoidComponent");
  s = s.replaceAll("React.createContext", "createContext");
  s = s.replaceAll("React.useContext", "useContext");
  s = s.replaceAll("React.useMemo", "createMemo");
  s = s.replaceAll("React.useState", "createSignal");
  s = s.replaceAll("React.useEffect", "createEffect");
  s = s.replaceAll("React.useCallback", "useCallbackSolid");

  s = s.replaceAll("className=", "class=");
  s = s.replaceAll(/\bclassName\b/g, "class");

  if (!s.includes('from "solid-js"') && s.includes("ComponentProps<")) {
    s = `import type { ComponentProps } from "solid-js";\n${s}`;
  }

  return s;
}

async function main() {
  const files = (await readdir(REACT)).filter(
    (f) => f.endsWith(".tsx") && f !== "chart.tsx"
  );
  for (const f of files) {
    const name = f.replace(".tsx", "");
    const src = await readFile(join(REACT, f), "utf-8");
    const out = transform(src, name);
    await writeFile(join(SOLID, f), out);
    console.log("wrote solid", f);
  }
}

main().catch(console.error);
