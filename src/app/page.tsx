/* eslint-disable @next/next/no-img-element */
import HomeInteractions from "./HomeInteractions";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
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
          <svg className="puzzle-assemble" id="puzzleSvg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" />
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
                <video
                  className="idphoto"
                  src="/assets/video/ashna-wave.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  aria-label="Ashna Damani waving"
                />
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
              {/* FRAME 01 - MAPCHAT */}
              <a className="frame is-soon">
                <div className="frame-tab">
                  <span className="n">01</span>
                </div>
                <div className="artboard">
                  <svg viewBox="0 0 280 210" preserveAspectRatio="xMidYMid slice">
                    <rect width="280" height="210" fill="#eef1f4" />
                    <rect x="18" y="30" width="74" height="58" rx="6" fill="#dce9e0" />
                    <rect x="196" y="112" width="70" height="50" rx="6" fill="#dce9e0" />
                    <path d="M0 158 Q72 142 150 160 T280 150 L280 210 L0 210 Z" fill="#cdddec" />
                    <g stroke="#fff" strokeWidth="6" strokeLinecap="round">
                      <path d="M-6 74 L286 92" />
                      <path d="M-6 128 L286 138" />
                      <path d="M104 -6 L120 216" />
                      <path d="M206 -6 L192 216" />
                    </g>
                    <g stroke="#f4f6f8" strokeWidth="2.6" strokeLinecap="round">
                      <path d="M-6 48 L286 60" />
                      <path d="M52 -6 L60 216" />
                      <path d="M158 -6 L150 216" />
                    </g>
                    <circle cx="150" cy="150" r="16" fill="#5067EB" opacity="0.16" />
                    <circle cx="150" cy="150" r="6" fill="#5067EB" stroke="#fff" strokeWidth="2.4" />
                    <path d="M86 96 C74 96 68 87 68 78 C68 66 86 50 86 50 C86 50 104 66 104 78 C104 87 98 96 86 96 Z" fill="#a9b3f0" />
                    <circle cx="86" cy="75" r="6.5" fill="#fff" />
                    <path d="M214 118 C202 118 196 109 196 100 C196 88 214 72 214 72 C214 72 232 88 232 100 C232 109 226 118 214 118 Z" fill="#5067EB" />
                    <circle cx="214" cy="97" r="6.5" fill="#fff" />
                    <path d="M150 110 C136 110 129 99 129 89 C129 75 150 56 150 56 C150 56 171 75 171 89 C171 99 164 110 150 110 Z" fill="#5B27E5" />
                    <circle cx="150" cy="86" r="7.5" fill="#fff" />
                    <g>
                      <rect x="120" y="16" width="110" height="40" rx="10" fill="#fff" stroke="#e0e3f7" />
                      <path d="M150 56 L143 50 L157 50 Z" fill="#fff" />
                      <circle cx="139" cy="36" r="11" fill="#5B27E5" />
                      <circle cx="139" cy="32" r="4" fill="#fff" />
                      <path d="M132 43 a7 7 0 0 1 14 0" fill="#fff" />
                      <rect x="158" y="27" width="58" height="6" rx="3" fill="#cdd3f7" />
                      <rect x="158" y="39" width="40" height="6" rx="3" fill="#e4e7fb" />
                    </g>
                  </svg>
                  <span className="tok-chip annot">
                    <i style={{ background: "#5B27E5" }} />
                    <i style={{ background: "#5067EB" }} />
                    <i style={{ background: "#cdddec" }} />
                  </span>
                  <span className="coming"><b>Coming soon</b></span>
                  <span className="dim-chip annot">390 × 844</span>
                  <span className="hh tl" />
                  <span className="hh tr" />
                  <span className="hh bl" />
                  <span className="hh br" />
                </div>
                <div className="frame-foot">
                  <div>
                    <div className="f-title">MapChat</div>
                    <div className="f-cat">Social · maps × messaging</div>
                  </div>
                  <span className="open">Coming soon</span>
                </div>
              </a>

              {/* FRAME 02 - AURA */}
              <a className="frame" href="/aura">
                <div className="frame-tab">
                  <span className="n">02</span>
                </div>
                <div className="artboard">
                  <div className="tile-mock aura-mock">
                    <div className="tm-laptop">
                      <span className="tm-bar"><i /><i /><i /></span>
                      <div className="tm-screen"><img src="/assets/images/aura/screens/web-home.png" alt="AURA web dashboard" /></div>
                    </div>
                    <div className="tm-phone"><img src="/assets/images/aura/screens/home.png" alt="AURA app" /></div>
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
                    <div className="f-cat">Fashion-skin · UI/UX</div>
                  </div>
                  <span className="open">open ↗</span>
                </div>
              </a>

              {/* FRAME 03 - NDA */}
              <a className="frame is-soon">
                <div className="frame-tab">
                  <span className="n">03</span>
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
                  <span className="coming"><b>Coming soon</b></span>
                  <span className="dim-chip annot">under nda</span>
                  <span className="hh tl" />
                  <span className="hh tr" />
                  <span className="hh bl" />
                  <span className="hh br" />
                </div>
                <div className="frame-foot">
                  <div>
                    <div className="f-title">Moonshot idea</div>
                    <div className="f-cat">Real client · Product</div>
                  </div>
                  <span className="open">Coming soon</span>
                </div>
              </a>

              {/* FRAME 04 - SORTA */}
              <a className="frame" href="/sorta">
                <div className="frame-tab">
                  <span className="n">04</span>
                </div>
                <div className="artboard">
                  <div className="tile-mock sorta-mock">
                    <div className="tm-phone back"><img src="/assets/images/sorta/screens/select-goal-1.png" alt="Sorta select goal" /></div>
                    <div className="tm-phone front"><img src="/assets/images/sorta/screens/home.png" alt="Sorta home" /></div>
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
          </div>
        </div>
      </footer>

      <HomeInteractions />
    </div>
  );
}
