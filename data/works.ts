import { essays } from "@/data/essays";
import { fictions } from "@/data/fictions";
import { letters } from "@/data/letters";
import { poems } from "@/data/poems";
import { travelNotes } from "@/data/travel-notes";
import {
  workCategories,
  type Work,
  type WorkCategorySlug,
  type WorkGroup
} from "@/data/work-types";

const worksByCategory: Record<WorkCategorySlug, Work[]> = {
  fiction: fictions,
  essays,
  poems,
  letters,
  "travel-notes": travelNotes
};

export const workGroups: WorkGroup[] = workCategories.map((category) => ({
  slug: category.slug,
  genre: category.genre,
  description: category.description,
  works: worksByCategory[category.slug]
}));

export const allWorks = workGroups.flatMap((group) => group.works);

export function findWork(category: string, slug: string) {
  return allWorks.find((work) => work.category === category && work.slug === slug);
}
