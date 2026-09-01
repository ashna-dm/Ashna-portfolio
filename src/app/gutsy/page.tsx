import type { Metadata } from "next";
import ImageSlot from "@/components/ImageSlot";
import CaseStudyInteractions from "@/components/CaseStudyInteractions";
import "./gutsy.css";

export const metadata: Metadata = {
  title: "Gutsy · real-time gut-health intelligence · Ashna Damani",
  description:
    "A six-week moonshot for chronic-illness care: sensing what the gut is doing as it happens, instead of waiting months for a lab to tell you.",
};

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

/* Three lo-fi layouts for the practitioner dashboard, explored before any hi-fi. */
const WIREFRAMES = [
  { n: "A", url: "as-built", id: "gutsy-wf-a", ph: "WIREFRAME · as-built" },
  { n: "B", url: "split status column", id: "gutsy-wf-b", ph: "WIREFRAME · split status column" },
  { n: "C", url: "triage first", id: "gutsy-wf-c", ph: "WIREFRAME · triage first" },
];

const COLOURS = [
  ["Void", "#070A14"],
  ["Panel", "#121A2E"],
  ["Lavender", "#C6B6F4"],
  ["Violet", "#8E6CF2"],
  ["Bio-cyan", "#43E8D8"],
  ["Bio-green", "#62F2A4"],
  ["Linen", "#ECE3D2"],
  ["Ink", "#14101C"],
];

