import { defineCollection } from "astro:content";
import { z } from "astro:content";

// Add movies collection here
const movies = defineCollection({
  schema: z.object({
    title: z.string(),
    director: z.string(),
    date: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  // export movies collection
  movies,
};
