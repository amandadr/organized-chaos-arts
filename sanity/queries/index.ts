import { defineQuery } from "next-sanity";

const imageProjection = /* groq */ `
  asset,
  hotspot,
  crop,
  alt
`;

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
    siteName,
    tagline,
    description,
    contactEmail,
    instagramUrl,
    seo {
      title,
      description,
      image { ${imageProjection} }
    }
  }
`);

export const artistsQuery = defineQuery(`
  *[_type == "artist" && defined(slug.current)] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    shortBio,
    city,
    region,
    disciplines,
    featured,
    portrait { ${imageProjection} }
  }
`);

export const artistSlugsQuery = defineQuery(`
  *[_type == "artist" && defined(slug.current)] {
    "slug": slug.current
  }
`);

export const artistBySlugQuery = defineQuery(`
  *[_type == "artist" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    shortBio,
    bio,
    city,
    region,
    disciplines,
    website,
    instagramUrl,
    featured,
    portrait { ${imageProjection} },
    seo {
      title,
      description,
      image { ${imageProjection} }
    },
    "artworks": *[_type == "artwork" && artist._ref == ^._id] | order(year desc, title asc) {
      _id,
      title,
      "slug": slug.current,
      year,
      medium,
      dimensions,
      description,
      purchaseUrl,
      featured,
      image { ${imageProjection} }
    }
  }
`);

export const artworksQuery = defineQuery(`
  *[_type == "artwork" && defined(slug.current)] | order(year desc, title asc) {
    _id,
    title,
    "slug": slug.current,
    year,
    medium,
    dimensions,
    description,
    purchaseUrl,
    featured,
    image { ${imageProjection} },
    artist->{
      _id,
      name,
      "slug": slug.current
    }
  }
`);

export const featuredArtworksQuery = defineQuery(`
  *[_type == "artwork" && featured == true && defined(slug.current)] | order(year desc, title asc) {
    _id,
    title,
    "slug": slug.current,
    year,
    medium,
    featured,
    image { ${imageProjection} },
    artist->{
      _id,
      name,
      "slug": slug.current
    }
  }
`);

export const resourcesQuery = defineQuery(`
  *[_type == "resource" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    summary,
    featured,
    image { ${imageProjection} }
  }
`);

export const resourceSlugsQuery = defineQuery(`
  *[_type == "resource" && defined(slug.current)] {
    "slug": slug.current
  }
`);

export const resourceBySlugQuery = defineQuery(`
  *[_type == "resource" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    summary,
    body,
    publishedAt,
    featured,
    image { ${imageProjection} },
    seo {
      title,
      description,
      image { ${imageProjection} }
    }
  }
`);

export const valuesQuery = defineQuery(`
  *[_type == "value"] | order(order asc, title asc) {
    _id,
    title,
    body,
    order
  }
`);

export const faqsByGroupQuery = defineQuery(`
  *[_type == "faq" && group == $group] | order(order asc, question asc) {
    _id,
    question,
    answer,
    group,
    order
  }
`);

export const editorialPageQuery = defineQuery(`
  *[_type == "editorialPage" && pageId == $pageId][0] {
    _id,
    pageId,
    eyebrow,
    title,
    lede,
    secondaryTitle,
    secondaryBody,
    items[] {
      title,
      body
    },
    image { ${imageProjection} },
    seo {
      title,
      description,
      image { ${imageProjection} }
    }
  }
`);
