import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN.\nCopy .env.example to .env.local, create a Sanity project, and add an Editor token.",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-02-01",
  token,
  useCdn: false,
});

function unsplash(id) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;
}

const assets = {};

async function uploadImage(key, url, filename) {
  if (assets[key]) return assets[key];
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  const asset = await client.assets.upload("image", buffer, { filename });
  assets[key] = {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
  };
  return assets[key];
}

function imageWithAlt(key, alt) {
  return { ...assets[key], alt };
}

const artists = [
  {
    _id: "artist.alexandria",
    name: "Alexandria-Catherine MacKinnon-Beauregard",
    slug: "alexandria-catherine-mackinnon-beauregard",
    city: "Halifax",
    region: "NS",
    disciplines: ["ceramics", "sculpture"],
    featured: true,
    website: "https://example.com/alexandria",
    instagramUrl: "https://www.instagram.com/",
    shortBio:
      "Coil-built vessels whose names barely fit a gallery label. Ash glaze, backyard kiln, and a bio that keeps going after the fold.",
    bio: `Alexandria-Catherine works in a shared Dartmouth studio through the week and fires on weekends in a brick kiln behind a North End house that is not quite hers.

The work is meant to be used — soup, flowers, the odd leftover — and to hold a bit of the neighbourhood in the clay. She titles pieces after streets that no longer exist under those names, then writes the old name on the foot in pencil so it survives the glaze but not the dishwasher.

This biography is intentionally long. It should wrap on a phone, stay readable on a wide profile, and still feel like a person rather than a press release. She exhibits rarely. She answers email slowly. The kiln is louder than she is.`,
    portraitKey: "portrait-long",
    portraitAlt:
      "A person with dark hair looking slightly off camera, photographed outdoors",
    seo: {
      title: "Alexandria-Catherine MacKinnon-Beauregard — Ceramics",
      description:
        "Coil-built vessels and backyard firings from Halifax, Nova Scotia.",
    },
  },
  {
    _id: "artist.jo",
    name: "Jo",
    slug: "jo",
    city: "Sydney",
    region: "NS",
    disciplines: ["wood"],
    featured: false,
    shortBio: "Spoons.",
    bio: "Jo carves spoons.",
    portraitKey: "portrait-short",
    portraitAlt: "Close portrait of a person with short hair and a wool sweater",
  },
  {
    _id: "artist.lea",
    name: "Léa Boudreau",
    slug: "lea-boudreau",
    city: "Dieppe",
    region: "NB",
    disciplines: ["glass"],
    featured: true,
    website: "https://example.com/lea",
    shortBio:
      "Blown vessels that catch kitchen light. Thin walls, thick feet, colours named after weather.",
    bio: "Léa works a torch and a glory hole in a shared shop off Acadie Avenue. She talks about viscosity the way other people talk about dough. Nothing leaves the bench until it can stand up to a dishwasher.",
    portraitKey: "portrait-lea",
    portraitAlt: "Portrait of a person standing in open daylight",
  },
  {
    _id: "artist.sam",
    name: "Sam Okonkwo",
    slug: "sam-okonkwo",
    city: "Fredericton",
    region: "NB",
    disciplines: ["illustration"],
    featured: false,
    instagramUrl: "https://www.instagram.com/",
    shortBio:
      "Ink drawings of buses, kitchens, and the particular boredom of a Saturday in town.",
    bio: "Sam draws on leftover print proofs and grocery receipts when the good paper runs out. The work is funny without being mean, and detailed without asking you to squint.",
    portraitKey: "portrait-sam",
    portraitAlt: "Portrait of a person against a dark background",
  },
  {
    _id: "artist.river",
    name: "River Quinn",
    slug: "river-quinn",
    city: "St. John's",
    region: "NL",
    disciplines: ["collage", "mixed-media"],
    featured: false,
    shortBio:
      "Cut-paper rooms assembled from seed catalogues and ferry tickets. No works attached yet — tests the empty studio.",
    bio: "River treats the island as a scrapbook that already happened. This record exists so the directory can render an artist with no artwork.",
    portraitKey: "portrait-river",
    portraitAlt: "Portrait of a person with hair pulled back, facing the camera",
  },
];

