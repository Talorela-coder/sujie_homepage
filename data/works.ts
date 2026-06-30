export type WorkGenre =
  | "Fiction"
  | "Essays"
  | "Poems"
  | "Letters"
  | "Travel Notes";

export type Work = {
  title: string;
  genre: WorkGenre;
  year: string;
  keywords: string[];
  excerpt: string;
  note: string;
};

export type WorkGroup = {
  genre: WorkGenre;
  description: string;
  works: Work[];
};

export const workGroups: WorkGroup[] = [
  {
    genre: "Fiction",
    description: "Stories and novel fragments arranged as rooms, weather, and memory.",
    works: [
      {
        title: "A House Facing the Rain",
        genre: "Fiction",
        year: "2026",
        keywords: ["memory", "room", "absence"],
        excerpt:
          "The room kept its own weather. Even in August, a thin rain seemed to fall from the ceiling of her memory.",
        note: "Fiction fragment in progress."
      },
      {
        title: "Salt on the Window",
        genre: "Fiction",
        year: "2025",
        keywords: ["sea", "threshold", "return"],
        excerpt:
          "She returned to the coast without luggage, carrying only the sentence she had failed to send.",
        note: "Short story draft."
      }
    ]
  },
  {
    genre: "Essays",
    description: "Quiet prose on reading, distance, language, and the afterlife of places.",
    works: [
      {
        title: "Notes on Returning",
        genre: "Essays",
        year: "2026",
        keywords: ["home", "language", "distance"],
        excerpt:
          "To return is not to close a circle. It is to discover the gap has learned to speak in your voice.",
        note: "Essay sequence."
      }
    ]
  },
  {
    genre: "Poems",
    description: "Small poems, mostly spare, often written beside windows or train tables.",
    works: [
      {
        title: "Small Light",
        genre: "Poems",
        year: "2025",
        keywords: ["light", "winter", "silence"],
        excerpt:
          "At dusk / the lamp remembers / what the room could not say.",
        note: "Three-line poem."
      }
    ]
  },
  {
    genre: "Letters",
    description: "Epistolary pieces and unsent correspondences.",
    works: [
      {
        title: "Letter After Midnight",
        genre: "Letters",
        year: "2026",
        keywords: ["letter", "night", "voice"],
        excerpt:
          "I write after the city has softened, when every window becomes a small confession.",
        note: "Unsent letter."
      }
    ]
  },
  {
    genre: "Travel Notes",
    description: "Field notes from stations, shorelines, museums, and borrowed rooms.",
    works: [
      {
        title: "Blue Hour in a Foreign Station",
        genre: "Travel Notes",
        year: "2025",
        keywords: ["station", "blue hour", "walking"],
        excerpt:
          "The platform clock moved with the calm cruelty of a thing that has never waited for anyone.",
        note: "Travel notebook entry."
      }
    ]
  }
];
