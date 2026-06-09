import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");
const site = env.PUBLIC_SITE_URL || "https://locpromobility.fr";

export default defineConfig({
  site,
  output: "hybrid",
  adapter: vercel(),
  integrations: [tailwind(), sitemap()],
  compressHTML: true,
});