export default function GutsyPage() {
  return (
    <div className="gutsy">
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
                <a className="np" href="/play">
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
        <section className="hero" data-screen-label="Intro">
          <span className="bloom" style={{ width: 520, height: 520, background: "var(--cyan)", top: -60, right: -40 }} />
          <span className="bloom" style={{ width: 440, height: 440, background: "var(--violet)", bottom: -80, left: -60, animationDelay: "2.5s" }} />
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy reveal">
                <span className="hero-eyebrow"><span className="seed" /><span className="eyebrow">Case study · FAANG · NDA · 2026</span></span>
                <h1>GUTS<span className="o">Y</span></h1>
                <div className="hero-tag">Turning months of guesswork into real-time, wearable gut-health data.</div>
                <p className="hero-sub">A moonshot concept for chronic-illness care, sensing what the gut is doing as it happens, instead of waiting months for a lab to tell you.</p>
                <div className="hero-meta">
                  <span className="chip"><b>Year</b>2026</span>
                  <span className="chip"><b>Role</b>Product Designer + UX Researcher</span>
                  <span className="chip"><b>Team</b>Ashna · Sofia · NDA lab</span>
                  <span className="chip"><b>Built with</b>Figma · Stitch · Gemini · Claude</span>
                </div>
              </div>
              <div className="hero-media reveal">
                <div className="frame">
                  <div className="fbox">
                    <ImageSlot id="gutsy-hero" fit="cover" placeholder="HERO PRODUCT / BRAND SHOT — Sofia's photography" />
                  </div>
                  <span className="pill-credit">Photography · <b>Sofia Nuñez Morales</b></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* C · CONTEXT */}
        <section className="block" data-screen-label="Context">
          <div className="wrap">
            <div className="sec-head reveal"><h2 className="sec-title">The context</h2></div>
            <div className="context-tab reveal">
              <h2 className="phase-title" style={{ maxWidth: "22ch", marginTop: 0 }}>A 6-week moonshot for chronic-illness care, set by a world-renowned innovation lab.</h2>
            </div>
            <p className="lead reveal">An open brief: <b>as AI automates the output of work, what becomes of human work?</b> We made it concrete for <b>autoimmune &amp; chronic-illness patients</b>, two designers, one NDA client, six weeks.</p>
          </div>
        </section>

        {/* P · PROBLEM */}
        <section className="block" data-screen-label="Problem">
          <span className="bloom" style={{ width: 420, height: 420, background: "var(--violet)", top: 80, right: -120 }} />
          <div className="wrap">
            <div className="sec-head reveal"><h2 className="sec-title">The problem</h2></div>
            <h2 className="phase-title reveal" style={{ maxWidth: "18ch" }}>The gut changes <em>daily.</em> The lab takes <em>months.</em></h2>
            <p className="lead reveal">Patients manage a body no one fully sees, a <b className="hl">3–4 month lab lag</b> against a microbiome that shifts daily, with no affordable, real-time read of the gut.</p>

            <div className="pullquote reveal">
              <div className="qm">“</div>
              <div className="qt">I track everything and still get blindsided between appointments.</div>
              <div className="qby">— Interviewee, anonymized · 1 of 5</div>
            </div>
          </div>
        </section>

        {/* P · PROCESS */}
        <section className="block" data-screen-label="Process">
          <div className="wrap">
            <div className="sec-head reveal"><h2 className="sec-title">The process</h2></div>
            <h2 className="phase-title reveal" style={{ maxWidth: "16ch" }}>Foresight → research → a sharper pivot.</h2>

            <div className="triad reveal">
              <div className="tcard">
                <span className="tdot" />
                <div className="tnum">01 · FORESIGHT</div>
                <div className="tname">Map the futures</div>
                <div className="tdesc">Signals &amp; drivers → a <b>2×2 scenario map</b> → riskiest-assumption testing.</div>
              </div>
              <div className="tcard">
                <span className="tdot" />
                <div className="tnum">02 · RESEARCH</div>
                <div className="tname">Talk to people</div>
                <div className="tdesc"><b>5 interviews</b> + cold-LinkedIn recruiting → thematic synthesis.</div>
              </div>
              <div className="tcard">
                <span className="tdot" />
                <div className="tnum">03 · PIVOT</div>
                <div className="tname">Find the real user</div>
                <div className="tdesc">We rejected the clinician. The <b>patient</b> is underserved → an evidence-led <b>B2B→B2C</b> pivot.</div>
              </div>
            </div>

            <div className="fgrid c3 reveal">
              <div className="frame">
                <span className="ftab"><b>2×2_scenarios ·</b> foresight</span>
                <div className="fbox"><ImageSlot id="gutsy-foresight-1" fit="cover" placeholder="2×2 FUTURE-SCENARIO MAP" /></div>
              </div>
              <div className="frame">
                <span className="ftab"><b>affinity_wall ·</b> synthesis</span>
                <div className="fbox"><ImageSlot id="gutsy-research-1" fit="cover" placeholder="AFFINITY WALL + QUOTE CARDS" /></div>
              </div>
              <div className="frame">
                <span className="ftab"><b>competitive_2×2 ·</b> landscape</span>
                <div className="fbox"><ImageSlot id="gutsy-opp-1" fit="cover" placeholder="COMPETITIVE 2×2" /></div>
              </div>
            </div>

            <div className="wf-block reveal">
              <div className="wf-head"><span className="wf-k">dashboard wireframes · <b>lo-fi → 3 options</b></span></div>
              <div className="wf-row">
                {WIREFRAMES.map((w) => (
                  <div className="wf" key={w.n}>
                    <div className="wf-bar"><i /><i /><i /><div className="wf-url">{w.url}</div><span className="wf-no">{w.n}</span></div>
                    <div className="wf-scr"><ImageSlot id={w.id} fit="cover" placeholder={w.ph} /></div>
                  </div>
                ))}
              </div>
              <div className="wf-step"><b>Three lo-fi layouts</b> for the practitioner dashboard, weighed against each other before a single hi-fi screen.</div>
            </div>
          </div>
        </section>

        {/* P · PROPOSAL */}
        <section className="block" data-screen-label="Proposal">
          <span className="bloom" style={{ width: 480, height: 480, background: "var(--bio)", top: 60, left: -160, opacity: 0.3 }} />
          <div className="wrap">
            <div className="sec-head reveal"><h2 className="sec-title">The solution</h2></div>
            <h2 className="phase-title reveal" style={{ maxWidth: "20ch" }}>GUTSY — sense, test, steward.</h2>
            <p className="lead reveal">One system in three moves. <b>AI synthesizes the data; humans steward the body.</b> A 5-screen practitioner dashboard, paired with a patient companion app.</p>

            <div className="triad reveal">
              <div className="tcard">
                <span className="tdot" />
                <div className="tnum">01 · SENSE</div>
                <div className="tname">Sense</div>
                <div className="tdesc">Discreet wearables read the gut continuously.</div>
              </div>
              <div className="tcard">
                <span className="tdot" />
                <div className="tnum">02 · TEST</div>
                <div className="tname">Test</div>
                <div className="tdesc">At-home kits add the <b>depth</b> a wearable can&apos;t — on the patient&apos;s schedule.</div>
              </div>
              <div className="tcard">
                <span className="tdot" />
                <div className="tnum">03 · STEWARD</div>
                <div className="tname">Steward</div>
                <div className="tdesc">A <b>patient app + practitioner dashboard</b> unify one patient across specialists.</div>
              </div>
            </div>

            <div className="deskstage reveal">
              <div className="laptop2">
                <div className="lt-lid">
                  <div className="lt-screen">
                    <div className="lt-chrome"><span className="tl" /><span className="tl" /><span className="tl" /><div className="lt-url">gutsy.health / practitioner</div></div>
                    {/* deliberate: the dashboard is taller than the frame and scrolls inside the screen */}
                    <div className="lt-view"><ImageSlot id="gutsy-d1" fit="cover" placeholder="PRACTITIONER DASHBOARD — drop a desktop screenshot" /></div>
                  </div>
                </div>
                <div className="lt-deck"><span className="lt-notch" /></div>
              </div>
              <div className="dash-mini">
                <div>
                  <div className="minibr">
                    <div className="mbar"><div className="mdots"><i /><i /><i /></div><div className="murl">gutsy.health / today</div></div>
                    <div className="mscr"><ImageSlot id="gutsy-p1" fit="cover" placeholder="Patient · today" /></div>
                  </div>
                  <div className="dash-lab"><b>Patient · today</b> — the daily read</div>
                </div>
                <div>
                  <div className="minibr">
                    <div className="mbar"><div className="mdots"><i /><i /><i /></div><div className="murl">gutsy.health / trends</div></div>
                    <div className="mscr"><ImageSlot id="gutsy-p2" fit="cover" placeholder="Patient · trends & triggers" /></div>
                  </div>
                  <div className="dash-lab"><b>Trends &amp; triggers</b> — what moved the gut</div>
                </div>
                <div>
                  <div className="minibr">
                    <div className="mbar"><div className="mdots"><i /><i /><i /></div><div className="murl">gutsy.health / chart</div></div>
                    <div className="mscr"><ImageSlot id="gutsy-d2" fit="cover" placeholder="Clinician · patient chart" /></div>
                  </div>
                  <div className="dash-lab"><b>Patient chart</b> — one patient across specialists</div>
                </div>
              </div>
            </div>

            <div className="credit-banner reveal">
              <span className="cb-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7a4 4 0 0 0-6-6l-1 1-1-1a4 4 0 0 0-6 6z" /></svg></span>
              <div className="cb-tx">I coined <b>“Gutsy”</b> and designed the end-to-end digital product. Physical product, including sensor housings and hydrogen rig, <b>designed, prototyped &amp; photographed by Sofia Nuñez Morales.</b></div>
            </div>
          </div>
        </section>

        {/* DESIGN SYSTEM */}
        <section className="block designsys" data-screen-label="Design system">
          <div className="wrap">
            <div className="sec-head reveal"><h2 className="sec-title">Design system</h2></div>
            <p className="ds-intro reveal">A small system carries the bioluminescent brand: GUTSY&apos;s deep-navy base, lavender-and-violet with bio-cyan &amp; bio-green accents, a Hagrid / Poppins type scale, and a kit of sensor &amp; risk components.</p>
            <div className="dscar bookcar" data-dscar>
              <div className="dscar-viewport">
                <div className="dscar-track">

                  {/* 1.0 BRAND */}
                  <div className="dscar-slide">
                    <div className="dscar-card">
                      <div className="bookpage"><span className="bp-deco" />
                        <div className="bp-main">
                          <div className="bp-num">SECTION 01</div>
                          <h3 className="bp-title">1.0<br />Brand</h3>
                          <p className="bp-desc">The GUTSY mark and bioluminescent identity — a living, glowing read on a body no one usually sees.</p>
                        </div>
                        <div className="bp-content"><div className="bp-frame"><ImageSlot id="gutsy-ds-logo" placeholder="Logo · drop from Figma" /></div></div>
                        <div className="bp-foot"><span className="lbl">Design system</span><span className="pg">01</span></div>
                      </div>
                    </div>
                  </div>

                  {/* 2.0 COLOUR */}
                  <div className="dscar-slide">
                    <div className="dscar-card">
                      <div className="bookpage cream"><span className="bp-deco" />
                        <div className="bp-main">
                          <div className="bp-num">SECTION 02</div>
                          <h3 className="bp-title">2.0<br />Colour</h3>
                          <p className="bp-desc">A deep-navy base lets bioluminescent accents glow: lavender and violet for depth, bio-cyan and bio-green for live signal, warm linen for editorial calm.</p>
                        </div>
                        <div className="bp-content">
                          <div className="bp-swatches">
                            {COLOURS.map(([name, hex]) => (
                              <div className="bp-sw" key={hex}>
                                <span className="ch" style={{ background: hex }} />
                                <div><div className="mt">{name}</div><div className="hx">{hex}</div></div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bp-foot"><span className="lbl">Design system</span><span className="pg">02</span></div>
                      </div>
                    </div>
                  </div>

                  {/* 3.0 TYPE */}
                  <div className="dscar-slide">
                    <div className="dscar-card">
                      <div className="bookpage"><span className="bp-deco" />
                        <div className="bp-main">
                          <div className="bp-num">SECTION 03</div>
                          <h3 className="bp-title">3.0<br />Type</h3>
                          <p className="bp-desc">A Hagrid display paired with Poppins for body and JetBrains Mono for data labels — confident headlines, quietly readable text, technical precision.</p>
                        </div>
                        <div className="bp-content"><div className="bp-frame"><ImageSlot id="gutsy-ds-type" placeholder="Typography · drop from Figma" /></div></div>
                        <div className="bp-foot"><span className="lbl">Design system</span><span className="pg">03</span></div>
                      </div>
                    </div>
                  </div>

                  {/* 4.0 COMPONENTS */}
                  <div className="dscar-slide">
                    <div className="dscar-card">
                      <div className="bookpage cream"><span className="bp-deco" />
                        <div className="bp-main">
                          <div className="bp-num">SECTION 04</div>
                          <h3 className="bp-title">4.0<br />{"Compo­nents"}</h3>
                          <p className="bp-desc">A small kit does the heavy lifting: sensor read-outs, risk badges, and the timeline card — every state mapped to the bioluminescent signal palette.</p>
                        </div>
                        <div className="bp-content"><div className="bp-frame"><ImageSlot id="gutsy-ds-comp" placeholder="Components · drop from Figma" /></div></div>
                        <div className="bp-foot"><span className="lbl">Design system</span><span className="pg">04</span></div>
                      </div>
                    </div>
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

        {/* R · RESULT */}
        <section className="outcomes" data-screen-label="Result">
          <span className="bloom" style={{ width: 520, height: 520, background: "var(--cyan)", top: -80, left: "40%", opacity: 0.3 }} />
          <div className="wrap">
            <div className="sec-head reveal"><h2 className="sec-title">The outcome</h2></div>
            <h2 className="phase-title reveal" style={{ maxWidth: "22ch" }}>An open prompt → a <em>fundable</em> direction in six weeks.</h2>
            <div className="recog reveal" style={{ marginTop: 40 }}>
              <div className="rg"><span className="rg-n">4</span><span className="rg-t"><b>Lab leaders</b> endorsed advancing to clinical validation</span></div>
              <div className="rg"><span className="rg-n">Top 9</span><span className="rg-t"><b>Impact Awards finalist</b> — pitched to a panel of 3 judges</span></div>
              <div className="rg"><span className="rg-n">9/10</span><span className="rg-t"><b>Usability rating</b> across 5 iterations</span></div>
            </div>
          </div>
        </section>

        {/* MORE */}
        <section className="block more" data-screen-label="More">
          <div className="wrap">
            <div className="sec-head reveal"><span className="eyebrow">More projects</span></div>
            <div className="more-list reveal">
              <a className="more-item" href="/aura"><span className="mt">AURA</span><span className="mc">AI · fashion × skin health</span><span className="mar"><ArrowUpRight /></span></a>
              <a className="more-item" href="/sorta"><span className="mt">Sorta</span><span className="mc">AI home organizing · Product</span><span className="mar"><ArrowUpRight /></span></a>
              <a className="more-item" href="/#work"><span className="mt">MapChat</span><span className="mc">Social · maps × messaging</span><span className="mar"><ArrowUpRight /></span></a>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer id="contact">
        <div className="footer-inner">
          <a className="back-to-work" href="/#work"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>Back to all work</a>
          <div className="footer-huge">REAL-TIME<br />GUT-HEALTH, <span className="g">FINALLY.</span></div>
          <div className="footer-links">
            <a href="mailto:damaniashna@gmail.com">damaniashna@gmail.com</a>
            <span className="d">·</span>
            <a href="https://www.linkedin.com/in/ashnadamani" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="footer-meta">
            <span>© 2026 Ashna · Gutsy · real-time gut-health intelligence</span>
            <span>Product Designer + UX Researcher</span>
          </div>
        </div>
      </footer>

      <CaseStudyInteractions />
    </div>
  );
}
