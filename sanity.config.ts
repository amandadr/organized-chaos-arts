"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import {
  dataset,
  projectId,
  sanityApiVersion,
  studioBasePath,
} from "@/sanity/config";
import { resolve } from "@/sanity/presentation/resolve";
import { schemaTypes } from "@/sanity/schemas";
import { structure } from "@/sanity/structure";

const configuredProjectId = projectId || "unconfigured";

export default defineConfig({
  name: "oca",
  title: "Organized Chaos Arts",
  projectId: configuredProjectId,
  dataset,
  basePath: studioBasePath,
  plugins: [
    structureTool({ structure }),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
    visionTool({ defaultApiVersion: sanityApiVersion }),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter((template) => template.schemaType !== "siteSettings"),
  },
});
