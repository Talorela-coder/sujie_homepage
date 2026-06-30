export const workCategories = [
  {
    slug: "fiction",
    genre: "Fiction",
    folder: "data/fictions",
    description: "Stories and novel fragments arranged as rooms, weather, and memory."
  },
  {
    slug: "essays",
    genre: "Essays",
    folder: "data/essays",
    description: "Quiet prose on reading, distance, language, and the afterlife of places."
  },
  {
    slug: "poems",
    genre: "Poems",
    folder: "data/poems",
    description: "Small poems, mostly spare, often written beside windows or train tables."
  },
  {
    slug: "letters",
    genre: "Letters",
    folder: "data/letters",
    description: "Epistolary pieces and unsent correspondences."
  },
  {
    slug: "travel-notes",
    genre: "Travel Notes",
    folder: "data/travel-notes",
    description: "Field notes from stations, shorelines, museums, and borrowed rooms."
  }
] as const;

export type WorkCategorySlug = (typeof workCategories)[number]["slug"];
export type WorkGenre = (typeof workCategories)[number]["genre"];

export type PoemSection = {
  number: string;
  lines: string[];
};

export type WorkContent =
  | {
      type: "poem";
      sections: PoemSection[];
    }
  | {
      type: "prose";
      paragraphs: string[];
    };

export type Work = {
  slug: string;
  title: string;
  genre: WorkGenre;
  category: WorkCategorySlug;
  year: string;
  keywords: string[];
  excerpt: string;
  note: string;
  sourceFile?: string;
  content?: WorkContent;
};

export type WorkGroup = {
  slug: WorkCategorySlug;
  genre: WorkGenre;
  description: string;
  works: Work[];
};

export function getCategoryBySlug(slug: string) {
  return workCategories.find((category) => category.slug === slug);
}
