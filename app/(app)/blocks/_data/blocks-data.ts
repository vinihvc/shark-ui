import { CHART_BLOCKS_MANIFEST } from "./chart-blocks-manifest";

export interface Block {
  blockUrl: string;
  category: string;
  categoryLabel: string;
  description: string;
  id: string;
  name: string;
  previewUrl: string;
  /**
   * File under `registry/react/blocks/` when it is not
   * `{category}/{subcategory}/{id}.tsx`.
   */
  registryFile?: string;
  subcategory: string;
  subcategoryLabel: string;
}

const block = (
  category: string,
  categoryLabel: string,
  subcategory: string,
  subcategoryLabel: string,
  name: string,
  id: string,
  opts?: {
    blockUrl?: string;
    description?: string;
    previewUrl?: string;
    registryFile?: string;
  }
): Block => {
  const blockUrl = opts?.blockUrl ?? `/blocks/${category}/${subcategory}/${id}`;
  return {
    blockUrl,
    category,
    categoryLabel,
    description: opts?.description ?? `${name} block for your website.`,
    id,
    name,
    previewUrl: opts?.previewUrl ?? blockUrl,
    registryFile: opts?.registryFile,
    subcategory,
    subcategoryLabel,
  };
};

const CHART_BLOCKS: Block[] = CHART_BLOCKS_MANIFEST.map((chart) =>
  block(
    "charts",
    "Charts",
    chart.subcategory,
    chart.subcategoryLabel,
    chart.name,
    chart.id,
    { description: chart.description }
  )
);

