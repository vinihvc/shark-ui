import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config";
import rehypePrettyCode from "rehype-pretty-code";
import { z } from "zod";
import { transformers } from "@/lib/highlight-code";
import { REGISTRY_FRAMEWORKS } from "./lib/registry-frameworks";

export default defineConfig({
  mdxOptions: {
    rehypePlugins: (plugins) => {
      plugins.shift();
      plugins.push([
        // biome-ignore lint/suspicious/noExplicitAny: known
        rehypePrettyCode as any,
        {
          theme: {
            dark: "github-dark",
            light: "github-light-default",
          },
          transformers,
        },
      ]);

      return plugins;
    },
  },
});

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema.extend({
      links: z
        .object({
          doc: z.url().optional(),
          api: z.url().optional(),
          frameworks: z.array(z.enum(REGISTRY_FRAMEWORKS)).optional(),
        })
        .optional(),
    }),
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});
