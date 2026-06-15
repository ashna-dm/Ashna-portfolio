import type { Metadata } from "next";
import ImageSlot from "@/components/ImageSlot";
import CaseStudyInteractions from "@/components/CaseStudyInteractions";
import SortaPrototype from "@/components/SortaPrototype";
import "./sorta.css";

export const metadata: Metadata = {
  title: "Sorta · AI Home Organizing · Ashna Damani",
  description:
    "Sorta turns the overwhelm of clutter into a calm, 25-minute plan, one small decision at a time.",
};

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

function PuzzleShape() {
  return (
    <svg className="pz-shape" viewBox="0 0 120 120" aria-hidden="true">
      <path d="M 26 18 H 48 a 12 12 0 0 0 24 0 H 94 a 8 8 0 0 1 8 8 V 48 a 12 12 0 0 1 0 24 V 94 a 8 8 0 0 1 -8 8 H 72 a 12 12 0 0 0 -24 0 H 26 a 8 8 0 0 1 -8 -8 V 72 a 12 12 0 0 1 0 -24 V 26 a 8 8 0 0 1 8 -8 Z" />
    </svg>
  );
}

const FEATURES = [
  { rev: false, tab: "scan_space", n: "01", title: "Scan the mess", desc: "Point your camera at a cluttered surface. Sorta's vision model finds and labels every item, with no manual lists and no blank-page paralysis.", tags: [["computer vision", true], ["auto-detect", false], ["0 typing", false]], a: "sc-f1a", b: "sc-f1b", pa: "Home screen", pb: "Scan / detect screen" },
  { rev: true, tab: "triage_flow", n: "02", title: "One decision at a time", desc: "Sorta turns a daunting pile into single, swipeable choices: keep, relocate, donate, sell. Each comes with an AI nudge so you never stall on “where does this go?”", tags: [["decision support", true], ["keep · relocate", false], ["donate · sell", false]], a: "sc-f2a", b: "sc-f2b", pa: "Goal / chat screen", pb: "Triage screen" },
  { rev: false, tab: "donate_pickup", n: "03", title: "It leaves the house for you", desc: "Anything you donate gets a free doorstep pickup booked automatically. The hardest part of letting go, actually getting it out, is handled.", tags: [["doorstep pickup", true], ["resale marketplace", false]], a: "sc-f3a", b: "sc-f3b", pa: "Plan / pickup screen", pb: "Donation confirmation" },
  { rev: true, tab: "item_finder", n: "04", title: "Never lose it again", desc: "Everything you keep is logged and categorized by room, so the thing you stored six months ago is one search away, with no re-cluttering to find it.", tags: [["smart finder", true], ["room-based", false]], a: "sc-f4a", b: "sc-f4b", pa: "Item finder screen", pb: "Spaces / progress screen" },
];