const artworks = [
  {
    _id: "artwork.january-vessel",
    title: "January Vessel",
    slug: "january-vessel",
    artistId: "artist.alexandria",
    year: 2025,
    medium: "Stoneware, ash glaze",
    dimensions: "28 × 22 × 22 cm",
    featured: true,
    description: "Fired during the cold snap. Wide mouth, quiet foot, meant for stew.",
    purchaseUrl: "https://example.com/shop/january-vessel",
    imageKey: "work-landscape-1",
    imageAlt: "A wide ceramic vessel on a wooden table, landscape crop",
  },
  {
    _id: "artwork.north-end-bowl",
    title: "North End Bowl",
    slug: "north-end-bowl",
    artistId: "artist.alexandria",
    year: 2024,
    medium: "Hand-built stoneware",
    featured: false,
    description: "A breakfast bowl that still has the seam of the coil inside.",
    imageKey: "work-portrait-1",
    imageAlt: "A tall ceramic form photographed vertically against a wall",
  },
  {
    _id: "artwork.winter-pourer",
    title: "Winter Pourer",
    slug: "winter-pourer",
    artistId: "artist.alexandria",
    year: 2025,
    medium: "Wheel-thrown pitcher",
    dimensions: "variable",
    featured: false,
    imageKey: "work-square-1",
    imageAlt: "A ceramic pitcher photographed close, filling the frame",
  },
  {
    _id: "artwork.storm-stool",
    title: "Storm Stool",
    slug: "storm-stool",
    artistId: "artist.jo",
    medium: "Salvaged maple",
    featured: false,
    description: "Three legs. No year on purpose — tests a missing date.",
    imageKey: "work-landscape-2",
    imageAlt: "A wooden stool in a workshop, photographed horizontally",
  },
  {
    _id: "artwork.weather-glass",
    title: "Weather Glass",
    slug: "weather-glass",
    artistId: "artist.lea",
    year: 2025,
    medium: "Blown glass",
    featured: true,
    description: "Sea-green, thick foot, thin enough to sing if you wet the rim.",
    imageKey: "work-portrait-2",
    imageAlt: "A tall glass vessel catching window light, portrait crop",
  },
  {
    _id: "artwork.fog-bowl",
    title: "Fog Bowl",
    slug: "fog-bowl",
    artistId: "artist.lea",
    year: 2023,
    medium: "Blown glass",
    featured: false,
    imageKey: "work-landscape-3",
    imageAlt: "A pale glass bowl on a windowsill, landscape crop",
  },
  {
    _id: "artwork.saturday-bus",
    title: "Saturday Bus",
    slug: "saturday-bus",
    artistId: "artist.sam",
    year: 2025,
    medium: "Ink on proof paper",
    featured: false,
    description: "Everyone looking at their phones except the one person who is not.",
    imageKey: "work-portrait-3",
    imageAlt: "An ink drawing photographed as a vertical page",
  },
];

const values = [
  {
    _id: "value.seen",
    title: "Seen, not sold",
    body: "We link to your shop. We do not take a cut. Your sales are your business.",
    order: 0,
  },
  {
    _id: "value.readable",
    title: "Readable by everyone",
    body: "Clear type, strong contrast, keyboard paths, and no decorative obstacles in the way of the work.",
    order: 1,
  },
  {
    _id: "value.local",
    title: "Local on purpose",
    body: "This is a hub for people making art in Atlantic Canada — neighbours first, algorithms never.",
    order: 2,
  },
  {
    _id: "value.honest",
    title: "Honest about the work",
    body: "Process, doubt, and unfinished thoughts belong here as much as the finished piece on the wall.",
    order: 3,
  },
];

