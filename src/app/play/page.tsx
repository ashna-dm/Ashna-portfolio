/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import "./play.css";

export const metadata: Metadata = {
  title: "Play — Ashna Damani",
  description:
    "Off the clock: graphic design, generative-AI experiments, and photography by Ashna Damani.",
};

const P = "/assets/images/play";

type Item = { src: string; title: string; meta: string };
type Section = { n: string; eyebrow: string; title: string; desc: string; items: Item[]; soon?: string };

const FASHION: Item[] = [
  { src: `${P}/photo-pinkwall.png`, title: "Editorial look", meta: "Styling" },
  { src: `${P}/photo-coffee.jpg`, title: "Coffee run", meta: "Styling" },
  { src: `${P}/photo-sitting.jpg`, title: "On location", meta: "Styling" },
];

const SECTIONS: Section[] = [
  {
    n: "02",
    eyebrow: "Graphic · social · identity",
    title: "Design & Identity",
    desc: "Posters, social campaigns, a personal mark, and the odd product mockup — design purely for the joy of it.",
    items: [
      { src: `${P}/bingo.png`, title: "Financial-literacy Bingo Night", meta: "Event flyer" },
      { src: `${P}/pause-edition.png`, title: "The Pause · masterclass week", meta: "Campaign" },
      { src: `${P}/fashion-post.png`, title: "New-collection drop", meta: "Social design" },
      { src: `${P}/da-logo.png`, title: "AD monogram", meta: "Personal mark" },
      { src: `${P}/product-mockup.png`, title: "Product launch", meta: "Mockup" },
      { src: `${P}/finance-app.png`, title: "Net-worth tracker", meta: "App concept" },
    ],
  },
  {
    n: "03",
    eyebrow: "Generative AI",
    title: "AI Experiments",
    desc: "Prompting my way through fashion editorials, imagined worlds, and a real photo reimagined as a comic-book crew.",
    items: [
      { src: `${P}/ai-denim-bag.png`, title: "Denim editorial", meta: "AI · fashion" },
      { src: `${P}/ai-orange-bag.png`, title: "Street editorial", meta: "AI · fashion" },
      { src: `${P}/ai-dome.png`, title: "Worldbuilding", meta: "AI · scene" },
      { src: `${P}/ai-still.png`, title: "Still life", meta: "AI · render" },
      { src: `${P}/ai-crew.png`, before: `${P}/photo-steps.jpg`, title: "The crew, reimagined", meta: "AI · before / after" },
    ],
  },
  {
    n: "04",
    eyebrow: "Painting & photography",
    title: "Canvas & Camera",
    desc: "Hand-painted canvases and photographs — colour I make, and colour I find.",
    items: [
      { src: `${P}/photo-mural.jpg`, title: "Street colour", meta: "Photo" },
    ],
    soon: "More canvas paintings coming soon",
  },
];

