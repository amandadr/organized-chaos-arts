import { createClient } from "next-sanity";
import {
  dataset,
  projectId,
  sanityApiVersion,
  studioBasePath,
} from "@/sanity/config";

export const client = createClient({
  projectId: projectId || "unconfigured",
  dataset,
  apiVersion: sanityApiVersion,
  useCdn: true,
  stega: {
    studioUrl: studioBasePath,
  },
});
