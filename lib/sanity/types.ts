import type {
  ArtistBySlugQueryResult,
  ArtistsQueryResult,
  ArtworksQueryResult,
  EditorialPageQueryResult,
  FaqsByGroupQueryResult,
  FeaturedArtworksQueryResult,
  ResourceBySlugQueryResult,
  ResourcesQueryResult,
  SiteSettingsQueryResult,
  ValuesQueryResult,
} from "@/sanity/types";

export type ArtistCard = ArtistsQueryResult[number];
export type ArtistProfile = NonNullable<ArtistBySlugQueryResult>;
export type ArtworkCard = ArtistProfile["artworks"][number];
export type ArtworkWithArtist = ArtworksQueryResult[number];
export type FeaturedArtwork = FeaturedArtworksQueryResult[number];
export type SiteSettings = NonNullable<SiteSettingsQueryResult>;
export type ResourceCard = ResourcesQueryResult[number];
export type ResourceArticle = NonNullable<ResourceBySlugQueryResult>;
export type ValueItem = ValuesQueryResult[number];
export type FaqItem = FaqsByGroupQueryResult[number];
export type EditorialPage = NonNullable<EditorialPageQueryResult>;
