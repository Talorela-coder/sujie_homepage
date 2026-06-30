import type { Work } from "@/data/work-types";

export const letters: Work[] = [
  {
    slug: "letter-after-midnight",
    title: "Letter After Midnight",
    genre: "Letters",
    category: "letters",
    year: "2026",
    keywords: ["letter", "night", "voice"],
    excerpt:
      "I write after the city has softened, when every window becomes a small confession.",
    note: "Unsent letter.",
    content: {
      type: "prose",
      paragraphs: [
        "I write after the city has softened, when every window becomes a small confession."
      ]
    }
  }
];
