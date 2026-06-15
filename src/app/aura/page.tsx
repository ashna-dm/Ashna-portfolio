import type { Metadata } from "next";
import ImageSlot from "@/components/ImageSlot";
import CaseStudyInteractions from "@/components/CaseStudyInteractions";
import ScreenFlow from "@/components/ScreenFlow";
import "./aura.css";

const AW = "/assets/images/aura/screens";
const WEB_FLOW = [
  { src: `${AW}/web-home.png`, label: "Home dashboard" },
  { src: `${AW}/web-report.png`, label: "Daily report" },
  { src: `${AW}/web-calendar.png`, label: "Calendar & planning" },
  { src: `${AW}/web-sync.png`, label: "Sync guide" },
];
const PHONE_FLOW = [
  { src: `${AW}/welcome.png`, label: "Welcome" },
  { src: `${AW}/onb1.png`, label: "Skin profile" },
  { src: `${AW}/scan.png`, label: "Scan a garment" },
  { src: `${AW}/scan-result.png`, label: "Fabric risk result" },
  { src: `${AW}/wardrobe.png`, label: "Your wardrobe" },
  { src: `${AW}/home.png`, label: "Safe outfit" },
  { src: `${AW}/insights.png`, label: "Insights" },
  { src: `${AW}/calendar.png`, label: "Skin calendar" },
];

export const metadata: Metadata = {
  title: "AURA · AI for skin-safe dressing · Ashna Damani",
  description:
    "AURA matches your skin profile to your wardrobe, catching irritating fabrics before they ever touch you.",
};

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
);
function PuzzleShape() {
  return (
    <svg className="pz-shape" viewBox="0 0 120 120" aria-hidden="true">
      <path d="M 26 18 H 48 a 12 12 0 0 0 24 0 H 94 a 8 8 0 0 1 8 8 V 48 a 12 12 0 0 1 0 24 V 94 a 8 8 0 0 1 -8 8 H 72 a 12 12 0 0 0 -24 0 H 26 a 8 8 0 0 1 -8 -8 V 72 a 12 12 0 0 1 0 -24 V 26 a 8 8 0 0 1 8 -8 Z" />
    </svg>
  );
}

const FEATURES = [
  { rev: false, tab: "skin_profile", n: "01", title: "Your skin profile", desc: "Skin condition, allergens, and fabric history, captured once in a calm onboarding, working for you forever.", tags: [["personalized", true], ["allergens", false], ["set once", false]], a: "aura-p1-1", b: "aura-p1-2", pa: "Sensitivity onboarding", pb: "Wardrobe setup" },
  { rev: true, tab: "fabric_scan", n: "02", title: "AI fabric risk scan", desc: "Point your camera at any garment for an instant, personalized risk score, before it ever touches your skin.", tags: [["computer vision", true], ["instant score", false]], a: "aura-p2-1", b: "aura-p2-2", pa: "AI fabric risk scan", pb: "Scan result" },
  { rev: false, tab: "garment_score", n: "03", title: "Scores for every item", desc: "Every garment is scored for your skin, so you can plan a safe outfit at a glance, no second-guessing.", tags: [["wardrobe", true], ["safe outfits", false]], a: "aura-p3-1", b: "aura-p3-2", pa: "Garment detail & score", pb: "Wardrobe" },
  { rev: true, tab: "insights", n: "04", title: "Insights that learn you", desc: "Quick reaction logs become Weekly Skin Insights and a Skin Risk Calendar, so triggers surface before they flare.", tags: [["reaction tracking", true], ["calendar", false]], a: "aura-p4-1", b: "aura-p4-2", pa: "Weekly skin insights", pb: "Skin risk calendar" },
];

