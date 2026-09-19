import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { editorialPageIds } from "./lists";
import { altImageField } from "./objects/altImage";

export const editorialPageType = defineType({
  name: "editorialPage",
  title: "Page copy",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "pageId",
      title: "Page",
      type: "string",
      options: { list: [...editorialPageIds] },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      validation: (rule) => rule.max(40),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "lede",
      title: "Lede",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    altImageField("image", "Hero image", { required: false }),
    defineField({
      name: "secondaryTitle",
      title: "Secondary title",
      type: "string",
      validation: (rule) => rule.max(120),
    }),
    defineField({
      name: "secondaryBody",
      title: "Secondary body",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "items",
      title: "List items",
      type: "array",
      of: [{ type: "copyBlock" }],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "pageId" },
  },
});
