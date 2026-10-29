/** Stable Atlantic stand-in places for the development catalog. */

export const atlanticPlaces = [
  { city: "Halifax", region: "NS" },
  { city: "Dartmouth", region: "NS" },
  { city: "Sydney", region: "NS" },
  { city: "Lunenburg", region: "NS" },
  { city: "Dieppe", region: "NB" },
  { city: "Fredericton", region: "NB" },
  { city: "Saint John", region: "NB" },
  { city: "Moncton", region: "NB" },
  { city: "Charlottetown", region: "PE" },
  { city: "Summerside", region: "PE" },
  { city: "St. John's", region: "NL" },
  { city: "Corner Brook", region: "NL" },
  { city: "Gander", region: "NL" },
  { city: "Amherst", region: "NS" },
  { city: "Truro", region: "NS" },
  { city: "Yarmouth", region: "NS" },
  { city: "Bathurst", region: "NB" },
  { city: "Edmundston", region: "NB" },
  { city: "Wolfville", region: "NS" },
  { city: "Antigonish", region: "NS" },
];

/**
 * Assign a place by sorted creator id so refreshes keep the same person in the same city.
 */
export function placeForCreatorId(creatorId, places = atlanticPlaces) {
  const sortedIndex = Number(creatorId) % places.length;
  return places[sortedIndex];
}
