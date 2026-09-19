export const sanityApiVersion = "2026-02-01";
export const studioBasePath = "/studio";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export function isSanityConfigured() {
  return Boolean(projectId && dataset);
}
