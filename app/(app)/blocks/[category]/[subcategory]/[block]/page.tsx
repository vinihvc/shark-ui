import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOCK_MAP, getBlock } from "@/app/(app)/blocks/_data/blocks-data";
import { ComponentPreviewTabs } from "@/components/component-preview-tabs";
import { ComponentSource } from "@/components/component-source";
import { Footer } from "@/components/layout/footer";
import { createMetadata, createOgImageUrl } from "@/lib/metadata";

const BLOCK_REGISTRY: Record<
  string,
  () => Promise<{ default: React.ComponentType }>
> = {
  "marketing/heroes/minimal-gradient-with-ctas": () =>
    import(
      "@/registry/react/blocks/marketing/heroes/minimal-gradient-with-ctas"
    ),
  "marketing/heroes/simple-centered": () =>
    import("@/registry/react/blocks/marketing/heroes/simple-centered"),
  "marketing/heroes/gradient-dual-ctas": () =>
    import("@/registry/react/blocks/marketing/heroes/gradient-dual-ctas"),
  "marketing/heroes/blue-gradient": () =>
    import("@/registry/react/blocks/marketing/heroes/blue-gradient"),
  "marketing/heroes/grid-background": () =>
    import("@/registry/react/blocks/marketing/heroes/grid-background"),
  "marketing/features/split-layout-with-list": () =>
    import("@/registry/react/blocks/marketing/features/split-layout-with-list"),
  "marketing/features/gradient-two-columns": () =>
    import("@/registry/react/blocks/marketing/features/gradient-two-columns"),
  "marketing/features/icon-row": () =>
    import("@/registry/react/blocks/marketing/features/icon-row"),
  "marketing/features/horizontal-detail-cards": () =>
    import(
      "@/registry/react/blocks/marketing/features/horizontal-detail-cards"
    ),
  "marketing/cta/centered": () =>
    import("@/registry/react/blocks/marketing/cta/centered"),
  "marketing/cta/background": () =>
    import("@/registry/react/blocks/marketing/cta/background"),
  "marketing/stats/split-layout-metrics": () =>
    import("@/registry/react/blocks/marketing/stats/split-layout-metrics"),
  "marketing/team/grid-background": () =>
    import("@/registry/react/blocks/marketing/team/grid-background"),
  "marketing/logos/logo-cloud": () =>
    import("@/registry/react/blocks/marketing/logos/logo-cloud"),
  "marketing/testimonials/gradient-panel": () =>
    import("@/registry/react/blocks/marketing/testimonials/gradient-panel"),
  "marketing/testimonials/quote-block": () =>
    import("@/registry/react/blocks/marketing/testimonials/quote-block"),
  "marketing/faq/accordion-with-icons": () =>
    import("@/registry/react/blocks/marketing/faq/accordion-with-icons"),
  "marketing/newsletter/centered-headline-form": () =>
    import(
      "@/registry/react/blocks/marketing/newsletter/centered-headline-form"
    ),
  "marketing/contact/two-column-block": () =>
    import("@/registry/react/blocks/marketing/contact/two-column-block"),
  "marketing/navbars/full-bar-with-divider": () =>
    import("@/registry/react/blocks/marketing/navbars/full-bar-with-divider"),
  "marketing/navbars/links-with-login-cta": () =>
    import("@/registry/react/blocks/marketing/navbars/links-with-login-cta"),
  "marketing/headers/headline-with-email-signup": () =>
    import(
      "@/registry/react/blocks/marketing/headers/headline-with-email-signup"
    ),
  "marketing/headers/bold-headline-dual-ctas": () =>
    import("@/registry/react/blocks/marketing/headers/bold-headline-dual-ctas"),
  "marketing/footers/minimal-grey-with-links": () =>
    import("@/registry/react/blocks/marketing/footers/minimal-grey-with-links"),
  "marketing/footers/centered-logo-bar": () =>
    import("@/registry/react/blocks/marketing/footers/centered-logo-bar"),
  "marketing/elements/announcement-bar-promo": () =>
    import("@/registry/react/blocks/marketing/elements/announcement-bar-promo"),
  "marketing/pricing/three-plans-with-toggle": () =>
    import("@/registry/react/blocks/marketing/pricing/three-plans-with-toggle"),
  "marketing/pricing/single-plan-with-toggle": () =>
    import("@/registry/react/blocks/marketing/pricing/single-plan-with-toggle"),
  "marketing/blog/two-column-feed": () =>
    import("@/registry/react/blocks/marketing/blog/two-column-feed"),
  "marketing/blog/simple-feed": () =>
    import("@/registry/react/blocks/marketing/blog/simple-feed"),
  "application-ui/forms/sign-in-simple": () =>
    import("@/registry/react/blocks/application-ui/forms/sign-in-simple"),
};

export const generateStaticParams = async () => {
  return Array.from(BLOCK_MAP.keys()).map((key) => {
    const [category, subcategory, block] = key.split("/");
    return { category, subcategory, block };
  });
};

export const generateMetadata = async ({
  params,
}: PageProps<"/blocks/[category]/[subcategory]/[block]">): Promise<Metadata> => {
  const { category, subcategory, block } = await params;
  const blockData = getBlock(category, subcategory, block);

  if (!blockData) {
    return {};
  }

  return createMetadata({
    title: `${blockData.name} Block`,
    description: blockData.description,
    url: blockData.blockUrl,
    imageUrl: createOgImageUrl({
      title: blockData.name,
      description: blockData.description,
    }),
  });
};

const BlockPage = async (
  props: PageProps<"/blocks/[category]/[subcategory]/[block]">
) => {
  const params = await props.params;
  const { category, subcategory, block } = params;
  const key = `${category}/${subcategory}/${block}`;
  const blockData = getBlock(category, subcategory, block);
  const loader = BLOCK_REGISTRY[key];

  if (!(blockData && loader)) {
    notFound();
  }

  const BlockComponent = (await loader()).default;

  const blockPath = join(
    process.cwd(),
    "registry",
    "react",
    "blocks",
    category,
    subcategory,
    `${block}.tsx`
  );

  let sourceCode = "";
  try {
    sourceCode = readFileSync(blockPath, "utf-8");
  } catch {
    sourceCode = `// Source not available for ${block}`;
  }

  return (
    <>
      <main className="container py-8">
        <div className="mb-6">
          <p className="text-muted-foreground text-sm">
            {blockData.categoryLabel} / {blockData.subcategoryLabel}
          </p>
          <h1 className="font-bold text-2xl tracking-tight">
            {blockData.name}
          </h1>
          <p className="mt-1 text-muted-foreground text-sm">
            {blockData.description}
          </p>
        </div>
        <ComponentPreviewTabs
          component={<BlockComponent />}
          showBorders
          source={<ComponentSource code={sourceCode} isCollapsible={false} />}
        />
      </main>
      <Footer />
    </>
  );
};

export default BlockPage;
