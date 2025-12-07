import { type InferPageType, loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";
import { blocks, docs } from "@/.source";

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

export const blocksSource = loader({
  baseUrl: "/blocks",
  source: blocks.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

export const getPageImage = (page: InferPageType<typeof source>) => {
  const segments = [...page.slugs, "image.png"];

  return {
    segments,
    url: `/og/docs/${segments.join("/")}`,
  };
};

export const getBlocksPageImage = (
  page: InferPageType<typeof blocksSource>
) => {
  const segments = [...page.slugs, "image.png"];

  return {
    segments,
    url: `/og/blocks/${segments.join("/")}`,
  };
};

export const getLLMText = async (page: InferPageType<typeof source>) => {
  // biome-ignore lint/suspicious/noTsIgnore: idk
  // @ts-ignore fumadocs type error
  const processed = await page.data.getText("processed");

  return `# ${page.data.title} (${page.url})

${processed}`;
};
