import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <div className="page-stack">
      <PageHeading
        eyebrow="Contact"
        title="Contact"
        intro="For publication, translation, reading, and collaboration inquiries."
      />

      <section className="contact-panel" aria-label="Contact details">
        <dl>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </dd>
          </div>
          <div>
            <dt>Name</dt>
            <dd>{site.name}</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
