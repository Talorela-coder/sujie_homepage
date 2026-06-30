import type { WorkContent as WorkContentType } from "@/data/work-types";

type WorkContentProps = {
  content?: WorkContentType;
};

export function WorkContent({ content }: WorkContentProps) {
  if (!content) {
    return null;
  }

  if (content.type === "poem") {
    return (
      <div className="poem-sequence">
        {content.sections.map((section) => (
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
    );
  }

  return (
    <div className="prose-work">
      {content.paragraphs.map((paragraph, index) => (
        <p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
      ))}
    </div>
  );
}
