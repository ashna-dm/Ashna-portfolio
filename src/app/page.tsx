/* eslint-disable @next/next/no-img-element */
import HomeInteractions from "./HomeInteractions";
import PuzzleField from "@/components/PuzzleField";
import Intro from "./Intro";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <Intro />
      <div className="page">
        {/* ===================== HEADER ===================== */}
        <header>
          <div className="wrap">
            <nav className="nav">
              <a className="brand active" href="#top" data-spy="top">
                Ashna
              </a>
              <div className="nav-pills">
                <a className="np" href="#work" data-spy="work">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21v-8" />
                    <path d="M12 13c-1.1-3-3.7-3.7-6-3.1.1 2.7 2.2 4.2 6 3.1Z" />
                    <path d="M12 11.5c.9-2.7 3.2-3.3 5.4-2.8-.1 2.4-2.1 3.7-5.4 2.8Z" />
                    <path d="M7 16h10l-1.1 4.2a1 1 0 0 1-1 .8H9.1a1 1 0 0 1-1-.8Z" />
                  </svg>
                  <span className="lbl">work</span>
                </a>
                <a className="np" href="/play">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M3.5 12h17" />
                    <path d="M12 3.5c2.6 2.3 4 5.3 4 8.5s-1.4 6.2-4 8.5c-2.6-2.3-4-5.3-4-8.5s1.4-6.2 4-8.5Z" />
                  </svg>
                  <span className="lbl">play</span>
                </a>
                <a className="np" href="/assets/Ashna-Resume.pdf" target="_blank" rel="noopener">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 3.5h7L18 7.5V20a.5.5 0 0 1-.5.5h-10A.5.5 0 0 1 7 20Z" />
                    <path d="M13.5 3.5V8h4.5" />
                    <path d="M9.5 12.5h5" />
                    <path d="M9.5 16h5" />
                  </svg>
                  <span className="lbl">résumé</span>
                </a>
                <a className="np" href="/story" data-spy="about">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="15.5" cy="5" r="1.9" />
                    <path d="M14.5 8.6l-3.2 2.4 2.4 2.3-1 5.2" />
                    <path d="M11.3 11l-4 .4" />
                    <path d="M13.7 13.3l3.6 1.4" />
                    <path d="M5.5 20.5l3.2-3.6" />
                  </svg>
                  <span className="lbl">story</span>
                </a>
              </div>
            </nav>
          </div>
        </header>

        {/* ===================== HERO ===================== */}
        <section className="hero" id="top">
          <PuzzleField />
          <div className="wrap hero-wrap">
            {/* hero glow is off by default in the handoff (tweaks default glow:false) */}

            <span className="mark cross annot" style={{ top: "128px", left: "8px" }} />
            <span className="mark cross annot" style={{ bottom: "150px", right: "8px" }} />
            <span className="mark dash annot" style={{ top: "330px", left: 0, width: "104px", height: "58px" }} />

            {/* hanging ID badge */}
            <div className="idhang">
              <div className="lanyard" />
              <div className="clip" />
              <div className="idlabel">
                <div className="idlabel-top">
                  <span>AI Native Product Designer</span>
                </div>
                <div className="idvid">
                  <video
                    id="idVideo"
                    className="idphoto"
                    src="/assets/video/ashna-id.mp4"
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-label="Ashna Damani intro video"
                  />
                  <button id="idSound" className="idsound" type="button" aria-pressed="false" aria-label="Unmute video">
                    <svg className="ic-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H3v6h3l5 4Z" /><path d="m22 9-6 6" /><path d="m16 9 6 6" /></svg>
                    <svg className="ic-on" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H3v6h3l5 4Z" /><path d="M16 8.5a5 5 0 0 1 0 7" /><path d="M19 6a9 9 0 0 1 0 12" /></svg>
                    <span className="t">unmute me</span>
                  </button>
                </div>
                <div className="idname">Ashna Damani</div>
                <div className="idrole">
                  <span className="live" />
                  <span>
                    Currently working at <strong>MapChat Social</strong>
                  </span>
                </div>
                <div className="idbar">
                  <a
                    className="idqr"
                    href="https://mapchat.social/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Scan or tap to visit MapChat Social"
                  >
                    <img src="/assets/images/homepage/mapchat-qr.svg" alt="QR code linking to mapchat.social" />
                  </a>
                  <div className="barnum">SCAN ME</div>
                </div>
              </div>
            </div>

            <div className="hero-center">
              <div className="name-wrap">
                <div className="redline top annot">
                  <span className="ln" />
                  <span className="cap a" />
                  <span className="cap b" />
                  <span className="rl-lbl">324</span>
                </div>
                <div className="redline left annot">
                  <span className="ln" />
                  <span className="cap a" />
                  <span className="cap b" />
                  <span className="rl-lbl">132</span>
                </div>
                <div className="sel annot">
                  <span className="h tl" />
                  <span className="h tr" />
                  <span className="h bl" />
                  <span className="h br" />
                  <span className="dim">324 × 132</span>
                </div>
                <img className="hero-script" src="/assets/images/homepage/ashna-name.png" alt="आशना (Ashna)" />
              </div>

              <div className="dict">
                <div className="row1">
                  <span className="ipa">pronunciation</span>
                  <span className="sep">•</span>
                  <span className="rom">a-sh-na</span>
                </div>
                <div className="def">
                  <b>(n.)</b> a familiar one, someone you know by heart.
                </div>
              </div>
            </div>

            <div className="hero-corners">
              <div className="hero-tagline">
                <span>Running on coffee</span>
                <br />
                <span>&amp; “what ifs.”</span>
              </div>
              <div className="hero-role">
                <div className="big">Product Designer</div>
                <div className="small">+ storyteller</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== WORK ===================== */}
        <section className="work" id="work">
          <div className="wrap">
            <div className="sec-label">
              <span className="t">Work projects</span>
              <span className="ln" />
            </div>
            <div className="work-grid">
              {/* FRAME 01 - AURA */}
              <a className="frame" href="/aura">
                <div className="frame-tab">
                  <span className="n">01</span>
                </div>
                <div className="artboard">
                  <div className="tile-mock aura-mock">
                    <div className="mm-head">
                      <span className="mm-eyebrow">AI Product Designer</span>
                      <span className="mm-word">AURA</span>
                    </div>
                    <div className="mm-stage">
                      <div className="tm-laptop">
                        <span className="tm-bar"><i /><i /><i /></span>
                        <div className="tm-screen"><img src="/assets/images/aura/screens/web-home.png" alt="AURA web dashboard" /></div>
                      </div>
                      <div className="iphone aura-phone"><span className="ip-island" /><div className="ip-screen"><img src="/assets/images/aura/screens/home.png" alt="AURA app" /></div></div>
                    </div>
                  </div>
                  <span className="dim-chip annot">web + app</span>
                  <span className="hh tl" />
                  <span className="hh tr" />
                  <span className="hh bl" />
                  <span className="hh br" />
                </div>
                <div className="frame-foot">
                  <div>
                    <div className="f-title">AURA</div>
                    <div className="f-cat">AI · Skin-Fashion app</div>
                  </div>
                  <span className="open">open ↗</span>
                </div>
              </a>

              {/* FRAME 02 - NDA */}
              <a className="frame is-soon">
                <div className="frame-tab">
                  <span className="n">02</span>
                </div>
                <div className="artboard">
                  <svg viewBox="0 0 280 210" preserveAspectRatio="xMidYMid slice">
                    <rect width="280" height="210" fill="#f5f6fe" />
                    <rect x="26" y="24" width="228" height="162" rx="9" fill="#fff" stroke="#dfe2fb" />
                    <rect x="26" y="24" width="228" height="26" rx="9" fill="#eef0fd" />
                    <circle cx="42" cy="37" r="3.2" fill="#c7cdf4" />
                    <circle cx="53" cy="37" r="3.2" fill="#c7cdf4" />
                    <circle cx="64" cy="37" r="3.2" fill="#c7cdf4" />
                    <rect x="44" y="66" width="120" height="13" rx="4" fill="#cdd3f7" />
                    <rect x="44" y="86" width="190" height="13" rx="4" fill="#dfe3fb" />
                    <rect x="44" y="106" width="150" height="13" rx="4" fill="#dfe3fb" />
                    <rect x="44" y="132" width="86" height="13" rx="4" fill="#cdd3f7" />
                    <rect x="44" y="152" width="120" height="13" rx="4" fill="#dfe3fb" />
                    <circle cx="200" cy="138" r="30" fill="#5B27E5" />
                    <rect x="189" y="135" width="22" height="17" rx="3" fill="#fff" />
                    <path d="M193 135 v-4 a7 7 0 0 1 14 0 v4" fill="none" stroke="#fff" strokeWidth="2.6" />
                    <circle cx="200" cy="143" r="2.6" fill="#5B27E5" />
                  </svg>
                  <span className="tok-chip annot">
                    <i style={{ background: "#5B27E5" }} />
                    <i style={{ background: "#cdd3f7" }} />
                    <i style={{ background: "#1A1430" }} />
                  </span>
                  <span className="coming"><b>Under NDA</b></span>
                  <span className="dim-chip annot">confidential</span>
                  <span className="hh tl" />
                  <span className="hh tr" />
                  <span className="hh bl" />
                  <span className="hh br" />
                </div>
                <div className="frame-foot">
                  <div>
                    <div className="f-title">FAANG R&amp;D lab</div>
                    <div className="f-cat">Health-tech · AI · Robotics</div>
                  </div>
                  <span className="open">under NDA</span>
                </div>
              </a>

              {/* FRAME 03 - SORTA */}
              <a className="frame" href="/sorta">
                <div className="frame-tab">
                  <span className="n">03</span>
                </div>
                <div className="artboard">
                  <div className="tile-mock movia-mock">
                    <div className="mm-head">
                      <span className="mm-eyebrow">UX Researcher</span>
                      <span className="mm-word">Sorta</span>
                    </div>
                    <div className="mm-stage">
                      <div className="iphone mm-right"><span className="ip-island" /><div className="ip-screen"><img src="/assets/images/sorta/screens/home.png" alt="Sorta home" /></div></div>
                      <div className="iphone mm-left"><span className="ip-island" /><div className="ip-screen"><img src="/assets/images/sorta/screens/select-goal-2.png" alt="Sorta onboarding, your goal" /></div></div>
                    </div>
                  </div>
                  <span className="dim-chip annot">live beta</span>
                  <span className="hh tl" />
                  <span className="hh tr" />
                  <span className="hh bl" />
                  <span className="hh br" />
                </div>
                <div className="frame-foot">
                  <div>
                    <div className="f-title">Sorta</div>
                    <div className="f-cat">AI · home organization</div>
                  </div>
                  <span className="open">open ↗</span>
                </div>
              </a>
            </div>

          </div>
        </section>

        {/* ===================== CRAFT STATEMENT ===================== */}
        <section className="craft" id="about">
          <span className="mark cross annot" style={{ top: "64px", left: "14%" }} />
          <span className="mark dash annot" style={{ bottom: "70px", right: "12%", width: "90px", height: "54px" }} />
          <div className="wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <div className="lead">I design</div>
            <div className="big">Where the runway meets the roadmap.</div>
          </div>
        </section>
      </div>

      {/* ===================== FOOTER ===================== */}
      <footer id="contact">
        <div className="footer-inner">
          <div className="footer-huge">
            GET IN
            <br />
            TOUCH
          </div>
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
            <span className="font-credit">
              Typeface{" "}
              <a href="https://www.zetafonts.com/collection/3760" target="_blank" rel="noopener noreferrer">
                Hagrid by Zetafonts
              </a>
            </span>
          </div>
        </div>
      </footer>

      <HomeInteractions />
    </div>
  );
}