const faqs = [
  {
    _id: "faq.artists.who",
    group: "artists",
    order: 0,
    question: "Who can apply?",
    answer:
      "Independent artists working in any medium — paint, clay, performance, code, cloth, sound. If you make things with intention in Atlantic Canada, you belong here.",
  },
  {
    _id: "faq.artists.fee",
    group: "artists",
    order: 1,
    question: "Is there a fee?",
    answer:
      "No. The directory is free for artists during the pilot. If that ever changes, we will say so clearly and long before it happens.",
  },
  {
    _id: "faq.artists.commission",
    group: "artists",
    order: 2,
    question: "Do you take a commission?",
    answer:
      "No. We will link to your shop, studio, or Instagram. Money stays between you and the buyer.",
  },
  {
    _id: "faq.artists.need",
    group: "artists",
    order: 3,
    question: "What do you need from me?",
    answer:
      "A short bio, a few images of the work, and a way for people to follow you. A few hours to set up; after that you update when you want.",
  },
  {
    _id: "faq.artists.community",
    group: "artists",
    order: 4,
    question: "What are the community expectations?",
    answer:
      "Be accurate about your work, generous with other artists, and careful with the people looking. This is a room for looking, not for picking fights.",
  },
  {
    _id: "faq.contact.speed",
    group: "contact",
    order: 0,
    question: "How fast do you reply?",
    answer:
      "We read everything. Weekdays, expect two or three days. If it is urgent, say so in the subject line.",
  },
  {
    _id: "faq.contact.suggest",
    group: "contact",
    order: 1,
    question: "Can I suggest an artist?",
    answer:
      "Yes. Send a name, a city, and a link to their work. We follow up with them directly.",
  },
  {
    _id: "faq.contact.exhibit",
    group: "contact",
    order: 2,
    question: "Do you exhibit physical work?",
    answer:
      "Online first, during the pilot. Pop-ups and partner walls come later, once the directory is solid.",
  },
  {
    _id: "faq.values.talk",
    group: "values",
    order: 0,
    question: "How do we talk about work?",
    answer:
      "Describe what is in front of you. Credit the maker. Do not treat a practice as a vibe or a brand first.",
  },
  {
    _id: "faq.values.who",
    group: "values",
    order: 1,
    question: "Who is this space for?",
    answer:
      "Independent artists in Atlantic Canada and the people who want to look carefully at what they make. Harassment, scraping, or using the directory as a lead list is out.",
  },
  {
    _id: "faq.values.wrong",
    group: "values",
    order: 2,
    question: "What happens when something is wrong?",
    answer:
      "Write to us. We will look at it with the artist involved. We would rather repair a page than perform a public pile-on.",
  },
];

const resources = [
  {
    _id: "resource.sketchbook",
    title: "Keeping a sketchbook in a small kitchen",
    slug: "keeping-a-sketchbook-in-a-small-kitchen",
    category: "Field notes",
    featured: true,
    publishedAt: "2026-03-12T12:00:00.000Z",
    imageKey: "work-portrait-3",
    imageAlt: "An open notebook and pen on a kitchen table",
    summary:
      "You do not need a perfect studio. You need a table, twenty minutes, and permission to be wrong on paper.",
    body: `A sketchbook is not a finished thing. It is a place to be wrong between the kettle and the mail. If the only table in the house is also the dining table, that is still a studio for twenty minutes.

Put the book where you already sit. Leave a pencil in it. Date the page even when the drawing is embarrassing. The habit is the work; the pretty spread is a side effect.

You do not need a perfect lamp. Face the window if you have one. If you do not, the overhead is enough to prove you were there.

When the table has to be cleared, the book closes. That is not a failure of practice. That is a practice that fits a life.`,
  },
  {
    _id: "resource.pricing",
    title: "How to price a first edition",
    slug: "how-to-price-a-first-edition",
    category: "Practice",
    featured: false,
    publishedAt: "2026-04-02T12:00:00.000Z",
    imageKey: "work-landscape-2",
    imageAlt: "Printmaking tools on a workbench",
    summary:
      "Count materials, time, and the cost of being able to make the next one. Then say the number out loud.",
    body: `Pricing is not a personality test. It is arithmetic plus the nerve to keep the number when someone flinches.

Start with materials you cannot reuse, then the hours you would actually pay someone else, then a little for the next edition so you are not always starting from zero. If the total feels embarrassing, that is often a sign it is honest.

Say it out loud before you write it on a label. If you cannot hear yourself charge that, the edition is not ready — or the price is still too kind.

You can always lower a price later. Raising one after people have already bought feels like a retraction. Start where you can stand.`,
  },
  {
    _id: "resource.photographing",
    title: "Photographing work on a cloudy day",
    slug: "photographing-work-on-a-cloudy-day",
    category: "Studio",
    featured: false,
    publishedAt: "2026-05-18T12:00:00.000Z",
    imageKey: "work-square-1",
    imageAlt: "A still object photographed in soft indoor light",
    summary:
      "Overcast light is a gift. Face the window, skip the flash, and let the object keep its edges.",
    body: `Direct sun lies about glaze, glass, and anything with a sheen. Clouds tell the truth.

Put the work near a window, not in it. Turn off the overhead if it is warmer than the daylight. Take more pictures than you think, then pick the one where the object still looks like itself.

A phone is enough if you hold still. A sheet of white paper is a reflector. A dirty lens is the actual problem.

Crop after. The photograph is evidence, not a poster, until you decide it is both.`,
  },
];

