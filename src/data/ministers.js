import { ASSETS } from "./assets";

// The source Figma file repeats a single placeholder name/photo across all
// 8 cards — this mirrors that as-is. Replace `name` and `photo` per minister
// once the real roster + headshots are ready.
export const MINISTERS = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: "Bishop Felix Adejumo",
  photo: ASSETS.speakerPhoto,
}));
