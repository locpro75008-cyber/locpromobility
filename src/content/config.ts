import { defineCollection, z } from "astro:content";

const vehicules = defineCollection({
  type: "content",
  schema: z.object({
    nom: z.string(),
    categorie: z.enum([
      "velo-electrique",
      "cargo",
      "trottinette",
      "gyropode",
    ]),
    description: z.string(),
    tarifs: z.array(
      z.object({
        label: z.string(),
        prix: z.string(),
      }),
    ),
    images: z.array(z.string()),
    disponible: z.boolean(),
    specs: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        }),
      )
      .optional(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { vehicules, blog };