const pages = [
  {
    _id: "page.home",
    pageId: "home",
    eyebrow: "How it works",
    title: "Find the work. Meet the people who made it.",
    lede: "No middlemen. No gatekeepers. Just artists and the people who love what they make.",
    items: [
      {
        title: "Find the makers",
        body: "Browse the directory by craft or city. Painters, potters, photographers, and printmakers working down the street.",
      },
      {
        title: "Look at the work",
        body: "The gallery is hung slowly on purpose. Follow a piece back to the person who made it.",
      },
      {
        title: "Stay in the room",
        body: "Read the notes, join the pilot, or write to us. The community is the point — not the feed.",
      },
    ],
  },
  {
    _id: "page.about",
    pageId: "about",
    eyebrow: "About",
    title: "A home for artists who make their own way",
    lede: "Organized Chaos Arts is an artist-led community platform being built toward a co-operative, rooted in Atlantic Canada. We exist so independent and emerging artists can be found without being flattened into content.",
    secondaryTitle: "Built by hand, on purpose",
    secondaryBody:
      "The public site is the first slice: a directory, a gallery, and a set of notes for working artists. Membership, accounts, and billing come later — after the looking is good.\n\nThe roster in Studio is the real directory. Start with the artist pages; the structure is the thing we are proving.",
    imageKey: "work-landscape-2",
    imageAlt: "A wooden studio interior photographed horizontally",
    items: [
      {
        title: "Visibility",
        body: "A place where work is seen by people who already care about art — not by a ranking engine.",
      },
      {
        title: "Connection",
        body: "Artists, neighbours, and opportunities in the same room, with names attached to both.",
      },
      {
        title: "Stewardship",
        body: "Built toward a co-operative so the people making the work help decide how the room is run.",
      },
    ],
  },
  {
    _id: "page.values",
    pageId: "values",
    eyebrow: "Values",
    title: "Shared community standards",
    lede: "Art grows best where everyone knows the ground rules and respects the people making the work. These are the ones we will keep repeating.",
    secondaryTitle: "What we will not trade away",
    secondaryBody:
      "Four commitments that survive the pilot, the CMS, and whatever comes after membership.",
    imageKey: "work-portrait-1",
    imageAlt: "A tall ceramic form photographed vertically against a wall",
  },
  {
    _id: "page.for-artists",
    pageId: "for-artists",
    eyebrow: "Welcome",
    title: "For independent artists",
    lede: "This is a home for artists who want to be seen, not sold to. Show the work, find your people, and keep the relationship with buyers in your own hands.",
    secondaryTitle: "What joining actually means",
    secondaryBody:
      "A few hours to gather images. No posting schedule. No marketplace fees hiding in the footer.",
    imageKey: "work-square-1",
    imageAlt: "A ceramic pitcher photographed close, filling the frame",
    items: [
      {
        title: "Send a little proof",
        body: "A short bio, a city, and a few images or a link. A website, an Instagram, or a folder of pictures is enough.",
      },
      {
        title: "We look, then we write",
        body: "Pilot applications are read by people, not a form robot. Expect a reply within two weeks.",
      },
      {
        title: "You keep the shop",
        body: "Your profile points at your own selling channels. Organized Chaos does not take a cut.",
      },
    ],
  },
  {
    _id: "page.pilot",
    pageId: "pilot",
    eyebrow: "Pilot",
    title: "Join the first room",
    lede: "Organized Chaos Arts is looking for a small group of working artists to help shape the directory from the ground up — before accounts, before billing, while the looking can still change.",
    secondaryTitle: "How the pilot runs",
    secondaryBody:
      "Small on purpose. We would rather know twelve artists well than publish a hundred empty profiles.",
    imageKey: "work-landscape-1",
    imageAlt: "A wide ceramic vessel on a wooden table, landscape crop",
    items: [
      {
        title: "Apply",
        body: "A bio, a city, and a few images. We are looking for working practices, not follower counts.",
      },
      {
        title: "Shape the directory",
        body: "Pilot artists get a profile and a real say in what the public pages need before membership exists.",
      },
      {
        title: "Stay or step back",
        body: "There is no posting quota. If the room is useful, stay. If it is not, tell us why on the way out.",
      },
    ],
  },
  {
    _id: "page.support",
    pageId: "support",
    eyebrow: "Support",
    title: "Keep the lights on",
    lede: "Organized Chaos runs on community energy. Paid membership is not wired yet — the useful help, today, is attention, artists, and patience.",
    secondaryTitle: "What actually helps right now",
    secondaryBody:
      "We would rather say this plainly than put a fake donate button on the page.",
    imageKey: "work-landscape-3",
    imageAlt: "A pale glass bowl on a windowsill, landscape crop",
    items: [
      {
        title: "Share the directory",
        body: "Send an artist page to someone who actually looks at art. Word of mouth is the current budget.",
      },
      {
        title: "Apply, or nominate",
        body: "A living directory is the whole project. Names and work matter more than a donate button that does not exist yet.",
      },
      {
        title: "Later: membership",
        body: "Stripe and member accounts are a later phase. When they arrive, they will be optional and clearly explained.",
      },
    ],
  },
  {
    _id: "page.contact",
    pageId: "contact",
    eyebrow: "Reach out",
    title: "Contact Organized Chaos",
    lede: "Write to the people behind the gallery. We read everything and answer within two or three weekdays.",
    secondaryTitle: "Before you write",
    secondaryBody:
      "Artist applications can also start on For artists. Press, partnerships, and corrections can use this form.",
    imageKey: "work-portrait-3",
    imageAlt: "An ink drawing photographed as a vertical page",
  },
  {
    _id: "page.instagram",
    pageId: "instagram",
    eyebrow: "Feed",
    title: "Studio glimpses, without the algorithm",
    lede: "Artist features, process shots, and community notes will live here once the public feed is connected. Until then, the gallery is the place to look.",
    secondaryTitle: "Stills from the directory",
    secondaryBody: "A grid from the catalogue until a live feed is connected.",
  },
];

