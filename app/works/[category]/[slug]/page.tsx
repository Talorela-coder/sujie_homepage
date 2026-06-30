import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WorkContent } from "@/components/work-content";
import { allWorks, findWork } from "@/data/works";

type WorkPageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return allWorks.map((work) => ({
    category: work.category,
    slug: work.slug
  }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const work = findWork(category, slug);

  if (!work) {
    return {
      title: "Work"
    };
  }

  return {
    title: work.title,
    description: work.excerpt
  };
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { category, slug } = await params;
  const work = findWork(category, slug);

  if (!work) {
    notFound();
  }

  return (
    <article className="work-detail">
      <Link href="/works" className="back-link">
        Works
      </Link>

      <header className="work-detail-header">
        <p className="eyebrow">{work.genre}</p>
        <h1>{work.title}</h1>
        <div className="work-detail-meta">
          <p>{work.year}</p>
          <p>{work.genre}</p>
        </div>
        <p className="page-intro">{work.excerpt}</p>
        <ul className="keyword-list" aria-label={`${work.title} keywords`}>
          {work.keywords.map((keyword) => (
            <li key={keyword}>{keyword}</li>
          ))}
        </ul>
        <p className="note">{work.note}</p>
      </header>

      <WorkContent content={work.content} />
    </article>
  );
}
