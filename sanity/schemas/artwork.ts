import { ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { altImageField } from "./objects/altImage";

const nextYear = new Date().getFullYear() + 1;

export const artworkType = defineType({
  name: "artwork",
  title: "Artwork",
  type: "document",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(140),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "artist",
      title: "Artist",
      type: "reference",
      to: [{ type: "artist" }],
      weak: false,
      validation: (rule) => rule.required(),
    }),
    altImageField("image", "Image"),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (rule) => rule.min(1900).max(nextYear).integer(),
    }),
    defineField({
      name: "medium",
      title: "Medium",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "dimensions",
      title: "Dimensions",
      type: "string",
      description: "Free text, e.g. 24 × 18 in or variable.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "purchaseUrl",
      title: "External purchase link",
      type: "url",
      description:
        "Optional. Only if the artist sells this piece off-site. OCA does not process sales.",
      validation: (rule) =>
        rule.uri({ scheme: ["http", "https"], allowRelative: false }),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      artist: "artist.name",
      media: "image",
    },
    prepare({ title, artist, media }) {
      return {
        title,
        subtitle: artist,
        media,
      };
    },
  },
});
