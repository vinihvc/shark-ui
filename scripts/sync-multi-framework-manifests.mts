/**
 * Generates registry/manifest/solid/*.ts from registry/manifest/react/*.ts
 * Skips chart (React-only). Run: pnpm exec tsx --tsconfig ./tsconfig.scripts.json ./scripts/sync-multi-framework-manifests.mts
 */
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const REACT_DIR = join(ROOT, "registry", "manifest", "react");

const FRAMEWORKS = ["solid"] as const;
type FW = (typeof FRAMEWORKS)[number];

const ARK: Record<FW, string> = {
  solid: "@ark-ui/solid",
};

const LUCIDE: Record<FW, string> = {
  solid: "lucide-solid",
};

function transformContent(src: string, fw: FW): string {
  let out = src;

  out = out.replaceAll("@ark-ui/react", ARK[fw]);
  out = out.replaceAll("lucide-react", LUCIDE[fw]);

  const hadAbsoluteUrl = out.includes("absoluteUrl(");
  if (hadAbsoluteUrl) {
    out = out.replace(
      /import \{ absoluteUrl \} from "@\/lib\/url";/,
      `import { absoluteRegistryItemUrl } from "@/lib/url";`
    );
    out = out.replaceAll(
      /absoluteUrl\("\/r\/([a-z0-9-]+)\.json"\)/g,
      `absoluteRegistryItemUrl("${fw}", "$1")`
    );
  }

  return out;
}

async function main() {
  const files = (await readdir(REACT_DIR)).filter(
    (f) => f.endsWith(".ts") && f !== "chart.ts"
  );

  for (const file of files) {
    const src = await readFile(join(REACT_DIR, file), "utf-8");
    for (const fw of FRAMEWORKS) {
      const dir = join(ROOT, "registry", "manifest", fw);
      await mkdir(dir, { recursive: true });
      const outPath = join(dir, file);
      const existing = await readFile(outPath, "utf-8").catch(() => null);
      const next = transformContent(src, fw);
      if (existing === next) {
        continue;
      }
      await writeFile(outPath, next);
      console.log(`wrote ${fw}/${file}`);
    }
  }
}

main().catch(console.error);
