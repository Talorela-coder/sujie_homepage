import type { Metadata } from "next";
import { ArchiveSection } from "@/components/archive-section";
import { PageHeading } from "@/components/page-heading";
import { archiveSections } from "@/data/archive";

export const metadata: Metadata = {
  title: "Archive"
};

export default function ArchivePage() {
  return (
    <div className="page-stack">
      <PageHeading
        eyebrow="Archive"
        title="Archive"
        intro="A quiet index of dreams, fragments, notes, and images gathered beside the finished works."
      />
      <div className="content-stack">
        {archiveSections.map((section) => (
          <ArchiveSection section={section} key={section.title} />
        ))}
      </div>
    </div>
  );
}