export default function SortaPage() {
  return (
    <div className="page">
      {/* NAV */}
      <header>
        <div className="wrap">
          <nav className="nav">
            <a className="brand" href="/#top">Ashna</a>
            <div className="nav-pills">
              <a className="np active" href="/#work">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21v-8" /><path d="M12 13c-1.1-3-3.7-3.7-6-3.1.1 2.7 2.2 4.2 6 3.1Z" /><path d="M12 11.5c.9-2.7 3.2-3.3 5.4-2.8-.1 2.4-2.1 3.7-5.4 2.8Z" /><path d="M7 16h10l-1.1 4.2a1 1 0 0 1-1 .8H9.1a1 1 0 0 1-1-.8Z" /></svg>
                <span className="lbl">work</span>
              </a>
              <a className="np" href="/story#play">
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

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-top">
            <span className="eyebrow">Case study · AI · Home organization · 2025</span>
            <h1 className="hero-h1">Sorta <span className="g">AI</span></h1>
            <div className="hero-tag">Less stuff. More calm.</div>
            <p className="hero-sub">Sorta is an AI that turns the overwhelm of clutter into a calm, 25-minute plan, one small decision at a time.</p>
            <div className="hero-meta">
              <span className="chip"><b>Year</b>2025</span>
              <span className="chip"><b>Role</b>Research Lead</span>
              <span className="chip"><b>Team</b>Alina · Amanda · Chiran · Ashna</span>
              <span className="chip"><b>Tools</b>Figma · ChatGPT · Jira · Confluence</span>
              <span className="chip"><b>Status</b>Live beta · 50+ waitlist</span>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <span className="try-note"><span className="dot" />This is the real product, tap through it ↓</span>
          </div>
          <div className="hero-stage">
            <SortaPrototype />
            <span className="sticker keep">keep</span>
            <span className="sticker donate">donate ♻</span>
            <span className="sticker sell">sell ✦</span>
            <span className="sticker relocate">relocate →</span>
            <span className="hannot l">AI spots every<br />item for you<span className="ln" /></span>
            <span className="hannot r"><span className="ln" />one calm<br />decision at a time</span>
          </div>
        </div>
      </section>

      {/* INTRO TRIO */}
      <section className="block intro-trio">
        <div className="wrap">
          <div className="pztrio">
            <svg className="pz-defs" width="0" height="0" aria-hidden="true"><defs><linearGradient id="pzgrad" x1="0" y1="0" x2="0.35" y2="1"><stop offset="0" stopColor="#6E3CEC" /><stop offset="1" stopColor="#4C1FC2" /></linearGradient></defs></svg>
            {[
              ["Why Sorta?", "A cluttered home quietly drains our focus, time, and calm."],
              ["Problem", "Decluttering fails at the very first decision: knowing where to start."],
              ["Opportunity", "Make decluttering fast, painless, and stress-free for anyone."],
            ].map(([t, d]) => (
              <div className="pzcard reveal" key={t}>
                <PuzzleShape />
                <div className="pz-content"><div className="pzt">{t}</div><div className="pzd">{d}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="block problem">
        <div className="wrap">
          <div className="sec-head reveal"><h2 className="sec-title">The problem</h2></div>
          <p className="lead reveal">Decluttering rarely fails for lack of bins or checklists. It fails at the <em>very first decision.</em></p>
          <div className="problem-grid">
            <blockquote className="quote reveal">“I know I should start. I just never know <span className="g">where.</span>”
              <div className="quote-by">Participant 04, one of 9 interviews</div>
            </blockquote>
            <div className="stat-row reveal">
              <div className="stat"><div className="sn">300K</div><div className="sd">items in the average American home</div></div>
              <div className="stat"><div className="sn">78%</div><div className="sd">don&apos;t know what to do with all of it</div></div>
              <div className="stat"><div className="sn">54%</div><div className="sd">feel overwhelmed by the clutter around them</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="block media-block">
        <div className="wrap">
          <div className="sec-head reveal"><h2 className="sec-title">A painful journey</h2></div>
          <div className="media-frame journey reveal"><ImageSlot id="sc-journey" placeholder="Painful user journey map" fit="contain" /></div>
        </div>
      </section>

      {/* MARKET */}
      <section className="block media-block">
        <div className="wrap">
          <div className="sec-head reveal"><h2 className="sec-title">Market sizing</h2></div>
          <div className="media-frame market reveal"><ImageSlot id="sc-market" placeholder="Market sizing chart" fit="contain" /></div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="block research">
        <div className="wrap">
          <div className="sec-head reveal"><h2 className="sec-title">Key insights</h2></div>
          <p className="lead reveal" style={{ fontSize: "clamp(22px,2.4vw,32px)", maxWidth: "26ch" }}>We talked to <span className="accent">9 people</span> about their real relationship with clutter. Three tensions kept surfacing.</p>
          <div className="pain-grid">
            <div className="pcard reveal">
              <div className="pico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 2" /><path d="M9 2h6" /></svg></div>
              <div className="pt">Procrastination</div>
              <div className="pd">Every item is a decision. “Where does this even go?” So people delay, and the mental tax of choosing stalls the whole thing.</div>
            </div>
            <div className="pcard reveal">
              <div className="pico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7l9-4 9 4-9 4-9-4Z" /><path d="M3 7v10l9 4 9-4V7" /><path d="M12 11v10" /></svg></div>
              <div className="pt">Inconsistent habits</div>
              <div className="pd">Organizing happens seasonally, sporadically, never as routine, so spaces drift back to chaos, and duplicates quietly pile up.</div>
            </div>
            <div className="pcard reveal">
              <div className="pico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 5.6a5 5 0 0 0-7-.1L12 7l-1.8-1.5a5 5 0 0 0-7 7L12 21l8.8-8.5a5 5 0 0 0 0-6.9Z" /></svg></div>
              <div className="pt">Emotional overload</div>
              <div className="pd">Clutter isn&apos;t just physical. Letting go of sentimental things feels like discarding a memory, so guilt wins, and nothing moves.</div>
            </div>
          </div>
        </div>
      </section>

      {/* OPPORTUNITY */}
      <section className="block opp">
        <div className="wrap">
          <div className="opp-frame reveal"><ImageSlot id="sc-opp" placeholder="Opportunity photo" fit="cover" /></div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="block solution" id="solution">
        <div className="wrap">
          <div className="sec-head reveal"><h2 className="sec-title">The solution</h2></div>
          <p className="intro reveal">So we built <span className="accent">Sorta</span>. Point it at a mess, and it walks you through, one calm tap at a time.</p>
          {FEATURES.map((f) => (
            <div className={"feat" + (f.rev ? " rev" : "")} key={f.n}>
              <div className="feat-screens reveal">
                <div className="pscreen"><span className="nn" /><div className="glass"><ImageSlot id={f.a} placeholder={f.pa} /></div></div>
                <div className="pscreen small"><span className="nn" /><div className="glass"><ImageSlot id={f.b} placeholder={f.pb} /></div></div>
              </div>
              <div className="feat-copy reveal">
                <div className="fcanvas">
                  <span className="ftab"><span className="fr">{f.tab}</span> · frame {f.n}</span>
                  <span className="hh tl" /><span className="hh tr" /><span className="hh bl" /><span className="hh br" />
                  <span className="dim">390 × 844</span>
                  <div className="fnum">{f.n}</div>
                  <div className="ft">{f.title}</div>
                  <div className="fd">{f.desc}</div>
                  <div className="ftags">{f.tags.map(([t, g]) => <span className={"tg" + (g ? " g" : "")} key={String(t)}>{t}</span>)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ONBOARDING */}
      <section className="block onboarding">
        <div className="wrap">
          <div className="sec-head reveal"><h2 className="sec-title">Onboarding</h2></div>
          <p className="onb-sub reveal">A calm first run: Sorta learns your space, your goals, and how you like to let go — before the first sort ever begins.</p>
          <div className="onb-row reveal">
            {[["sc-onb1", "Welcome"], ["sc-onb2", "Your space"], ["sc-onb3", "Your goal"], ["sc-onb4", "How you let go"], ["sc-onb5", "Ready to sort"]].map(([id, ph]) => (
              <div className="onb-phone" key={id}><span className="onb-pill" /><div className="onb-glass"><ImageSlot id={id} placeholder={ph} /></div></div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILD */}
      <section className="block build">
        <div className="wrap">
          <div className="sec-head reveal"><h2 className="sec-title">The build</h2></div>
          <p className="build-sub reveal">High-fidelity screens from the Sorta prototype — discover, triage, plan a pickup, and find anything in seconds.</p>
          <div className="buildgrid reveal">
            {[["sc-g1", "sc-g2", "sc-g3"], ["sc-g4", "sc-g5", "sc-g6"], ["sc-g7", "sc-g8"]].map((col, ci) => (
              <div className="buildcol" key={ci}>
                {col.map((id) => (
                  <div className="iphone" key={id}><span className="ip-island" /><div className="ip-screen"><ImageSlot id={id} placeholder="Screen" /></div></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN SYSTEM */}
      <section className="block designsys">
        <div className="wrap">
          <div className="sec-head reveal"><h2 className="sec-title">Design system</h2></div>
          <p className="ds-intro reveal">A small system carries the product: Sorta&apos;s mint-to-lime brand palette, a Nunito Sans / Lato type scale, the cube logo, and the four-tab navigation.</p>
          <div className="dscar bookcar" data-dscar>
            <div className="dscar-viewport">
              <div className="dscar-track">
                <div className="dscar-slide">
                  <div className="dscar-card"><div className="bookpage"><span className="bp-deco" />
                    <div className="bp-main"><div className="bp-num">SECTION 01</div><h3 className="bp-title">1.0<br />Logo</h3><p className="bp-desc">The Sorta cube mark and wordmark — a calm, rounded identity that signals order without feeling clinical.</p></div>
                    <div className="bp-content"><div className="bp-frame"><ImageSlot id="ds-logo" className="ds-img" placeholder="Logo" fit="contain" /></div></div>
                    <div className="bp-foot"><span className="lbl">Design system</span><span className="pg">01</span></div>
                  </div></div>
                </div>
                <div className="dscar-slide">
                  <div className="dscar-card"><div className="bookpage cream"><span className="bp-deco" />
                    <div className="bp-main"><div className="bp-num">SECTION 02</div><h3 className="bp-title">2.0<br />Colour</h3><p className="bp-desc">A fresh mint-to-lime system, anchored by a near-black ink, with bright accents for status — energetic, optimistic, unmistakably Sorta.</p></div>
                    <div className="bp-content"><div className="bp-swatches">
                      {[["Lime", "#C8F24E"], ["Mint", "#B9FFE9"], ["Aqua", "#64E4CF"], ["Lime soft", "#D8FC85"], ["Red", "#FF5656"], ["Green", "#78E351"], ["Yellow", "#FFEA09"], ["Ink", "#2A2A2A"]].map(([nm, hx]) => (
                        <div className="bp-sw" key={hx}><span className="ch" style={{ background: hx }} /><div><div className="mt">{nm}</div><div className="hx">{hx}</div></div></div>
                      ))}
                    </div></div>
                    <div className="bp-foot"><span className="lbl">Design system</span><span className="pg">02</span></div>
                  </div></div>
                </div>
                <div className="dscar-slide">
                  <div className="dscar-card"><div className="bookpage"><span className="bp-deco" />
                    <div className="bp-main"><div className="bp-num">SECTION 03</div><h3 className="bp-title">3.0<br />Compo&shy;nents</h3><p className="bp-desc">The kit behind every screen — status chips (keep / discard / relocate), segmented controls, tags, and option cards, mapped to each state.</p></div>
                    <div className="bp-content"><div className="bp-frame"><ImageSlot id="ds-components" className="ds-img" placeholder="Components" fit="cover" /></div></div>
                    <div className="bp-foot"><span className="lbl">Design system</span><span className="pg">03</span></div>
                  </div></div>
                </div>
                <div className="dscar-slide">
                  <div className="dscar-card"><div className="bookpage cream"><span className="bp-deco" />
                    <div className="bp-main"><div className="bp-num">SECTION 04</div><h3 className="bp-title">4.0<br />Nav</h3><p className="bp-desc">A four-tab bar — Discover, Connect, Community, Profile — keeps the whole app one thumb-tap away, always calm, never crowded.</p></div>
                    <div className="bp-content"><div className="bp-frame"><ImageSlot id="ds-nav" className="ds-img" placeholder="Navigation bar" fit="contain" /></div></div>
                    <div className="bp-foot"><span className="lbl">Design system</span><span className="pg">04</span></div>
                  </div></div>
                </div>
              </div>
            </div>
            <div className="dscar-nav">
              <button className="dscar-arrow dscar-prev" aria-label="Previous"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg></button>
              <div className="dscar-dots" />
              <button className="dscar-arrow dscar-next" aria-label="Next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg></button>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="block outcome">
        <div className="wrap">
          <div className="sec-head reveal"><h2 className="sec-title">Did it work?</h2></div>
          <p className="lead reveal" style={{ fontSize: "clamp(22px,2.4vw,32px)", maxWidth: "24ch" }}>We put it in front of <span className="accent">12 people</span> and watched the friction disappear.</p>
          <div className="metric-row reveal">
            {[["80%", "found organizing faster & easier"], ["90%", "would use Sorta again"], ["10–15", "minutes per task, on average"], ["80%", "embraced AI to reduce mental load"]].map(([n, l]) => (
              <div className="metric" key={l}><div className="mn">{n}</div><div className="ml">{l}</div></div>
            ))}
          </div>
          <div className="outcome-panel reveal">
            <span className="eyebrow">From class project to real product</span>
            <h2>Sorta is now a live beta with a growing waitlist.</h2>
            <p className="osub">What began as an 11-week design challenge became a real startup: landing page live, beta in users&apos; hands, and people lining up to make decluttering finally feel calm.</p>
            <div className="outcome-stats">
              <div><div className="on">11</div><div className="ol">weeks, idea → MVP</div></div>
              <div><div className="on">50+</div><div className="ol">waitlist signups</div></div>
              <div><div className="on">Live</div><div className="ol">beta + landing page</div></div>
            </div>
            <div className="outcome-actions">
              <a className="btn" href="https://www.letsorta.ai/" target="_blank" rel="noopener">Visit letsorta.ai
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg></a>
            </div>
          </div>
        </div>
      </section>

      {/* MORE */}
      <section className="block more">
        <div className="wrap">
          <div className="sec-head reveal"><h2 className="sec-title">More projects</h2></div>
          <div className="more-list reveal">
            <a className="more-item" href="/#work"><span className="mt">MapChat</span><span className="mc">Social · maps × messaging</span><span className="mar"><ArrowUpRight /></span></a>
            <a className="more-item" href="/aura"><span className="mt">AURA</span><span className="mc">Fashion-skin · UI/UX</span><span className="mar"><ArrowUpRight /></span></a>
            <a className="more-item" href="/#work"><span className="mt">Moonshot idea</span><span className="mc">Real client · Product</span><span className="mar"><ArrowUpRight /></span></a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact">
        <div className="footer-inner">
          <a className="back-to-work" href="/#work"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>Back to all work</a>
          <div className="footer-huge">LET&apos;S MAKE<br />SOMETHING <span className="g">CALM.</span></div>
          <div className="footer-links">
            <a href="mailto:damaniashna@gmail.com">damaniashna@gmail.com</a>
            <span className="d">·</span>
            <a href="https://www.letsorta.ai/" target="_blank" rel="noopener">letsorta.ai</a>
            <span className="d">·</span>
            <a href="#">LinkedIn</a>
          </div>
          <div className="footer-meta">
            <span>© 2026 Ashna · Sorta · AI home organizing</span>
            <span>Product Designer + Storyteller</span>
          </div>
        </div>
      </footer>

      <CaseStudyInteractions />
    </div>
  );
}
