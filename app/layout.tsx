import "@/styles/global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import { MediaQuery } from "@/components/debug/media-query";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/header/header";
import { SITE_CONFIG } from "@/config/site";
import { fontMono, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Toaster } from "@/registry/react/components/toast";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  keywords: ["shadcn", "components", "nextjs", "react", "ark", "ui"],
  creator: SITE_CONFIG.creator,
  description: SITE_CONFIG.description,
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [
      {
        url: `${SITE_CONFIG.url}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
    url: SITE_CONFIG.url,
    type: "website",
    locale: "en_US",
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/opengraph-image.png`],
    creator: SITE_CONFIG.creator,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

const RootLayout = (props: LayoutProps<"/">) => {
  const { children } = props;

  return (
    <html
      className={cn(fontSans.variable, fontMono.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <RootProvider
            search={{
              enabled: false,
            }}
          >
            <SiteHeader />

            {children}

            <Footer />

            <Toaster />

            <MediaQuery />
          </RootProvider>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
