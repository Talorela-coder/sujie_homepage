import type { WorkGroup as WorkGroupType } from "@/data/works";

type WorkGroupProps = {
  group: WorkGroupType;
};

export function WorkGroup({ group }: WorkGroupProps) {
  const headingId = `works-${group.genre.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <section className="literary-section" aria-labelledby={headingId}>
      <div className="section-heading">
        <h2 id={headingId}>{group.genre}</h2>
        <p>{group.description}</p>
      </div>
      <div className="work-list">
        {group.works.map((work) => (
          <article className="work-entry" key={`${work.title}-${work.year}`}>
            <div className="work-meta">
              <p>{work.year}</p>
              <p>{work.genre}</p>
            </div>
            <div className="work-body">
              <h3>{work.title}</h3>
              <p className="excerpt">{work.excerpt}</p>
              <ul className="keyword-list" aria-label={`${work.title} keywords`}>
                {work.keywords.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
              <p className="note">{work.note}</p>
              {work.poemSections ? (
                <div className="poem-sequence" aria-label={`${work.title} full text`}>
                  {work.poemSections.map((section) => (
                    <section className="poem-section" key={section.number}>
                      <p className="poem-number">{section.number}</p>
                      <div className="poem-lines">
                        {section.lines.map((line, index) =>
                          line ? (
                            <span className="poem-line" key={`${section.number}-${index}`}>
                              {line}
                            </span>
                          ) : (
                            <span
                              aria-hidden="true"
                              className="poem-line poem-line-empty"
                              key={`${section.number}-${index}`}
                            />
                          )
                        )}
                      </div>
                    </section>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
