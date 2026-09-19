import type { Metadata } from "next";
import {
  ArtistGrid,
  ArtworkGrid,
  CatalogEmpty,
  ValueGrid,
} from "@/components/sections/Cards";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { HomeHero } from "@/components/sections/HomeHero";
import { FeatureList } from "@/components/sections/Lists";
import { Section, SectionIntro } from "@/components/sections/Section";
import {
  artistGridItemFromSanity,
  artworkGridItemFromSanityWithArtist,
  featuredFirst,
} from "@/lib/catalog";
import { copyItems } from "@/lib/editorial";
import { site } from "@/lib/navigation";
import {
  getArtists,
  getArtworks,
  getEditorialPage,
  getFeaturedArtworks,
  getSiteSettings,
  getValues,
} from "@/lib/sanity/queries";
import { isSanityConfigured } from "@/sanity/config";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: {
      absolute: settings?.siteName || site.name,
    },
    description: settings?.description || site.description,
  };
}

export default async function Page() {
  const [artistRecords, featuredRecords, artworkRecords, values, homePage] =
    await Promise.all([
      getArtists(),
      getFeaturedArtworks(),
      getArtworks(),
      getValues(),
      getEditorialPage("home"),
    ]);

  const artists = featuredFirst(artistRecords)
    .slice(0, 6)
    .map(artistGridItemFromSanity);
  const wallSource =
    featuredRecords.length > 0 ? featuredRecords : artworkRecords.slice(0, 6);
  const wall = wallSource.map(artworkGridItemFromSanityWithArtist);
  const highlights = wall.slice(0, 3);
  const steps = copyItems(homePage?.items);
  const configured = isSanityConfigured();

  return (
    <>
      <HomeHero highlights={highlights} />

      <Section tone="oat">
        <SectionIntro
          eyebrow="Gallery"
          title="Fresh off the wall"
          body="A few recent pieces from the directory. Follow a work back to the person who made it."
        />
        {wall.length > 0 ? (
          <ArtworkGrid items={wall} featured />
        ) : (
          <CatalogEmpty
            title="Nothing hung yet"
            body={
              configured
                ? "No artworks are published yet. Feature a piece in Studio and it will land here."
                : "Home reads from Sanity. Add a project ID, publish work in Studio, or run the seed script."
            }
          />
        )}
      </Section>

      <Section tone="teal">
        <SectionIntro
          eyebrow="How it works"
          title={homePage?.title || "Find the work. Meet the people who made it."}
          body={
            homePage?.lede ||
            "No middlemen. No gatekeepers. Just artists and the people who love what they make."
          }
          invert
        />
        {steps.length > 0 ? <FeatureList items={steps} /> : null}
      </Section>

      <Section tone="seafoam">
        <SectionIntro
          eyebrow="Artists"
          title="Independent makers, nearby"
          body="A working directory of painters, potters, photographers, printmakers, and more across Atlantic Canada."
        />
        {artists.length > 0 ? (
          <ArtistGrid items={artists} />
        ) : (
          <CatalogEmpty
            title="The directory is waiting"
            body={
              configured
                ? "No artists are published yet. Add a document in Studio and it will show up here."
                : "The directory reads from Sanity. Connect a project, then publish artists or run the seed script."
            }
          />
        )}
      </Section>

      <Section tone="tangerine">
        <SectionIntro
          eyebrow="Values"
          title="What this place stands for"
          body="We built this for the working artist — clay under the nails, paint on the jeans, and a table that has to be cleared for dinner."
        />
        {values.length > 0 ? (
          <ValueGrid items={values} />
        ) : (
          <CatalogEmpty
            title="Values still being written"
            body={
              configured
                ? "No values are published yet. Add them in Studio."
                : "Values read from Sanity once a project is connected."
            }
          />
        )}
      </Section>

      <CtaBanner
        tone="rust"
        eyebrow="For artists"
        title="Are you making work here?"
        body="Join the directory and put your work in front of people who care about local art. Free during the pilot. No commission, ever."
        primaryHref="/for-artists"
        primaryLabel="Apply to the pilot"
        secondaryHref="/gallery"
        secondaryLabel="See the gallery"
      />
    </>
  );
}
