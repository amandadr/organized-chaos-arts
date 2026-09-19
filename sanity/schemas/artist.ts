import { UsersIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { altImageField } from "./objects/altImage";
import { atlanticRegions, disciplines } from "./lists";

export const artistType = defineType({
  name: "artist",
  title: "Artist",
  type: "document",
  icon: UsersIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required().min(1).max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    altImageField("portrait", "Portrait"),
    defineField({
      name: "shortBio",
      title: "Short bio",
      type: "text",
      rows: 3,
      description: "Used on cards and listings.",
      validation: (rule) => rule.required().max(280),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 8,
      description: "Used on the artist profile.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "region",
      title: "Province / territory",
      type: "string",
      options: { list: [...atlanticRegions], layout: "radio" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "disciplines",
      title: "Disciplines",
      type: "array",
      of: [{ type: "string" }],
      options: { list: [...disciplines], layout: "grid" },
      validation: (rule) => rule.required().min(1).unique(),
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "url",
      validation: (rule) =>
        rule.uri({ scheme: ["http", "https"], allowRelative: false }),
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
      validation: (rule) =>
        rule.uri({ scheme: ["https"], allowRelative: false }),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
  preview: {
    select: {
      title: "name",
      city: "city",
      media: "portrait",
    },
    prepare({ title, city, media }) {
      return {
        title,
        subtitle: city,
        media,
      };
    },
  },
});
