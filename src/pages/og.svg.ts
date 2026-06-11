import type { APIRoute } from "astro";

export const prerender = false;

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function wrap(text: string, maxLen: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (next.length > maxLen && line) {
      lines.push(line);
      line = w;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 3);
}

export const GET: APIRoute = ({ url }) => {
  const title = escapeXml(url.searchParams.get("title") || "LocPro Mobilité");
  const subtitle = escapeXml(
    url.searchParams.get("subtitle") || "Location vélo électrique à Paris"
  );
  const titleLines = wrap(title, 28);
  const subLines = wrap(subtitle, 40);

  const titleTspans = titleLines
    .map((l, i) => `<tspan x="60" dy="${i === 0 ? 0 : 36}">${l}</tspan>`)
    .join("");
  const subTspans = subLines
    .map((l, i) => `<tspan x="60" dy="${i === 0 ? 0 : 24}">${l}</tspan>`)
    .join("");

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#047857"/>
      <stop offset="100%" style="stop-color:#064e3b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <text x="60" y="80" font-family="system-ui,sans-serif" font-size="22" font-weight="600" fill="#a7f3d0">LocPro Mobilité</text>
  <text x="60" y="200" font-family="system-ui,sans-serif" font-size="42" font-weight="700" fill="#ffffff">${titleTspans}</text>
  <text x="60" y="${200 + titleLines.length * 36 + 40}" font-family="system-ui,sans-serif" font-size="24" fill="#d1fae5">${subTspans}</text>
  <text x="60" y="580" font-family="system-ui,sans-serif" font-size="18" fill="#6ee7b7">locpromobility.fr</text>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
