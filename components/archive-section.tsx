import type { ArchiveSection as ArchiveSectionType } from "@/data/archive";

type ArchiveSectionProps = {
  section: ArchiveSectionType;
};

export function ArchiveSection({ section }: ArchiveSectionProps) {
  const headingId = `archive-${section.title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <section className="archive-section" aria-labelledby={headingId}>
      <div className="section-heading">
        <h2 id={headingId}>{section.title}</h2>
        <p>{section.description}</p>
      </div>
      <div className="archive-list">
        {section.entries.map((entry) => (
          <article className="archive-entry" key={`${entry.title}-${entry.date}`}>
            <p className="archive-date">{entry.date}</p>
            <div>
              <h3>{entry.title}</h3>
              <p>{entry.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
