import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/config/site";
import { type ChangelogPageData, getChangelogPages } from "@/lib/changelog";
import { absoluteUrl } from "@/lib/url";

export const revalidate = false;

export const GET = () => {
  const pages = getChangelogPages();

  const items = pages
    .map((page) => {
      const data = page.data as ChangelogPageData;
      const date = page.date?.toUTCString() ?? new Date().toUTCString();
      const link = absoluteUrl(page.url);

      return `    <item>
      <title><![CDATA[${data.title}]]></title>
      <link>${link}</link>
      <guid>${link}</guid>
      <description><![CDATA[${data.description ?? ""}]]></description>
      <pubDate>${date}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_CONFIG.name} Changelog</title>
    <link>${absoluteUrl("/")}</link>
    <description>${SITE_CONFIG.description}</description>
    <language>en-us</language>
    <atom:link href="${absoluteUrl("/rss.xml")}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
};
