import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { WorkGroup } from "@/components/work-group";
import { workGroups } from "@/data/works";

export const metadata: Metadata = {
  title: "Works"
};

export default function WorksPage() {
  return (
    <div className="page-stack">
      <PageHeading
        eyebrow="Works"
        title="Works"
        intro="Writing arranged by form, with excerpts, notes, and keywords kept close to the text."
      />
      <div className="content-stack">
        {workGroups.map((group) => (
          <WorkGroup group={group} key={group.genre} />
        ))}
      </div>
    </div>
  );
}
