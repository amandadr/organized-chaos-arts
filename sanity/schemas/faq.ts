import { HelpCircleIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { faqGroups } from "./lists";

export const faqType = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (rule) => rule.required().max(160),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "group",
      title: "Group",
      type: "string",
      options: { list: [...faqGroups] },
      validation: (rule) => rule.required(),
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
      title: "Group and order",
      name: "groupOrder",
      by: [
        { field: "group", direction: "asc" },
        { field: "order", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: { title: "question", subtitle: "group" },
  },
});
