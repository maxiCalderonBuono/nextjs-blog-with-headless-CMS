import * as z from "zod";

export const ogImageSchema = z.object({
  heading: z.string(),
  type: z.string(),
  published: z.string(),
  postImage: z.string(),
  mode: z.enum(["light", "dark"]).default("dark"),
});
