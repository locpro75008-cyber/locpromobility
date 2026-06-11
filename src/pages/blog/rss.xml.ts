import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const prerender = true;

const SITE = "https://locpromobility.fr";

export const GET: APIRoute = async () => {
  const now = new Date();
  const posts = (await getCollection("blog"))
    .filter((p) => p.data.pubDate <= now)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, 30);

  const items = posts
    .map(
      (p) => `
    <item>
      <title><![CDATA[${p.data.title}]]></title>
      <link>${SITE}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE}/blog/${p.slug}</guid>
      <description><![CDATA[${p.data.description}]]></description>
      <pubDate>${p.data.pubDate.toUTCString()}</pubDate>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog LocPro Mobilité</title>
    <link>${SITE}/blog</link>
    <description>Guides, conseils et actualités vélo électrique à Paris</description>
    <language>fr-FR</language>
    <atom:link href="${SITE}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
