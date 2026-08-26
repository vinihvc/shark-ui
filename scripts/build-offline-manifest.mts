import { readdir, stat, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";

const CWD = process.cwd();
const OUT_DIR = join(CWD, "out");
const DOCS_DIR = join(OUT_DIR, "docs");
const MANIFEST_NAME = "offline-docs-manifest.json";

const toPosix = (value: string) => value.split("\\").join("/");

const walk = async (dir: string): Promise<string[]> => {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        return walk(fullPath);
      }
      return Promise.resolve([fullPath]);
    })
  );

  return nested.flat();
};

const fileToUrl = (filePath: string): string | null => {
  const rel = toPosix(relative(OUT_DIR, filePath));

  if (rel.endsWith(".html")) {
    const withoutExt = rel.slice(0, -".html".length);
    if (withoutExt === "index") {
      return "/";
    }
    if (withoutExt.endsWith("/index")) {
      return `/${withoutExt.slice(0, -"/index".length)}`;
    }
    return `/${withoutExt}`;
  }

  if (rel.endsWith(".txt")) {
    return `/${rel}`;
  }

  return null;
};

export const writeOfflineDocsManifest = async () => {
  const docsStat = await stat(DOCS_DIR).catch(() => null);
  if (!docsStat?.isDirectory()) {
    throw new Error(
      `Expected ${DOCS_DIR} after next build. Run \`serwist build\` after \`next build\`.`
    );
  }

  const files = await walk(DOCS_DIR);
  const urls = new Set<string>(["/docs"]);

  for (const file of files) {
    const url = fileToUrl(file);
    if (url) {
      urls.add(url);
    }
  }

  const sortedUrls = [...urls].sort((a, b) => a.localeCompare(b));
  const manifest = {
    revision: Date.now().toString(36),
    urls: sortedUrls,
  };

  await writeFile(
    join(OUT_DIR, MANIFEST_NAME),
    `${JSON.stringify(manifest)}\n`
  );

  process.stdout.write(
    `Wrote ${sortedUrls.length} offline docs URLs to /${MANIFEST_NAME}\n`
  );
};
