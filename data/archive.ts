export type ArchiveEntry = {
  title: string;
  date: string;
  note: string;
};

export type ArchiveSection = {
  title: string;
  description: string;
  entries: ArchiveEntry[];
};

export const archiveSections: ArchiveSection[] = [
  {
    title: "Dream Archive",
    description: "Dated dreams, recurring rooms, weather, and figures at the edge of sleep.",
    entries: [
      {
        title: "A staircase with no landing",
        date: "2026",
        note: "Recurring image, recorded after waking."
      },
      {
        title: "Rain inside a library",
        date: "2025",
        note: "Dream note for possible fiction use."
      }
    ]
  },
  {
    title: "Fragments",
    description: "Single sentences, stray images, and unfinished passages.",
    entries: [
      {
        title: "The sentence that stayed open",
        date: "2026",
        note: "Notebook fragment."
      }
    ]
  },
  {
    title: "Reading Notes",
    description: "Marginal notes, quotations remembered by feeling, and reading records.",
    entries: [
      {
        title: "On silence in translated prose",
        date: "2025",
        note: "Reading note."
      }
    ]
  },
  {
    title: "Images",
    description: "Photographs, scans, and visual references for future writing.",
    entries: [
      {
        title: "Window, late afternoon",
        date: "2025",
        note: "Image reference."
      }
    ]
  }
];
