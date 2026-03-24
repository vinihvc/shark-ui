import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Dashboard Template",
  description:
    "Admin dashboard layout with sidebar navigation, data tables, and customizable widgets.",
  url: "/templates/dashboard",
});

const DashboardTemplateLayout = (
  props: LayoutProps<"/templates/dashboard">
) => {
  const { children } = props;

  return children;
};

export default DashboardTemplateLayout;
