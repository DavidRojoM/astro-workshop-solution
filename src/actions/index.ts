import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  // add rate action
  rate: defineAction({
    input: z.object({
      id: z.string(),
      rate: z.enum(["bad", "good", "none"]),
    }),
    handler: (params) => {
      console.log(params);
    },
  }),
};
