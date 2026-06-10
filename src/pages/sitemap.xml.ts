import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { locations } from "../data/locations";

export const prerender = true;

const SITE = "https://locpromobility.fr";

function url(path: string, priority: string, changefreq: string, lastmod?: string): string {
  return `
  <url>
    <loc>${SITE}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
  </url>`;
}

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().split("T")[0];

  const vehicules = await getCollection("vehicules");
  const blogs = await getCollection("blog");

  const staticPages = [
    url("/", "1.0", "weekly", today),
    url("/catalogue", "0.9", "weekly", today),
    url("/tarifs", "0.8", "monthly", today),
    url("/reserver", "0.9", "monthly", today),
    url("/entreprises", "0.8", "monthly", today),
    url("/devis", "0.8", "monthly", today),
    url("/contact", "0.7", "monthly", today),
    url("/faq", "0.7", "monthly", today),
    url("/blog", "0.8", "weekly", today),
    url("/zones", "0.8", "monthly", today),
    url("/location-velo-electrique-paris", "0.8", "monthly", today),
    url("/location-velo-electrique-vs-velib", "0.7", "monthly", today),
    url("/location-longue-duree", "0.9", "monthly", today),
    url("/location-courte-duree", "0.9", "monthly", today),
    url("/comment-ca-marche", "0.7", "monthly", today),
    url("/a-propos", "0.6", "monthly", today),
    url("/mentions-legales", "0.3", "yearly"),
    url("/politique-confidentialite", "0.3", "yearly"),
    url("/cgu", "0.3", "yearly"),
  ];

  const vehiculePages = vehicules.map((v) =>
    url(`/catalogue/${v.slug}`, "0.8", "weekly", today)
  );

  const now = new Date();
  const blogPages = blogs
    .filter((b) => b.data.pubDate <= now)
    .map((b) =>
      url(
        `/blog/${b.slug}`,
        "0.7",
        "monthly",
        b.data.pubDate.toISOString().split("T")[0]
      )
    );

  const locationPages = locations.map((l) =>
    url(`/location/${l.slug}`, "0.7", "monthly", today)
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.join("")}
${vehiculePages.join("")}
${blogPages.join("")}
${locationPages.join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
