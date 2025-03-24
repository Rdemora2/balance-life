import { z } from "zod";

export const ServiceSchema = z.object({
  id: z.number(),
  title: z.string(),
  icon: z.any(),
  description: z.string(),
  benefits: z.array(z.string()).optional(),
  experience: z.string().optional(),
  quote: z.string().optional(),
  image: z.string().url(),
  subcategories: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    )
    .optional(),
});

export type Service = z.infer<typeof ServiceSchema>;
