import type { ReactNode } from "react";
import { Footer, Header } from "./SiteChrome";

export type InfoSection = {
  id?: string;
  eyebrow?: string;
  title: string;
  content: ReactNode;
};

export function InfoPage({ eyebrow, title, introduction, sections }: { eyebrow: string; title: string; introduction: string; sections: InfoSection[] }) {
  return (
    <main>
      <Header />
      <section className="info-hero shell">
        <span className="kicker">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{introduction}</p>
      </section>
      <div className="shell info-layout">
        <aside aria-label="On this page">
          <span>On this page</span>
          {sections.map((section) => <a href={`#${section.id ?? section.title.toLowerCase().replaceAll(" ", "-")}`} key={section.title}>{section.title}</a>)}
        </aside>
        <article className="prose-card">
          {sections.map((section) => (
            <section id={section.id ?? section.title.toLowerCase().replaceAll(" ", "-")} key={section.title}>
              {section.eyebrow && <span className="kicker">{section.eyebrow}</span>}
              <h2>{section.title}</h2>
              <div>{section.content}</div>
            </section>
          ))}
        </article>
      </div>
      <Footer />
    </main>
  );
}
