import { HeartIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const valueType = defineType({
  name: "value",
  title: "Value",
  type: "document",
  icon: HeartIcon,
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
      rows: 4,
      validation: (rule) => rule.required().max(400),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 0,
      validation: (rule) => rule.integer(),
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "body" },
  },
});
