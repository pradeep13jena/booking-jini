// TEMP: remote placeholder images for the About page.
// Swap each URL for a static import from @/assets (e.g. `import teamPhoto from "@/assets/team.jpg"`)
// and remove the matching remotePatterns entry in next.config.ts once all are replaced.

const photo = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;
const face = (id: number) => `https://i.pravatar.cc/600?img=${id}`;

export const DUMMY = {
  heroTeam: photo("bj-team", 1200, 800),
  heroWork: photo("bj-work", 800, 800),
  office: photo("bj-office", 1600, 900),
  team: [12, 13, 47, 59, 60, 68, 51, 52].map(face),
  support: [5, 11, 32, 15, 33, 8, 26, 14, 44].map((id) => `https://i.pravatar.cc/80?img=${id}`),
};
