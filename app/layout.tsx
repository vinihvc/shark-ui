import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { MediaQuery } from "@/components/debug/media-query";
import { SITE_CONFIG } from "@/config/site";
import { fontMono, fontSans } from "@/lib/fonts";
import { absoluteUrl } from "@/lib/url";
import { cn } from "@/lib/utils";
import { SkipNavLink } from "@/registry/react/components/skip-nav";
import { Toaster } from "@/registry/react/components/toast";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
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
  creator: SITE_CONFIG.creator,
  description: SITE_CONFIG.description,
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [
      {
        url: absoluteUrl("/opengraph-image.png"),
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
    url: absoluteUrl("/"),
    type: "website",
    locale: "en_US",
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [absoluteUrl("/opengraph-image.png")],
    creator: SITE_CONFIG.creator,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${SITE_CONFIG.url}/site.webmanifest`,
  alternates: {
    canonical: absoluteUrl("/"),
    types: {
      "application/rss+xml": `${SITE_CONFIG.url}/rss.xml`,
    },
  },
};

const RootLayout = (props: LayoutProps<"/">) => {
  const { children } = props;

  return (
    <html
      className={cn(fontSans.variable, fontMono.variable)}
      data-scroll-behavior="smooth"
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <SkipNavLink />

          {children}

          <Toaster />

          <MediaQuery />

          <Analytics />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
