import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";
import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");
const site = env.PUBLIC_SITE_URL || "https://locpromobility.fr";

export default defineConfig({
  site,
  output: "hybrid",
  adapter: node({ mode: "standalone" }),
  integrations: [tailwind(), sitemap()],
  compressHTML: true,
});
