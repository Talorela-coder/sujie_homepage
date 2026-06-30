import Link from "next/link";
import { site } from "@/data/site";

const indexLinks = [
  {
    href: "/works",
    label: "Works",
    text: "Fiction, essays, poems, letters, and travel notes."
  },
  {
    href: "/archive",
    label: "Archive",
    text: "Dreams, fragments, reading notes, and images."
  },
  {
    href: "/biography",
    label: "Biography",
    text: "A bilingual introduction and author note."
  }
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-intro" aria-labelledby="home-title">
        <p className="eyebrow">Writer / Archive</p>
        <h1 id="home-title">{site.name}</h1>
        <p>
          A minimal personal site for literary work, notebooks, and quiet
          archival traces.
        </p>
        <p lang="zh-CN">
          一个用于整理小说、散文、诗、书信、旅行札记与私人档案的极简作者网站。
        </p>
      </section>

      <section className="index-list" aria-label="Site index">
        {indexLinks.map((item) => (
          <Link className="index-link" href={item.href} key={item.href}>
            <span>{item.label}</span>
            <span>{item.text}</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
