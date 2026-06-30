import type { Work } from "@/data/work-types";

export const fictions: Work[] = [
  {
    slug: "a-house-facing-the-rain",
    title: "A House Facing the Rain",
    genre: "Fiction",
    category: "fiction",
    year: "2026",
    keywords: ["memory", "room", "absence"],
    excerpt:
      "The room kept its own weather. Even in August, a thin rain seemed to fall from the ceiling of her memory.",
    note: "Fiction fragment in progress.",
    content: {
      type: "prose",
      paragraphs: [
        "The room kept its own weather. Even in August, a thin rain seemed to fall from the ceiling of her memory."
      ]
    }
  },
  {
    slug: "salt-on-the-window",
    title: "Salt on the Window",
    genre: "Fiction",
    category: "fiction",
    year: "2025",
    keywords: ["sea", "threshold", "return"],
    excerpt:
      "She returned to the coast without luggage, carrying only the sentence she had failed to send.",
    note: "Short story draft.",
    content: {
      type: "prose",
      paragraphs: [
        "She returned to the coast without luggage, carrying only the sentence she had failed to send."
      ]
    }
  }
];
