import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { MediaQuery } from "@/components/debug/media-query";
import { JsonLd } from "@/components/seo/json-ld";
import { UnregisterLegacyServiceWorker } from "@/components/unregister-legacy-service-worker";
import { SITE_CONFIG } from "@/config/site";
import { fontHeading, fontMono, fontSans } from "@/lib/fonts";
import { absoluteUrl } from "@/lib/url";
import { cn } from "@/lib/utils";
import { SkipNavLink } from "@/registry/react/components/skip-nav";
import { Toaster } from "@/registry/react/components/toast";
import { Providers } from "./providers";

export const metadata: Metadata = {
  alternates: {
    types: {
      "application/rss+xml": `${SITE_CONFIG.url}/rss.xml`,
    },
  },
  creator: SITE_CONFIG.creator,
  description: SITE_CONFIG.description,
  icons: {
    apple: "/apple-touch-icon.png",
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
  },
  keywords: [
    "shark-ui",
    "ark-ui",
    "shadcn",
    "components",
    "nextjs",
    "react",
    "ui",
  ],
  manifest: `${SITE_CONFIG.url}/site.webmanifest`,
  metadataBase: new URL(absoluteUrl("/")),
  openGraph: {
    images: [
      {
        alt: SITE_CONFIG.name,
        height: 630,
        url: absoluteUrl(SITE_CONFIG.ogImage),
        width: 1200,
      },
    ],
    locale: "en_US",
    siteName: SITE_CONFIG.name,
  },
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  twitter: {
    card: "summary_large_image",
    creator: SITE_CONFIG.creator,
    images: [absoluteUrl(SITE_CONFIG.ogImage)],
  },
};

const RootLayout = (props: LayoutProps<"/">) => {
  const { children } = props;

  return (
    <html
      className={cn(fontSans.variable, fontMono.variable, fontHeading.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            description: SITE_CONFIG.description,
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
          }}
        />
        <Providers>
          <UnregisterLegacyServiceWorker />
          <SkipNavLink />

          {children}

          <Toaster />

          <MediaQuery />

          <Analytics />

          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
