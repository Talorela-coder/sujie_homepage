import Link from "next/link";
import { site } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="site-title" aria-label={`${site.name} home`}>
        {site.name}
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {site.nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
