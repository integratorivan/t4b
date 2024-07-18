import type { Config } from "vike/types";

// https://vike.dev/config
export default {
  // https://vike.dev/clientRouting
  clientRouting: true,

  hydrationCanBeAborted: true,
  // https://vike.dev/meta
  meta: {
    // Define new setting 'description'
    description: {
      env: { server: true },
    },

    // Define new setting 'title'
    title: {
      env: { client: true, server: true },
    },
  },
} satisfies Config;
