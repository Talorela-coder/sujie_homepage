import type { Work } from "@/data/work-types";

export const smallLight: Work = {
  slug: "small-light",
  title: "Small Light",
  genre: "Poems",
  category: "poems",
  year: "2025",
  keywords: ["light", "winter", "silence"],
  excerpt: "At dusk / the lamp remembers / what the room could not say.",
  note: "Three-line poem.",
  content: {
    type: "poem",
    sections: [
      {
        number: "1",
        lines: [
          "At dusk",
          "the lamp remembers",
          "what the room could not say."
        ]
      }
    ]
  }
};