export default function PlayPage() {
  return (
    <div className="playpage">
      {/* NAV */}
      <header>
        <div className="wrap">
          <nav className="nav">
            <a className="brand" href="/#top">Ashna</a>
            <div className="nav-pills">
              <a className="np" href="/#work">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21v-8" /><path d="M12 13c-1.1-3-3.7-3.7-6-3.1.1 2.7 2.2 4.2 6 3.1Z" /><path d="M12 11.5c.9-2.7 3.2-3.3 5.4-2.8-.1 2.4-2.1 3.7-5.4 2.8Z" /><path d="M7 16h10l-1.1 4.2a1 1 0 0 1-1 .8H9.1a1 1 0 0 1-1-.8Z" /></svg>
                <span className="lbl">work</span>
              </a>
              <a className="np active" href="/play">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17" /><path d="M12 3.5c2.6 2.3 4 5.3 4 8.5s-1.4 6.2-4 8.5c-2.6-2.3-4-5.3-4-8.5s1.4-6.2 4-8.5Z" /></svg>
                <span className="lbl">play</span>
              </a>
              <a className="np" href="/assets/Ashna-Resume.pdf" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3.5h7L18 7.5V20a.5.5 0 0 1-.5.5h-10A.5.5 0 0 1 7 20Z" /><path d="M13.5 3.5V8h4.5" /><path d="M9.5 12.5h5" /><path d="M9.5 16h5" /></svg>
                <span className="lbl">résumé</span>
              </a>
              <a className="np" href="/story">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="15.5" cy="5" r="1.9" /><path d="M14.5 8.6l-3.2 2.4 2.4 2.3-1 5.2" /><path d="M11.3 11l-4 .4" /><path d="M13.7 13.3l3.6 1.4" /><path d="M5.5 20.5l3.2-3.6" /></svg>
                <span className="lbl">story</span>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* HEADER */}
      <section className="play-hero">
        <div className="wrap">
          <span className="eyebrow">Off the clock</span>
          <h1 className="play-title">Play</h1>
          <p className="play-intro">The stuff I make when no one&apos;s briefing me — posters, generative-AI experiments, and photographs. Where the curiosity goes to stretch.</p>
        </div>
      </section>

      {/* FASHION STYLING — featured, the origin story */}
      <section className="play-fashion">
        <div className="wrap">
          <div className="ps-head">
            <span className="ps-eyebrow">01 · Where it started · the runway years</span>
            <h2 className="ps-title">Fashion Styling</h2>
            <p className="ps-desc">Before product design, I styled for a living — a fashion-design training, editorial shoots, and a stylist&apos;s eye for fit, fabric, and story. It&apos;s the lens I still design with today.</p>
          </div>
          <div className="pgrid">
            {FASHION.map((it) => (
              <figure className="pcard" key={it.src}>
                <img src={it.src} alt={it.title} loading="lazy" />
                <figcaption className="pcap">
                  <span className="pcap-t">{it.title}</span>
                  <span className="pcap-m">{it.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <span className="pf-soon">More styling work coming soon</span>
        </div>
      </section>

      {/* SECTIONS */}
      {SECTIONS.map((s) => (
        <section className="play-sec" key={s.n}>
          <div className="wrap">
            <div className="ps-head">
              <span className="ps-eyebrow">{s.n} · {s.eyebrow}</span>
              <h2 className="ps-title">{s.title}</h2>
              <p className="ps-desc">{s.desc}</p>
            </div>
            <div className="pgrid">
              {s.items.map((it) =>
                it.before ? (
                  <figure className="pcard ba" key={it.src}>
                    <div className="ba-img">
                      <img src={it.before} alt="Before" loading="lazy" />
                      <span className="ba-tag">Before</span>
                    </div>
                    <div className="ba-img">
                      <img src={it.src} alt={it.title} loading="lazy" />
                      <span className="ba-tag after">After · AI</span>
                    </div>
                    <figcaption className="pcap">
                      <span className="pcap-t">{it.title}</span>
                      <span className="pcap-m">{it.meta}</span>
                    </figcaption>
                  </figure>
                ) : (
                  <figure className="pcard" key={it.src}>
                    <img src={it.src} alt={it.title} loading="lazy" />
                    <figcaption className="pcap">
                      <span className="pcap-t">{it.title}</span>
                      <span className="pcap-m">{it.meta}</span>
                    </figcaption>
                  </figure>
                )
              )}
            </div>
            {s.soon && <span className="pf-soon">{s.soon}</span>}
          </div>
        </section>
      ))}

      {/* FOOTER */}
      <footer id="contact">
        <div className="footer-inner">
          <div className="footer-huge">LET&apos;S<br />PLAY.</div>
          <div className="footer-links">
            <a href="mailto:damaniashna@gmail.com">damaniashna@gmail.com</a>
            <span className="d">·</span>
            <a href="https://www.linkedin.com/in/ashnadamani" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span className="d">·</span>
            <a href="https://www.behance.net/ashnadamani" target="_blank" rel="noopener noreferrer">Behance</a>
            <span className="d">·</span>
            <a href="https://medium.com/@ashna2012" target="_blank" rel="noopener noreferrer">Medium</a>
          </div>
          <div className="footer-meta">
            <span>© 2026 Ashna</span>
            <span>Product Designer + Storyteller</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
