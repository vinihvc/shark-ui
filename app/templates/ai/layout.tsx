import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "AI Template",
  description:
    "Landing page for AI products with feature showcase, demos, and integration highlights.",
  url: "/templates/ai",
});

const AITemplateLayout = (props: LayoutProps<"/templates/ai">) => {
  const { children } = props;

  return children;
};

export default AITemplateLayout;
