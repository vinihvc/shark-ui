import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";
import { absoluteUrl } from "@/lib/url";

interface CreateMetadataProps {
  description: string;
  imageAlt?: string;
  imageUrl?: string;
  title: string;
  url: string;
}

export const createMetadata = ({
  title,
  description,
  url,
  imageAlt = `${title} | ${SITE_CONFIG.name}`,
  imageUrl = SITE_CONFIG.ogImage,
}: CreateMetadataProps): Metadata => ({
  alternates: { canonical: absoluteUrl(url) },
  description,
  openGraph: {
    description,
    images: [
      {
        alt: imageAlt,
        height: 630,
        url: absoluteUrl(imageUrl),
        width: 1200,
      },
    ],
    locale: "en_US",
    siteName: SITE_CONFIG.name,
    title,
    type: "website",
    url: absoluteUrl(url),
  },
  title,
  twitter: {
    card: "summary_large_image",
    creator: SITE_CONFIG.creator,
    description,
    images: [{ alt: imageAlt, url: absoluteUrl(imageUrl) }],
    title,
  },
});

interface CreateOgImageUrlProps {
  description: string;
  title: string;
}

/**
 * Builds a dynamic OG image URL for `/og`. Requires `SITE_FEATURES.dynamicOgImages`
 * and an active `app/(api)/og/route.tsx` (rename from `route.tsx.disabled`).
 */
export const createOgImageUrl = ({
  title,
  description,
}: CreateOgImageUrlProps) =>
  `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;
