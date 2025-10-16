import "@/styles/global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { SITE_CONFIG } from "@/config/site";
import { fontSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  creator: SITE_CONFIG.creator,
  description: SITE_CONFIG.description,
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    url: SITE_CONFIG.url,
    type: "website",
    locale: "en_US",
    siteName: SITE_CONFIG.name,
  },
};

const RootLayout = (props: LayoutProps<"/">) => {
  const { children } = props;

  return (
    <html className={fontSans.variable} lang="en" suppressHydrationWarning>
      <body className="flex min-h-svh flex-col">
        <RootProvider>
          {children}

          <Footer />
        </RootProvider>
      </body>
    </html>
  );
};

export default RootLayout;
