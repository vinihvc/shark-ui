import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Podcast Template",
  description:
    "Podcast with podcast creation, editing, and deletion. Includes podcast completion tracking and progress tracking.",
  url: "/templates/podcast",
});

const PodcastTemplateLayout = (props: LayoutProps<"/templates/podcast">) => {
  const { children } = props;

  return children;
};

export default PodcastTemplateLayout;
