import { createHash } from "node:crypto";
import { transformerNotationWordHighlight } from "@shikijs/transformers";
import { LRUCache } from "lru-cache";
import type { ShikiTransformer } from "shiki";
import { codeToHtml } from "shiki";

// LRU cache for cross-request caching of highlighted code.
// Shiki highlighting is CPU-intensive and deterministic, so caching is safe.
const highlightCache = new LRUCache<string, string>({
  max: 500,
  ttl: 1000 * 60 * 60, // 1 hour.
});

export const packageManagerCommandVariants = (raw: string) => {
  if (raw.startsWith("npm install")) {
    return {
      bun: raw.replace("npm install", "bun add"),
      npm: raw,
      pnpm: raw.replace("npm install", "pnpm add"),
      yarn: raw.replace("npm install", "yarn add"),
    };
  }
  if (raw.startsWith("npx create-")) {
    return {
      bun: raw.replace("npx", "bunx --bun"),
      npm: raw,
      pnpm: raw.replace("npx create-", "pnpm create "),
      yarn: raw.replace("npx create-", "yarn create "),
    };
  }
  if (raw.startsWith("npm create")) {
    return {
      bun: raw.replace("npm create", "bun create"),
      npm: raw,
      pnpm: raw.replace("npm create", "pnpm create"),
      yarn: raw.replace("npm create", "yarn create"),
    };
  }
  if (raw.startsWith("npx")) {
    return {
      bun: raw.replace("npx", "bunx --bun"),
      npm: raw,
      pnpm: raw.replace("npx", "pnpm dlx"),
      yarn: raw.replace("npx", "yarn"),
    };
  }
  if (raw.startsWith("npm run")) {
    return {
      bun: raw.replace("npm run", "bun"),
      npm: raw,
      pnpm: raw.replace("npm run", "pnpm"),
      yarn: raw.replace("npm run", "yarn"),
    };
  }
  return null;
};

export const transformers = [
  {
    code(node) {
      if (node.tagName === "code") {
        const raw = this.source;
        node.properties.__raw__ = raw;

        const variants = packageManagerCommandVariants(raw);
        if (variants) {
          node.properties.__bun__ = variants.bun;
          node.properties.__npm__ = variants.npm;
          node.properties.__pnpm__ = variants.pnpm;
          node.properties.__yarn__ = variants.yarn;
        }
      }
    },
  },
] as ShikiTransformer[];

export const highlightCode = async (
  code: string,
  language = "tsx",
  options?: { showLineNumbers?: boolean }
) => {
  const { showLineNumbers = true } = options ?? {};
  const cacheKey = createHash("sha256")
    .update(`pre-tab-size-2:${language}:${showLineNumbers}:${code}`)
    .digest("hex");

  const cached = highlightCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const html = await codeToHtml(code, {
    defaultColor: false,
    lang: language,
    themes: {
      dark: "github-dark",
      light: "github-light",
    },
    transformers: [
      {
        code(node) {
          if (showLineNumbers) {
            node.properties["data-line-numbers"] = "";
          }
        },
        line(node) {
          node.properties["data-line"] = "";
        },
        pre(node) {
          node.properties.class =
            "text-[.8125rem] min-w-0 w-max px-4 py-3.5 [tab-size:2] outline-none has-data-[highlighted-line]:px-0 has-data-[line-numbers]:ps-0 has-data-[slot=tabs]:p-0 bg-transparent!";
        },
      },
      transformerNotationWordHighlight(),
    ],
  });

  highlightCache.set(cacheKey, html);

  return html;
};
