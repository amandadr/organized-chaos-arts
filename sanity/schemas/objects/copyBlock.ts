import { defineField, defineType } from "sanity";

export const copyBlockType = defineType({
  name: "copyBlock",
  title: "Copy block",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(400),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "body" },
  },
});