const imagePlan = [
  ["portrait-long", unsplash("photo-1544005313-94ddf0286df2"), "portrait-long.jpg"],
  ["portrait-short", unsplash("photo-1472099645785-5658abf4ff4e"), "portrait-short.jpg"],
  ["portrait-lea", unsplash("photo-1524504388940-b1c1722653e1"), "portrait-lea.jpg"],
  ["portrait-sam", unsplash("photo-1507003211169-0a1dd7228f2d"), "portrait-sam.jpg"],
  ["portrait-river", unsplash("photo-1534528741775-53994a69daeb"), "portrait-river.jpg"],
  ["work-landscape-1", unsplash("photo-1578749556568-bc2c40e68b61"), "work-landscape-1.jpg"],
  ["work-portrait-1", unsplash("photo-1565193566173-7a0ee3dbe261"), "work-portrait-1.jpg"],
  ["work-square-1", unsplash("photo-1610701596007-11502861dcfa"), "work-square-1.jpg"],
  ["work-landscape-2", unsplash("photo-1416879595882-3373a0480b5b"), "work-landscape-2.jpg"],
  ["work-portrait-2", unsplash("photo-1602143407151-7111542de6e8"), "work-portrait-2.jpg"],
  ["work-landscape-3", unsplash("photo-1601925260368-ae2f83cf8b7f"), "work-landscape-3.jpg"],
  ["work-portrait-3", unsplash("photo-1455390582262-044cdead277a"), "work-portrait-3.jpg"],
];

