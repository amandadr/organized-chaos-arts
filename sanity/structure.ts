import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site settings")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Site settings"),
        ),
      S.divider(),
      S.documentTypeListItem("artist").title("Artists"),
      S.documentTypeListItem("artwork").title("Artwork"),
      S.divider(),
      S.documentTypeListItem("resource").title("Resources"),
      S.documentTypeListItem("value").title("Values"),
      S.documentTypeListItem("faq").title("FAQs"),
      S.documentTypeListItem("editorialPage").title("Page copy"),
    ]);
