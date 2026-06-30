type PageHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

export function PageHeading({ eyebrow, title, intro }: PageHeadingProps) {
  return (
    <header className="page-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      {intro ? <p className="page-intro">{intro}</p> : null}
    </header>
  );
}
