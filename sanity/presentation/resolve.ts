import { defineLocations, type PresentationPluginOptions } from "sanity/presentation";

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    artist: defineLocations({
      select: {
        title: "name",
        slug: "slug.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Artist",
            href: doc?.slug ? `/artists/${doc.slug}` : "/artists",
          },
          { title: "Artist directory", href: "/artists" },
        ],
      }),
    }),
    artwork: defineLocations({
      select: {
        title: "title",
        artistSlug: "artist->slug.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Artwork",
            href: doc?.artistSlug ? `/artists/${doc.artistSlug}` : "/gallery",
          },
          { title: "Gallery", href: "/gallery" },
        ],
      }),
    }),
    siteSettings: defineLocations({
      select: { title: "siteName" },
      resolve: () => ({
        locations: [{ title: "Home", href: "/" }],
      }),
    }),
    resource: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Resource",
            href: doc?.slug ? `/resources/${doc.slug}` : "/resources",
          },
          { title: "Resources", href: "/resources" },
        ],
      }),
    }),
    value: defineLocations({
      select: { title: "title" },
      resolve: (doc) => ({
        locations: [
          { title: doc?.title || "Value", href: "/values" },
          { title: "Home", href: "/" },
        ],
      }),
    }),
    faq: defineLocations({
      select: { title: "question", group: "group" },
      resolve: (doc) => {
        const href =
          doc?.group === "artists"
            ? "/for-artists"
            : doc?.group === "values"
              ? "/values"
              : "/contact";
        return {
          locations: [{ title: doc?.title || "FAQ", href }],
        };
      },
    }),
    editorialPage: defineLocations({
      select: { title: "title", pageId: "pageId" },
      resolve: (doc) => {
        const pageId = doc?.pageId;
        const href =
          pageId === "home"
            ? "/"
            : pageId === "for-artists"
              ? "/for-artists"
              : pageId
                ? `/${pageId}`
                : "/";
        return {
          locations: [{ title: doc?.title || "Page", href }],
        };
      },
    }),
  },
};