async function main() {
  console.log(`Seeding ${projectId}/${dataset}…`);

  for (const [key, url, filename] of imagePlan) {
    process.stdout.write(`Uploading ${filename}… `);
    await uploadImage(key, url, filename);
    console.log("ok");
  }

  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    siteName: "Organized Chaos Arts",
    tagline: "Art from the neighborhood, made by hand",
    description:
      "A local cultural hub for independent artists across Atlantic Canada.",
    contactEmail: "hello@organizedchaosarts.ca",
    instagramUrl: "https://www.instagram.com/",
    seo: {
      title: "Organized Chaos Arts",
      description:
        "A local cultural hub for independent artists across Atlantic Canada.",
    },
  });

  for (const artist of artists) {
    await client.createOrReplace({
      _id: artist._id,
      _type: "artist",
      name: artist.name,
      slug: { _type: "slug", current: artist.slug },
      city: artist.city,
      region: artist.region,
      disciplines: artist.disciplines,
      featured: artist.featured,
      website: artist.website,
      instagramUrl: artist.instagramUrl,
      shortBio: artist.shortBio,
      bio: artist.bio,
      portrait: imageWithAlt(artist.portraitKey, artist.portraitAlt),
      seo: artist.seo,
    });
  }

  for (const artwork of artworks) {
    await client.createOrReplace({
      _id: artwork._id,
      _type: "artwork",
      title: artwork.title,
      slug: { _type: "slug", current: artwork.slug },
      artist: { _type: "reference", _ref: artwork.artistId },
      year: artwork.year,
      medium: artwork.medium,
      dimensions: artwork.dimensions,
      description: artwork.description,
      purchaseUrl: artwork.purchaseUrl,
      featured: artwork.featured,
      image: imageWithAlt(artwork.imageKey, artwork.imageAlt),
    });
  }

  for (const value of values) {
    await client.createOrReplace({
      _id: value._id,
      _type: "value",
      title: value.title,
      body: value.body,
      order: value.order,
    });
  }

  for (const faq of faqs) {
    await client.createOrReplace({
      _id: faq._id,
      _type: "faq",
      question: faq.question,
      answer: faq.answer,
      group: faq.group,
      order: faq.order,
    });
  }

  for (const resource of resources) {
    await client.createOrReplace({
      _id: resource._id,
      _type: "resource",
      title: resource.title,
      slug: { _type: "slug", current: resource.slug },
      category: resource.category,
      summary: resource.summary,
      body: resource.body,
      publishedAt: resource.publishedAt,
      featured: resource.featured,
      image: imageWithAlt(resource.imageKey, resource.imageAlt),
    });
  }

  for (const page of pages) {
    await client.createOrReplace({
      _id: page._id,
      _type: "editorialPage",
      pageId: page.pageId,
      eyebrow: page.eyebrow,
      title: page.title,
      lede: page.lede,
      secondaryTitle: page.secondaryTitle,
      secondaryBody: page.secondaryBody,
      items: page.items?.map((item, index) => ({
        _type: "copyBlock",
        _key: `${page.pageId}-item-${index}`,
        title: item.title,
        body: item.body,
      })),
      image: page.imageKey
        ? imageWithAlt(page.imageKey, page.imageAlt)
        : undefined,
    });
  }

  console.log(
    `Done. ${artists.length} artists, ${artworks.length} artworks, ${resources.length} resources, plus pages, values, FAQs, and site settings.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