export const BLOCKS: Block[] = [
  ...CHART_BLOCKS,
  // Marketing - Heroes
  block(
    "marketing",
    "Marketing",
    "heroes",
    "Heroes",
    "Minimal Gradient with CTAs",
    "minimal-gradient-with-ctas",
    { description: "Minimal gradient hero with headline and two CTA buttons." }
  ),
  block(
    "marketing",
    "Marketing",
    "heroes",
    "Heroes",
    "Simple Centered",
    "simple-centered",
    { description: "Simple centered hero with headline and dual CTAs." }
  ),
  // Marketing - Features
  block(
    "marketing",
    "Marketing",
    "features",
    "Features",
    "Split Layout with List",
    "split-layout-with-list",
    {
      description:
        "Two-column layout with image on the left and feature bullets on the right.",
    }
  ),
  // Marketing - CTA
  block("marketing", "Marketing", "cta", "CTA", "Centered", "centered", {
    description: "Centered CTA with headline and email signup form.",
  }),
  block(
    "marketing",
    "Marketing",
    "heroes",
    "Heroes",
    "Gradient Dual CTAs",
    "gradient-dual-ctas",
    {
      description:
        "Gradient hero with headline and dual CTA buttons alongside nested windows.",
    }
  ),
  block(
    "marketing",
    "Marketing",
    "heroes",
    "Heroes",
    "Blue Gradient",
    "blue-gradient",
    { description: "Blue gradient hero with headline and dual CTA buttons." }
  ),
  block(
    "marketing",
    "Marketing",
    "heroes",
    "Heroes",
    "Grid Background",
    "grid-background",
    { description: "Grid background hero with headline and simple subtext." }
  ),
  // Marketing - Features
  block(
    "marketing",
    "Marketing",
    "features",
    "Features",
    "Gradient Two Columns",
    "gradient-two-columns",
    {
      description:
        "Gradient background with heading and dual feature highlights side by side.",
    }
  ),
  block(
    "marketing",
    "Marketing",
    "features",
    "Features",
    "Icon Row",
    "icon-row",
    { description: "Row of icon headings with descriptions." }
  ),
  block(
    "marketing",
    "Marketing",
    "features",
    "Features",
    "Horizontal Detail Cards",
    "horizontal-detail-cards",
    { description: "Horizontal cards for features with details." }
  ),
  // Marketing - CTA
  block("marketing", "Marketing", "cta", "CTA", "Background", "background", {
    description: "Full-width CTA with solid background.",
  }),
  // Marketing - Stats, Team, Logos
  block(
    "marketing",
    "Marketing",
    "stats",
    "Stats",
    "Split Layout with Metrics",
    "split-layout-metrics",
    {
      description:
        "Split layout with phone image plus big metrics on the right.",
    }
  ),
  block(
    "marketing",
    "Marketing",
    "team",
    "Team",
    "Grid Background",
    "grid-background",
    { description: "Team members grid with photos, names, and titles." }
  ),
  block(
    "marketing",
    "Marketing",
    "logos",
    "Logos",
    "Logo Cloud",
    "logo-cloud",
    {
      description:
        "Centered headline with supportive text and partner logos row.",
    }
  ),
  // Marketing - Testimonials
  block(
    "marketing",
    "Marketing",
    "testimonials",
    "Testimonials",
    "Gradient Panel",
    "gradient-panel",
    {
      description:
        "Gradient panel featuring avatar, quote, and dot indicators.",
    }
  ),
  block(
    "marketing",
    "Marketing",
    "testimonials",
    "Testimonials",
    "Quote Block",
    "quote-block",
    {
      description:
        "Simple quote block with author details and arrow navigation.",
    }
  ),
  // Marketing - FAQ, Newsletter, Contact
  block(
    "marketing",
    "Marketing",
    "faq",
    "FAQ",
    "Accordion with Icons",
    "accordion-with-icons",
    { description: "FAQ card with accordion of questions with plus icons." }
  ),
  block(
    "marketing",
    "Marketing",
    "newsletter",
    "Newsletter",
    "Centered Headline Form",
    "centered-headline-form",
    {
      description:
        "Centered headline and subtext with email field and subscribe button.",
    }
  ),
  block(
    "marketing",
    "Marketing",
    "contact",
    "Contact",
    "Two Column Block",
    "two-column-block",
    {
      description:
        "Two-column contact block with headline, copy and contact button.",
    }
  ),
  // Marketing - Navbars
  block(
    "marketing",
    "Marketing",
    "navbars",
    "Navbars",
    "Full Bar with Divider",
    "full-bar-with-divider",
    {
      description:
        "Full-width bar with links and divider separating login and free-trial buttons.",
    }
  ),
  block(
    "marketing",
    "Marketing",
    "navbars",
    "Navbars",
    "Links with Login & CTA",
    "links-with-login-cta",
    {
      description: "Horizontal navbar with logo, links, login and CTA buttons.",
    }
  ),
  // Marketing - Headers
  block(
    "marketing",
    "Marketing",
    "headers",
    "Headers",
    "Headline with Email Signup",
    "headline-with-email-signup",
    {
      description:
        "Header featuring tagline, subtext, email field, and CTA button.",
    }
  ),
  block(
    "marketing",
    "Marketing",
    "headers",
    "Headers",
    "Bold Headline Dual CTAs",
    "bold-headline-dual-ctas",
    {
      description:
        "Hero header with bold headline, subtext and dual CTA buttons.",
    }
  ),
  // Marketing - Footers
  block(
    "marketing",
    "Marketing",
    "footers",
    "Footers",
    "Minimal Grey with Links",
    "minimal-grey-with-links",
    {
      description:
        "Minimal grey footer with logo, link columns, copyright and icons.",
    }
  ),
  block(
    "marketing",
    "Marketing",
    "footers",
    "Footers",
    "Centered Logo Bar",
    "centered-logo-bar",
    {
      description:
        "Minimal bar footer with centered logo, copyright and icons.",
    }
  ),
  // Marketing - Elements
  block(
    "marketing",
    "Marketing",
    "elements",
    "Elements",
    "Announcement Bar Promo",
    "announcement-bar-promo",
    { description: "Full-width promo bar with discount code and close button." }
  ),
  // Marketing - Pricing
  block(
    "marketing",
    "Marketing",
    "pricing",
    "Pricing",
    "Three Plans with Toggle",
    "three-plans-with-toggle",
    {
      description:
        "Three plan cards with monthly/yearly toggle; pro tier emphasized.",
    }
  ),
  block(
    "marketing",
    "Marketing",
    "pricing",
    "Pricing",
    "Single Plan with Toggle",
    "single-plan-with-toggle",
    {
      description:
        "Single plan card with monthly/annual toggle and feature list.",
    }
  ),
  // Marketing - Blog
  block(
    "marketing",
    "Marketing",
    "blog",
    "Blog",
    "Two Column Feed",
    "two-column-feed",
    {
      description:
        "Two-column blog feed with image thumbnails, tags and post details.",
    }
  ),
  block(
    "marketing",
    "Marketing",
    "blog",
    "Blog",
    "Simple Feed",
    "simple-feed",
    { description: "Simple vertical list of blog posts with tags and dates." }
  ),
  // Application UI - Forms
  block(
    "application-ui",
    "Application UI",
    "forms",
    "Forms",
    "Sign In Simple",
    "sign-in-simple",
    {
      description:
        "Login block with email, password, and social sign-in options.",
    }
  ),
  block(
    "sidebar",
    "Sidebar",
    "default",
    "Default",
    "Default Sidebar",
    "default",
    {
      description:
        "Application shell with collapsible sidebar, navigation, projects, and account menu.",
      blockUrl: "/blocks/sidebar/default",
      previewUrl: "/view/blocks/sidebar/default",
      registryFile: "sidebar/default.tsx",
    }
  ),
];

export const BLOCKS_BY_CATEGORY = BLOCKS.reduce(
  (acc, block) => {
    const key = block.category;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(block);
    return acc;
  },
  {} as Record<string, Block[]>
);

export const BLOCKS_BY_SUBCATEGORY = BLOCKS.reduce(
  (acc, block) => {
    const key = `${block.category}/${block.subcategory}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(block);
    return acc;
  },
  {} as Record<string, Block[]>
);

export const BLOCKS_BY_CATEGORY_AND_SUBCATEGORY = BLOCKS.reduce(
  (acc, block) => {
    if (!acc[block.category]) {
      acc[block.category] = {};
    }
    const sub = block.subcategory;
    if (!acc[block.category][sub]) {
      acc[block.category][sub] = [];
    }
    acc[block.category][sub].push(block);
    return acc;
  },
  {} as Record<string, Record<string, Block[]>>
);

export const BLOCK_MAP = new Map(
  BLOCKS.map((b) => [`${b.category}/${b.subcategory}/${b.id}`, b])
);

export function getBlock(
  category: string,
  subcategory: string,
  id: string
): Block | undefined {
  return BLOCK_MAP.get(`${category}/${subcategory}/${id}`);
}
