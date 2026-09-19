import { defineField } from "sanity";

/** Image with hotspot plus required alt text for public artwork and portraits. */
export function altImageField(
  name: string,
  title: string,
  { required = true }: { required?: boolean } = {},
) {
  return defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Alternative text",
        type: "string",
        description:
          "Describe the image for people who cannot see it. Do not start with “image of”.",
        hidden: required ? undefined : ({ parent }) => !parent?.asset,
        validation: (rule) =>
          required
            ? rule.required().max(160)
            : rule.max(160).custom((alt, context) => {
                const parent = context.parent as { asset?: unknown } | undefined;
                if (parent?.asset && !alt) {
                  return "Alt text is required when an image is set.";
                }
                return true;
              }),
      }),
    ],
    validation: required
      ? (rule) => rule.required()
      : (rule) =>
          rule.custom((value) => {
            if (!value?.asset) return true;
            if (!value.alt) {
              return "Alt text is required when an image is set.";
            }
            return true;
          }),
  });
}
