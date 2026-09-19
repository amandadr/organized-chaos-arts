import { artistType } from "./artist";
import { artworkType } from "./artwork";
import { editorialPageType } from "./editorialPage";
import { faqType } from "./faq";
import { copyBlockType } from "./objects/copyBlock";
import { seoType } from "./objects/seo";
import { resourceType } from "./resource";
import { siteSettingsType } from "./siteSettings";
import { valueType } from "./value";

export const schemaTypes = [
  seoType,
  copyBlockType,
  siteSettingsType,
  artistType,
  artworkType,
  resourceType,
  valueType,
  faqType,
  editorialPageType,
];
