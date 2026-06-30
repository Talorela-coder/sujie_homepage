import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>{site.name}</p>
      <p>Fiction, essays, poems, letters, travel notes, and archives.</p>
    </footer>
  );
}
