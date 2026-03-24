import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Email Template",
  description:
    "Email with real-time messaging, typing indicators, and read receipts.",
  url: "/templates/email",
});

const EmailTemplateLayout = (props: LayoutProps<"/templates/email">) => {
  const { children } = props;

  return children;
};

export default EmailTemplateLayout;
