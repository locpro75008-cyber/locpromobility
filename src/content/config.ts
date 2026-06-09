import { defineCollection, z } from "astro:content";

const vehicules = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      nom: z.string(),
      categorie: z.enum(["velo-electrique", "cargo", "trottinette", "gyropode"]),
      description: z.string(),
      tagline: z.string().optional(),
      tarifs: z.array(z.object({ label: z.string(), prix: z.string() })),
      caution: z.string().optional(),
      images: z.array(image()),
      disponible: z.boolean(),
      specs: z
        .array(z.object({ label: z.string(), value: z.string() }))
        .optional(),
      points_forts: z.array(z.string()).optional(),
      public_cible: z.array(z.string()).optional(),
    }),
});

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      heroImage: image().optional(),
    }),
});

export const collections = { vehicules, blog };
