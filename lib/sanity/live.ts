import { defineLive } from "next-sanity/live";
import { client } from "./client";

const token = process.env.SANITY_API_READ_TOKEN;

export const { sanityFetch, SanityLive } = defineLive({
  // Published fetches omit `serverToken` unless it is also on the client.
  // Private datasets then return empty arrays over the public CDN.
  client: client.withConfig({
    token: token || undefined,
  }),
  serverToken: token || false,
  browserToken: token || false,
});
