/** Unsplash portrait stand-ins for the development catalog. */

function unsplash(id) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;
}

export const portraitPool = [
  {
    photoId: "photo-1544005313-94ddf0286df2",
    alt: "Development stand-in portrait: person with dark hair photographed outdoors",
  },
  {
    photoId: "photo-1524504388940-b1c1722653e1",
    alt: "Development stand-in portrait: person standing in open daylight",
  },
  {
    photoId: "photo-1472099645785-5658abf4ff4e",
    alt: "Development stand-in portrait: person with short hair in a wool sweater",
  },
  {
    photoId: "photo-1507003211169-0a1dd7228f2d",
    alt: "Development stand-in portrait: person against a dark background",
  },
  {
    photoId: "photo-1534528741775-53994a69daeb",
    alt: "Development stand-in portrait: person with hair pulled back, facing the camera",
  },
  {
    photoId: "photo-1438761681033-6461ffad8d80",
    alt: "Development stand-in portrait: person near a window, soft daylight",
  },
  {
    photoId: "photo-1506794778202-cad84cf45f1d",
    alt: "Development stand-in portrait: person outdoors in soft light",
  },
  {
    photoId: "photo-1580489944761-15a19d654956",
    alt: "Development stand-in portrait: person smiling toward the camera",
  },
  {
    photoId: "photo-1573496359142-b8d87734a5a2",
    alt: "Development stand-in portrait: person in professional attire",
  },
  {
    photoId: "photo-1500648767791-00dcc994a43e",
    alt: "Development stand-in portrait: person looking slightly off camera",
  },
  {
    photoId: "photo-1517841905240-472988babdf9",
    alt: "Development stand-in portrait: person with long hair, close crop",
  },
  {
    photoId: "photo-1494790108377-be9c29b29330",
    alt: "Development stand-in portrait: person against a warm background",
  },
  {
    photoId: "photo-1547425260-76bcadfb4f2c",
    alt: "Development stand-in portrait: person in soft indoor light",
  },
  {
    photoId: "photo-1539571696357-5a69c17a67c6",
    alt: "Development stand-in portrait: person outdoors, three-quarter view",
  },
  {
    photoId: "photo-1529626455594-4ff0802cfb7e",
    alt: "Development stand-in portrait: person facing the camera, soft focus",
  },
  {
    photoId: "photo-1531123897727-8f129e1688ce",
    alt: "Development stand-in portrait: person with short hair, studio light",
  },
  {
    photoId: "photo-1487412720507-e7ab37603c6f",
    alt: "Development stand-in portrait: person looking toward the light",
  },
  {
    photoId: "photo-1463453091185-61582044d556",
    alt: "Development stand-in portrait: person outdoors in urban light",
  },
  {
    photoId: "photo-1508214751196-bcfd4ca60f91",
    alt: "Development stand-in portrait: person with glasses, soft daylight",
  },
  {
    photoId: "photo-1519345182560-3f2917c472ef",
    alt: "Development stand-in portrait: person against a simple wall",
  },
];

export function unsplashPortraitUrl(photoId) {
  return unsplash(photoId);
}

/**
 * Stable portrait assignment by sorted creator id index among the selected roster.
 */
export function portraitForIndex(index, pool = portraitPool) {
  return pool[index % pool.length];
}
