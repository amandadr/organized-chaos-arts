import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "unconfigured",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  },
  typegen: {
    path: "./sanity/queries/**/*.{ts,tsx}",
    schema: "./sanity/schema.json",
    generates: "./sanity/types.ts",
  },
});
