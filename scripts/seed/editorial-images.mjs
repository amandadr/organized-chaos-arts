/** Fixed Unsplash images for editorial pages and resources (not the artist roster). */

function unsplash(id) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;
}

export const editorialImagePlan = [
  ["work-ink-1", unsplash("photo-1455390582262-044cdead277a"), "work-ink-1.jpg"],
  ["work-wood-1", unsplash("photo-1416879595882-3373a0480b5b"), "work-wood-1.jpg"],
  ["work-ceramic-1", unsplash("photo-1578749556568-bc2c40e68b61"), "work-ceramic-1.jpg"],
  ["work-ceramic-2", unsplash("photo-1565193566173-7a0ee3dbe261"), "work-ceramic-2.jpg"],
  ["work-ceramic-3", unsplash("photo-1610701596007-11502861dcfa"), "work-ceramic-3.jpg"],
  ["work-glass-2", unsplash("photo-1601925260368-ae2f83cf8b7f"), "work-glass-2.jpg"],
];