export default function AuraPage() {
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
      <section className="hero">
        <div className="wrap">
          <div className="hero-top">
            <span className="eyebrow">Case study · AI · Fashion × skin health · 2026</span>
            <h1 className="hero-h1">AUR<span className="aura-i">A</span></h1>
            <div className="hero-tag">Know what your clothes are doing to your skin.</div>
            <p className="hero-sub">AURA matches your skin profile to your wardrobe, catching irritating fabrics before they ever touch you.</p>
            <div className="hero-meta">
              <span className="chip"><b>Year</b>2026</span>
              <span className="chip"><b>Role</b>AI Product Designer</span>
              <span className="chip"><b>Team</b>Ashna · Shruti</span>
              <span className="chip"><b>Built with</b>Figma · Stitch · Gemini · Claude</span>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <span className="try-note"><span className="dot" />This is the real product, tap through it ↓</span>
          </div>
          <div className="hero-stage">
            <div className="combo">
              <div className="combo-devices">
                <div className="combo-laptop">
                  <div className="laptop">
                    <div className="lid">
                      <div className="bar"><div className="dots"><i /><i /><i /></div><div className="url">aura.app / dashboard</div></div>
                      <div className="scr"><ScreenFlow frames={WEB_FLOW} fit="cover" objectPosition="center top" /></div>
                    </div>
                    <div className="base" />
                  </div>
                </div>
                <div className="combo-phone">
                  <div className="aura-phone">
                    <div className="aura-phone-scr"><ScreenFlow frames={PHONE_FLOW} fit="cover" objectPosition="center top" /></div>
                    <span className="aura-phone-island" />
                  </div>
                </div>
                <span className="sticker keep">skin-safe ✓</span>
                <span className="sticker donate">breathable</span>
                <span className="sticker sell">high risk</span>
                <span className="sticker relocate">patch test</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO TRIO */}
      <section className="block intro-trio">
        <div className="wrap">
          <div className="pztrio">
            <svg className="pz-defs" width="0" height="0" aria-hidden="true"><defs><linearGradient id="pzgrad" x1="0" y1="0" x2="0.35" y2="1"><stop offset="0" stopColor="#6E3CEC" /><stop offset="1" stopColor="#4C1FC2" /></linearGradient></defs></svg>
            {[
              ["Why AURA?", "For 35M people with sensitive skin, getting dressed is a daily gamble."],
              ["Problem", "Labels don't tell you what a fabric will do to your skin until it's too late."],
              ["Opportunity", "Prevent irritation before it happens: confidence, without the guesswork."],
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
          <p className="lead reveal">Getting dressed shouldn&apos;t be a <em>gamble.</em></p>
          <div className="problem-grid">
            <blockquote className="quote reveal">“I check every label twice, and still <span className="g">react.</span>”
              <div className="quote-by">A recurring story across our interviews</div>
            </blockquote>
            <div className="stat-row reveal">
              <div className="stat"><div className="sn">35M</div><div className="sd">people live with chronic skin sensitivities</div></div>
              <div className="stat"><div className="sn">$1,200+</div><div className="sd">spent on returns every year, per person</div></div>
              <div className="stat"><div className="sn">0</div><div className="sd">platforms connect skin health to your wardrobe</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY INSIGHTS */}
      <section className="block research">
        <div className="wrap">
          <div className="sec-head reveal"><h2 className="sec-title">Key insights</h2></div>
          <p className="lead reveal" style={{ fontSize: "clamp(22px,2.4vw,32px)", maxWidth: "26ch" }}>We listened to people who dress around their skin every day. Three tensions kept surfacing.</p>
          <div className="pain-grid">
            <div className="pcard reveal">
              <div className="pico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h13l5 5-5 5H3z" /><path d="M7 12h.01" /></svg></div>
              <div className="ic-q">“I check every label twice.”</div>
              <div className="pt">Fabric anxiety is real</div>
              <div className="pd">Shoppers scrutinise labels yet still react. The information they actually need simply isn&apos;t there.</div>
            </div>
            <div className="pcard reveal">
              <div className="pico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7l9-4 9 4-9 4-9-4Z" /><path d="M3 7v10l9 4 9-4V7" /><path d="M12 11v10" /></svg></div>
              <div className="ic-q">“It's never the right one.”</div>
              <div className="pt">Returns are exhausting</div>
              <div className="pd">Trial-and-error costs time, money, and health. A proactive tool was the #1 unmet need.</div>
            </div>
            <div className="pcard reveal">
              <div className="pico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 2" /><path d="M9 2h6" /></svg></div>
              <div className="ic-q">“I just want to get dressed.”</div>
              <div className="pt">Mornings are chaotic</div>
              <div className="pd">People want low-friction confidence: AI working quietly in the background, not a medical dashboard.</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET GAP */}
      <section className="block marketgap">
        <div className="wrap">
          <div className="sec-head reveal"><h2 className="sec-title">The market gap</h2></div>
          <p className="lead reveal" style={{ fontSize: "clamp(22px,2.4vw,32px)", maxWidth: "24ch" }}>Everyone solves style. <span className="accent">Nobody solves skin.</span></p>
          <div className="comp-grid">
            {[["Stitch Fix", "zero skin awareness"], ["Klodsy", "no health layer"], ["Whering", "no sensitivity filters"], ["FashionAdvice.ai", "style-only"]].map(([n, g]) => (
              <div className="comp reveal" key={n}><span className="c-name">{n}</span><span className="c-gap">{g}</span></div>
            ))}
          </div>
          <div className="gap-punch reveal">
            <div className="big">Nobody asks: <span className="em">does this fabric hurt you?</span></div>
            <div className="sub">The white space nobody owns. <span className="yet">Yet.</span></div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="block solution" id="solution">
        <div className="wrap">
          <div className="sec-head reveal"><h2 className="sec-title">The solution</h2></div>
          <p className="intro reveal">So we built <span className="accent">AURA</span>. It dresses with your skin in mind, automatically.</p>
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
          <p className="onb-sub reveal">A calm first run: AURA learns your skin sensitivities, fabric no-gos, and reaction history before it ever suggests an outfit.</p>
          <div className="onb-row reveal">
            {[["aura-onb1", "Welcome"], ["aura-onb2", "Skin profile"], ["aura-onb3", "Sensitivities"], ["aura-onb4", "Fabric no-gos"], ["aura-onb5", "You're set"]].map(([id, ph]) => (
              <div className="onb-phone" key={id}><span className="onb-pill" /><div className="onb-glass"><ImageSlot id={id} placeholder={ph} /></div></div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILD */}
      <section className="block build">
        <div className="wrap">
          <div className="sec-head reveal"><h2 className="sec-title">The build</h2></div>
          <p className="build-sub reveal">High-fidelity screens from the AURA prototype: scan, score, wardrobe, and the weekly skin report.</p>
          <div className="buildgrid reveal">
            {[["aura-b1", "aura-b2"], ["aura-b3", "aura-b4"], ["aura-b5", "aura-b6"]].map((col, ci) => (
              <div className="buildcol" key={ci}>
                {col.map((id) => (
                  <div className="iphone" key={id}><span className="ip-island" /><div className="ip-screen"><ImageSlot id={id} placeholder="Screen" /></div></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANION WEBSITE */}
      <section className="block companion">
        <div className="wrap">
          <div className="sec-head reveal"><h2 className="sec-title">The full picture, on the big screen</h2></div>
          <div className="web-stage reveal">
            <div className="macbook">
              <div className="mb-lid">
                <div className="mb-screen">
                  <div className="mb-chrome"><span className="tl r" /><span className="tl y" /><span className="tl g" /><div className="mb-url">aura.app / dashboard</div></div>
                  <div className="mb-view"><ImageSlot id="aura-web-1" placeholder="Home dashboard" fit="cover" /></div>
                </div>
              </div>
              <div className="mb-deck"><span className="mb-notch" /></div>
            </div>
            <div className="web-mini-row">
              <div className="browser web-mini">
                <div className="bbar"><div className="bdots"><i /><i /><i /></div><div className="burl">aura.app / reports</div></div>
                <div className="bscr"><ImageSlot id="aura-web-2" placeholder="Skin & fabric reports" fit="cover" /></div>
              </div>
              <div className="browser web-mini">
                <div className="bbar"><div className="bdots"><i /><i /><i /></div><div className="burl">aura.app / wardrobe</div></div>
                <div className="bscr"><ImageSlot id="aura-web-4" placeholder="Wardrobe library" fit="cover" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI SPOTLIGHT */}
      <section className="block spotlight" id="ai">
        <div className="wrap">
          <div className="spot-panel reveal">
            <span className="sp-eyebrow">AI spotlight ✦</span>
            <div className="sp-title">The intelligence behind every safe outfit.</div>
            <p className="sp-sub">Two angles: the AI inside the product, and the AI we built it with.</p>
            <div className="diagram">
              <div className="dnode">
                <div className="d-lab">Inputs</div>
                <div className="d-item">Sensitivity profile</div>
                <div className="d-item">Fabric composition</div>
                <div className="d-item">Reaction history</div>
              </div>
              <div className="darrow">→</div>
              <div className="dnode engine">
                <div className="d-lab">Engine</div>
                <div className="d-eng-title">Personalized risk score</div>
                <div className="d-item">Weighs your profile against each fabric</div>
                <div className="d-item">Learns from every reaction you log</div>
                <div className="d-eng-note">A continuously-learning model, tuned to one person: you.</div>
              </div>
              <div className="darrow">→</div>
              <div className="dnode">
                <div className="d-lab">Output</div>
                <div className="d-item">Prevent irritation</div>
                <div className="d-item">Weekly skin insights</div>
                <div className="d-item">Confident daily choices</div>
              </div>
            </div>
            <div className="trust">
              <div className="tcard"><div className="t-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7" /><path d="M12 17h.01" /></svg></div><div className="t-tx">Always explains the “why?”</div></div>
              <div className="tcard"><div className="t-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg></div><div className="t-tx">You own your profile</div></div>
              <div className="tcard"><div className="t-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12a7 7 0 0 1 14 0" /><path d="M3 12h2" /><path d="M19 12h2" /><path d="M12 19v2" /></svg></div><div className="t-tx">No wellness-washing</div></div>
              <div className="tcard"><div className="t-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 4v4h-4" /></svg></div><div className="t-tx">Continuous learning loop</div></div>
            </div>
            <div className="builtwith">
              <div className="bw-l">
                <div className="bw-t">Building AI products, using AI.</div>
                <div className="bw-d">Designed &amp; prototyped with AI-assisted ideation, screen generation, and rapid iteration.</div>
              </div>
              <div className="tool-chips">
                {["Google Gemini", "Google Stitch", "Claude", "Figma"].map((t) => (
                  <span className="toolchip" key={t}><span className="td" />{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN SYSTEM */}
      <section className="block designsys" id="system">
        <div className="wrap">
          <div className="sec-head reveal"><h2 className="sec-title">Design system</h2></div>
          <p className="ds-intro reveal">Calm, clinical-but-warm, and built to be trusted: AURA&apos;s sage palette, a Hagrid / Poppins type scale, and a small kit of risk components.</p>
          <div className="dscar bookcar" data-dscar>
            <div className="dscar-viewport">
              <div className="dscar-track">
                <div className="dscar-slide">
                  <div className="dscar-card"><div className="bookpage"><span className="bp-deco" />
                    <div className="bp-main"><div className="bp-num">SECTION 01</div><h3 className="bp-title">1.0<br />Colour</h3><p className="bp-desc">A calm, clinical-but-warm palette: sage carries the brand, paper and ink ground it, and three status tints (info, low risk, high risk) power every safety signal.</p></div>
                    <div className="bp-content"><div className="bp-swatches">
                      {[["Sage", "#A8CDB0"], ["Violet", "#5B27E5"], ["Paper", "#FAF7F4"], ["Ink", "#121713"], ["Info", "#DBEAFE"], ["Low risk", "#FEE2E2"], ["High risk", "#BD2828"], ["Neutral", "#EBEFEC"]].map(([nm, hx]) => (
                        <div className="bp-sw" key={nm}><span className="ch" style={{ background: hx }} /><div><div className="mt">{nm}</div><div className="hx">{hx}</div></div></div>
                      ))}
                    </div></div>
                    <div className="bp-foot"><span className="lbl">Design system</span><span className="pg">01</span></div>
                  </div></div>
                </div>
                <div className="dscar-slide">
                  <div className="dscar-card"><div className="bookpage cream"><span className="bp-deco" />
                    <div className="bp-main"><div className="bp-num">SECTION 02</div><h3 className="bp-title">2.0<br />Type</h3><p className="bp-desc">Space Grotesk carries AURA: confident headlines, quietly readable body and labels.</p></div>
                    <div className="bp-content">
                      <div className="ds-panel">
                        <div className="dst-fam">Space Grotesk</div>
                        <div className="ds-typ">
                          <div className="row"><span className="tag">H1</span><span className="samp" style={{ fontWeight: 700, fontSize: "26px" }}>Space&nbsp;Grotesk</span><span className="meta">Bold · 32</span></div>
                          <div className="row"><span className="tag">H2</span><span className="samp" style={{ fontWeight: 600, fontSize: "21px" }}>Space&nbsp;Grotesk</span><span className="meta">Semibold · 24</span></div>
                          <div className="row"><span className="tag">H3</span><span className="samp" style={{ fontWeight: 500, fontSize: "17px" }}>Space&nbsp;Grotesk</span><span className="meta">Medium · 18</span></div>
                          <div className="row"><span className="tag">Body</span><span className="samp" style={{ fontWeight: 400, fontSize: "14px" }}>Space&nbsp;Grotesk</span><span className="meta">Regular · 14</span></div>
                          <div className="row"><span className="tag">Caption</span><span className="samp" style={{ fontWeight: 300, fontSize: "12px" }}>Space&nbsp;Grotesk</span><span className="meta">Light · 12</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="bp-foot"><span className="lbl">Design system</span><span className="pg">02</span></div>
                  </div></div>
                </div>
                <div className="dscar-slide">
                  <div className="dscar-card"><div className="bookpage"><span className="bp-deco" />
                    <div className="bp-main"><div className="bp-num">SECTION 03</div><h3 className="bp-title">3.0<br />Compo&shy;nents</h3><p className="bp-desc">A small kit, extracted from the screens: buttons, form controls, risk badges, and tags.</p></div>
                    <div className="bp-content">
                      <div className="ds-panel">
                        <div className="dsc-group"><span className="dsc-lbl">Buttons</span><div className="dsc-row"><span className="dsc-btn primary">Primary</span><span className="dsc-btn primary hover">Hover</span><span className="dsc-btn disabled">Disabled</span></div><div className="dsc-row"><span className="dsc-btn ghost">Alternative</span><span className="dsc-btn ghost disabled">Disabled</span></div></div>
                        <div className="dsc-group"><span className="dsc-lbl">Forms</span><div className="dsf-field">Search your wardrobe…</div><div className="dsc-row"><span className="dsf-item"><span className="dsf-check" />Sensitive skin</span><span className="dsf-item"><span className="dsf-radio" />Daily log</span></div></div>
                        <div className="dsc-group"><span className="dsc-lbl">Risk status</span><div className="dsc-row"><span className="dsc-pill safe">Safe</span><span className="dsc-pill low">Low</span><span className="dsc-pill high">High</span><span className="dsc-pill info">Info</span></div></div>
                        <div className="dsc-group"><span className="dsc-lbl">Tags &amp; chips</span><div className="dsc-row"><span className="dsc-chip">Breathable</span><span className="dsc-chip">Cotton</span><span className="dsc-chip">Hypoallergenic</span></div></div>
                      </div>
                    </div>
                    <div className="bp-foot"><span className="lbl">Design system</span><span className="pg">03</span></div>
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
          <div className="sec-head reveal"><h2 className="sec-title">The opportunity</h2></div>
          <p className="lead reveal" style={{ fontSize: "clamp(22px,2.4vw,32px)", maxWidth: "24ch" }}>A market of millions, and a door <span className="accent">nobody&apos;s opened.</span></p>
          <div className="metric-row reveal">
            {[["35M", "people need a skin-aware way to dress"], ["$1,200+", "wasted on returns every year, per person"], ["0", "existing platforms own this space"], ["#1", "a proactive tool was the top unmet need"]].map(([n, l]) => (
              <div className="metric" key={l}><div className="mn">{n}</div><div className="ml">{l}</div></div>
            ))}
          </div>
          <div className="outcome-panel reveal">
            <span className="eyebrow">One obsession: skin-safe dressing</span>
            <h2>Built where styling instinct meets material science.</h2>
            <p className="osub">AURA fuses a stylist&apos;s eye with deep fabric data, so the AI does the worrying and you just get dressed with confidence.</p>
            <div className="outcome-stats">
              <div><div className="on">Ashna</div><div className="ol">Fashion Stylist · AI Product Designer</div></div>
              <div><div className="on">Skin-first</div><div className="ol">every fabric vetted before it touches you</div></div>
              <div><div className="on">2026</div><div className="ol">concept → prototype</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* MORE */}
      <section className="block more">
        <div className="wrap">
          <div className="sec-head reveal"><h2 className="sec-title">More projects</h2></div>
          <div className="more-list reveal">
            <a className="more-item" href="/sorta"><span className="mt">Sorta</span><span className="mc">AI home organizing · Product</span><span className="mar"><ArrowUpRight /></span></a>
            <a className="more-item" href="/#work"><span className="mt">MapChat</span><span className="mc">Social · maps × messaging</span><span className="mar"><ArrowUpRight /></span></a>
            <a className="more-item" href="/#work"><span className="mt">Moonshot idea</span><span className="mc">Real client · Product</span><span className="mar"><ArrowUpRight /></span></a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact">
        <div className="footer-inner">
          <a className="back-to-work" href="/#work"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>Back to all work</a>
          <div className="footer-huge">DRESS WITH<br />YOUR SKIN <span className="g">IN MIND.</span></div>
          <div className="footer-links">
            <a href="mailto:damaniashna@gmail.com">damaniashna@gmail.com</a>
            <span className="d">·</span>
            <a href="https://www.linkedin.com/in/ashnadamani" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="footer-meta">
            <span>© 2026 Ashna · AURA · AI for skin-safe dressing</span>
            <span>Fashion Stylist + AI Product Designer</span>
          </div>
        </div>
      </footer>

      <CaseStudyInteractions />
    </div>
  );
}
