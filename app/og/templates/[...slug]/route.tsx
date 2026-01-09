import { generate as DefaultImage } from "fumadocs-ui/og";
import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/config/site";
import { getTemplatesPageImage, templatesSource } from "@/lib/fumadocs";

export const revalidate = false;

export const GET = async (
  _req: Request,
  { params }: RouteContext<"/og/templates/[...slug]">
) => {
  const { slug } = await params;
  const page = templatesSource.getPage(slug.slice(0, -1));

  if (!page) {
    notFound();
  }

  return new ImageResponse(
    <DefaultImage
      description={page.data.description}
      site={SITE_CONFIG.name}
      title={page.data.title}
    />,
    {
      width: 1200,
      height: 630,
    }
  );
};

export const generateStaticParams = () =>
  templatesSource.getPages().map((page) => ({
    lang: page.locale,
    slug: getTemplatesPageImage(page).segments,
  }));
