import type { Metadata } from "next";
import ImageSlot from "@/components/ImageSlot";
import StoryInteractions from "@/components/StoryInteractions";
import "./story.css";

export const metadata: Metadata = {
  title: "Ashna Damani · Story",
  description: "Ashna's story, a personal FigJam board where the runway met the roadmap.",
};

export default function StoryPage() {
  return (
    <>
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
              <a className="np" href="#play">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17" /><path d="M12 3.5c2.6 2.3 4 5.3 4 8.5s-1.4 6.2-4 8.5c-2.6-2.3-4-5.3-4-8.5s1.4-6.2 4-8.5Z" /></svg>
                <span className="lbl">play</span>
              </a>
              <a className="np" href="/assets/Ashna-Resume.pdf" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3.5h7L18 7.5V20a.5.5 0 0 1-.5.5h-10A.5.5 0 0 1 7 20Z" /><path d="M13.5 3.5V8h4.5" /><path d="M9.5 12.5h5" /><path d="M9.5 16h5" /></svg>
                <span className="lbl">résumé</span>
              </a>
              <a className="np active" href="#top">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="15.5" cy="5" r="1.9" /><path d="M14.5 8.6l-3.2 2.4 2.4 2.3-1 5.2" /><path d="M11.3 11l-4 .4" /><path d="M13.7 13.3l3.6 1.4" /><path d="M5.5 20.5l3.2-3.6" /></svg>
                <span className="lbl">story</span>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* FIGMA CHROME */}
      <div className="fchrome presence">
        <span className="av" style={{ background: "#5067EB" }}>AD</span>
        <span className="av" style={{ background: "#28a36d" }}>YOU</span>
        <span className="av" style={{ background: "#E5677A" }}>?</span>
      </div>
      <div className="fchrome zoom">
        <button id="zoomOut" aria-label="Zoom out">−</button>
        <span className="val" id="zoomVal">100%</span>
        <button id="zoomIn" aria-label="Zoom in">+</button>
      </div>

      {/* CANVAS */}
      <div className="stage" id="top">
        <div className="board" id="board">

          {/* FRAME 1 - INTRO */}
          <section className="frame">
            <div className="frame-head"><span className="frame-name">About · Ashna</span><span className="frame-dim">1280 × 600</span></div>
            <div className="frame-body" style={{ height: "600px" }}>
              <div className="titleobj" style={{ left: "34px", top: "64px" }}>
                <div className="t" style={{ fontSize: "54px" }}>My personal<br />FigJam board</div>
                <div className="sel" />
                <span className="h tl" /><span className="h tr" /><span className="h bl" /><span className="h br" />
                <div className="dim">my-board · layer</div>
              </div>
              <div className="scribble peri" style={{ left: "40px", top: "20px", transform: "rotate(-4deg)" }}>hi there!</div>
              <div className="sticky wide s-yellow" style={{ left: "36px", top: "206px", transform: "rotate(-2deg)" }}>
                <span className="k">// intro.txt</span>
                <p>I design products where the <b>runway meets the roadmap</b>. Fashion school taught me fit; product design taught me ship. These days I&apos;m <b>AI&#8209;native</b> at MapChat Social.</p>
              </div>
              <div className="polaroid tall" style={{ left: "486px", top: "64px", transform: "rotate(3deg)" }}>
                <span className="tape" style={{ left: "84px", top: "-12px", transform: "rotate(-7deg)" }} />
                <ImageSlot id="story-portrait" className="ph" placeholder="DROP YOUR PHOTO" />
                <div className="cap">the designer, allegedly</div>
              </div>
              <div className="comment" style={{ left: "724px", top: "84px" }}>1
                <div className="pop"><span className="who">Ashna</span><span className="msg">this is me on a good, well&#8209;lit day.</span></div>
              </div>
              <div className="cursortag peri float" style={{ left: "372px", top: "150px" }}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 7-6 1.5L10 18z" /></svg>
                <span className="flag">Ashna</span>
              </div>
              <div className="sticky sm s-peri" style={{ left: "772px", top: "128px", transform: "rotate(-3deg)" }}>
                <p>Originally from <b>Mumbai, India.</b><br />Based in <b>Boston, MA.</b></p>
              </div>
              <div className="sticky sm s-mint" style={{ left: "1012px", top: "74px", transform: "rotate(4deg)" }}>
                <p>coffee &gt; everything.<br />non&#8209;negotiable.</p>
              </div>
              <div className="sticky sm s-coral" style={{ left: "728px", top: "296px", transform: "rotate(3deg)" }}>
                <p>ENFP, and<br />yes, it shows.</p>
              </div>
              <div className="sticky sm s-lav" style={{ left: "1002px", top: "250px", transform: "rotate(-4deg)" }}>
                <p>fluent in Figma<br />&amp; light sarcasm.</p>
              </div>
              <div className="sticky sm s-peach" style={{ left: "884px", top: "430px", transform: "rotate(2deg)" }}>
                <p><b>MBA in Design Strategy</b> from CCA, because two degrees weren&apos;t enough.</p>
              </div>
              <svg className="doodle" style={{ left: "300px", top: "360px", width: "150px", height: "150px" }} viewBox="0 0 150 150" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 20 C 60 50, 70 90, 60 120" />
                <path d="M48 104 L60 124 L76 110" />
              </svg>
              <div className="scribble" style={{ left: "506px", top: "512px", transform: "rotate(-4deg)" }}>my journal&apos;s down here ↓</div>
            </div>
          </section>

          {/* FRAME 2 - THE JOURNAL */}
          <section className="frame" id="book-frame">
            <div className="frame-head"><span className="frame-name">The Journal · field notes</span><span className="frame-dim">flip-through · 4 spreads</span></div>
            <div className="frame-body" style={{ height: "720px" }}>
              <div className="sticky s-yellow" style={{ left: "18px", top: "236px", transform: "rotate(-5deg)", zIndex: 20 }}>
                <span className="k">// hint</span>
                <p className="big">Please flip<br />through the<br />book →</p>
              </div>
              <div className="book-host" style={{ position: "absolute", left: "230px", top: "108px", width: "820px" }}>
                <div className="book-wrap">
                  <div className="book closed" id="book">
                    <div className="base left" />
                    <div className="base right" />
                    <div className="leaf" data-i={0}>
                      <div className="face front">
                        <div className="cover">
                          <div><div className="ctitle">The Long<br />Version</div><div className="cby">by Ashna Damani</div></div>
                          <div className="cstamp">EST.<br />2016</div>
                        </div>
                      </div>
                      <div className="face back">
                        <div className="pg chL ruled">
                          <div className="num">01</div><div className="chlbl">Chapter one</div>
                          <div className="ttl">Cut &amp; Sew</div><div className="meta">2016–2020 · pattern-paper era</div>
                          <div className="doodle2"><svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 50c8-22 24-34 38-38" /><circle cx="50" cy="14" r="4" /><path d="M16 52l-6 2 2-6" /><path d="M30 30l8 8" /></svg></div>
                          <div className="pnum">p. 02</div>
                        </div>
                      </div>
                    </div>
                    <div className="leaf" data-i={1}>
                      <div className="face front">
                        <div className="pg chR ruled">
                          <div className="chlbl">Where it started</div>
                          <p className="lede">Before wireframes there were <b>pattern blocks</b>. A dual degree, fashion design <b>and a B.Com</b>, taught me that a garment lives or dies on the seam allowance, and that &quot;almost fits&quot; is just a polite word for <b>&quot;doesn&apos;t.&quot;</b></p>
                          <div className="pull">Turns out onboarding flows feel exactly the same.</div>
                          <span className="chip">tools: needle, thread, stubbornness</span>
                          <div className="pnum">p. 03</div>
                        </div>
                      </div>
                      <div className="face back">
                        <div className="pg chL ruled">
                          <div className="num">02</div><div className="chlbl">Chapter two</div>
                          <div className="ttl">Runway → Roadmap</div><div className="meta">2022 · moved to the USA</div>
                          <div className="doodle2"><svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 44h44" /><path d="M16 44V22l10-8 10 8v22" /><path d="M40 30l12-4-2 12" /></svg></div>
                          <div className="pnum">p. 04</div>
                        </div>
                      </div>
                    </div>
                    <div className="leaf" data-i={2}>
                      <div className="face front">
                        <div className="pg chR ruled">
                          <div className="chlbl">The plot twist</div>
                          <p className="lede">Somewhere between a Figma trial and a <b>3am prototype</b>, I realized I&apos;d been doing product design all along, just with thread. The medium changed; the obsession with <b>how it feels to use</b> didn&apos;t.</p>
                          <div className="pull">I opened Figma &quot;just to try it.&quot; Never closed it.</div>
                          <span className="chip">tools: figma, caffeine, audacity</span>
                          <div className="pnum">p. 05</div>
                        </div>
                      </div>
                      <div className="face back">
                        <div className="pg chL ruled">
                          <div className="num">03</div><div className="chlbl">Chapter three</div>
                          <div className="ttl">Going Native</div><div className="meta">2024–now · MapChat Social</div>
                          <div className="doodle2"><svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M32 54s16-14 16-26a16 16 0 1 0-32 0c0 12 16 26 16 26Z" /><circle cx="32" cy="28" r="6" /></svg></div>
                          <div className="pnum">p. 06</div>
                        </div>
                      </div>
                    </div>
                    <div className="leaf" data-i={3}>
                      <div className="face front">
                        <div className="pg chR ruled">
                          <div className="chlbl">Present day</div>
                          <p className="lede">Now I design with <b>AI in the loop</b>, not on the sidelines. At MapChat Social I&apos;m building the places people actually want to meet, half cartographer, half matchmaker, <b>fully caffeinated</b>.</p>
                          <div className="pull">The runway finally met the roadmap.</div>
                          <span className="chip">tools: ai, maps, good intentions</span>
                          <div className="pnum">p. 07</div>
                        </div>
                      </div>
                      <div className="face back">
                        <div className="pg endp">
                          <div className="big">To be continued…</div>
                          <div className="small">the best chapters haven&apos;t shipped yet.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment" style={{ left: "1052px", top: "150px" }}>2
                <div className="pop"><span className="who">you</span><span className="msg">start at the cover, then click the right page.</span></div>
              </div>
              <div className="cursortag green float" style={{ left: "96px", top: "486px" }}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 7-6 1.5L10 18z" /></svg>
                <span className="flag">you</span>
              </div>
              <div className="cursortag coral float b" style={{ left: "1066px", top: "454px" }}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 7-6 1.5L10 18z" /></svg>
                <span className="flag">recruiter</span>
              </div>
              <div className="scribble peri" style={{ left: "548px", top: "648px", transform: "rotate(-3deg)" }}>(yes, it really flips)</div>
            </div>
          </section>

          {/* FRAME 3 - TIMELINE */}
          <section className="frame">
            <div className="frame-head"><span className="frame-name">The Timeline · minus the fluff</span><span className="frame-dim">2016 → now</span></div>
            <div className="frame-body" style={{ height: "420px" }}>
              <svg className="doodle" style={{ left: 0, top: 0, width: "1280px", height: "420px" }} viewBox="0 0 1280 420" fill="none" stroke="currentColor" strokeWidth="2.2" strokeDasharray="2 9" strokeLinecap="round">
                <path d="M150 150 C 240 230, 300 250, 380 250 C 470 250, 520 150, 630 150 C 740 150, 770 250, 880 250 C 980 250, 1010 160, 1130 150" />
              </svg>
              <div className="tlcard" style={{ left: "46px", top: "70px", transform: "rotate(-2deg)" }}>
                <span className="yr">2016</span><div className="h">Enrolled · fashion + B.Com</div>
                <div className="d">Started a dual undergraduate degree: Fashion Design and a B.Com. Two worlds, one very full timetable.</div>
              </div>
              <div className="tlcard" style={{ left: "296px", top: "190px", transform: "rotate(2deg)" }}>
                <span className="yr">2022</span><div className="h">Moved to the USA</div>
                <div className="d">Did my UX Design certification and discovered Figma. The pivot began here.</div>
              </div>
              <div className="tlcard" style={{ left: "546px", top: "70px", transform: "rotate(-1deg)" }}>
                <span className="yr">2024</span><div className="h">Started an MBA in Design Strategy</div>
                <div className="d">At California College of the Arts, connecting design to the bigger business picture.</div>
              </div>
              <div className="tlcard" style={{ left: "796px", top: "190px", transform: "rotate(2deg)" }}>
                <span className="yr">2026</span><div className="h">Graduated with an MBA</div>
                <div className="d">…and a mind full of ideas. Traded croqui sketches for a design system.</div>
              </div>
              <div className="tlcard now" style={{ left: "1046px", top: "70px", transform: "rotate(-2deg)" }}>
                <span className="yr"><span className="livedot" />currently</span><div className="h">Shipping MapChat Social</div>
                <div className="d">Building the places people actually want to meet. Currently caffeinated.</div>
              </div>
            </div>
          </section>

          {/* FRAME 4 - OFF THE CLOCK */}
          <section className="frame" id="play">
            <div className="frame-head"><span className="frame-name">Off the clock</span><span className="frame-dim">the fun stuff</span></div>
            <div className="frame-body" style={{ height: "840px" }}>
              <div className="polaroid tall" style={{ left: "36px", top: "56px", transform: "rotate(-4deg)" }}>
                <span className="tape coral" style={{ left: "78px", top: "-12px", transform: "rotate(6deg)" }} />
                <ImageSlot id="story-snap-1" className="ph" placeholder="DROP A PHOTO" />
                <div className="cap">me, off duty</div>
              </div>
              <div className="sticky s-yellow" style={{ left: "330px", top: "44px", transform: "rotate(3deg)" }}>
                <span className="k">// hobby 01</span>
                <p className="big">Thrift archaeologist</p>
                <p style={{ marginTop: "7px" }}>I rework vintage finds into things I&apos;ll actually wear.</p>
              </div>
              <div className="sticky s-peri" style={{ left: "590px", top: "96px", transform: "rotate(-3deg)" }}>
                <span className="k">// hobby 02</span>
                <p className="big">Coffee cartographer</p>
                <p style={{ marginTop: "7px" }}>Mapping the city one café at a time. It&apos;s research, technically.</p>
              </div>
              <div className="polaroid wide" style={{ left: "858px", top: "48px", transform: "rotate(3deg)" }}>
                <span className="tape" style={{ left: "104px", top: "-12px", transform: "rotate(-6deg)" }} />
                <ImageSlot id="story-snap-2" className="ph" placeholder="DROP A PHOTO" />
                <div className="cap">the studio chaos</div>
              </div>
              <div className="sticky s-mint" style={{ left: "330px", top: "316px", transform: "rotate(-4deg)" }}>
                <span className="k">// hobby 03</span>
                <p className="big">Board&#8209;game menace</p>
                <p style={{ marginTop: "7px" }}>Catan, but make it competitive friendships.</p>
              </div>
              <div className="sticky s-coral" style={{ left: "600px", top: "356px", transform: "rotate(4deg)" }}>
                <span className="k">// hobby 04</span>
                <p className="big">Serial wanderer</p>
                <p style={{ marginTop: "7px" }}>I collect places, not things, always plotting the next trip somewhere new.</p>
              </div>
              <div className="sticky s-lav" style={{ left: "872px", top: "332px", transform: "rotate(-3deg)" }}>
                <span className="k">// hobby 05</span>
                <p className="big">Long&#8209;walk thinker</p>
                <p style={{ marginTop: "7px" }}>Best ideas arrive somewhere around kilometre four.</p>
              </div>
              <div className="polaroid sm" style={{ left: "70px", top: "496px", transform: "rotate(5deg)" }}>
                <span className="tape" style={{ left: "58px", top: "-12px", transform: "rotate(-6deg)" }} />
                <ImageSlot id="story-snap-3" className="ph" placeholder="DROP A PHOTO" />
                <div className="cap">pour&#8209;over #47</div>
              </div>
              <div className="sticky wide s-peri" style={{ left: "372px", top: "592px", transform: "rotate(-2deg)" }}>
                <span className="k">// currently</span>
                <p><b>Reading:</b> too many romance books at once.<br /><b>Listening:</b> lo&#8209;fi + bollywood songs.<br /><b>Building:</b> MapChat Social, obviously.</p>
              </div>
              <div className="polaroid sm" style={{ left: "1006px", top: "540px", transform: "rotate(6deg)" }}>
                <span className="tape yellow" style={{ left: "62px", top: "-12px", transform: "rotate(-8deg)" }} />
                <ImageSlot id="story-snap-4" className="ph" placeholder="DROP A PHOTO" />
                <div className="cap">a good find</div>
              </div>
              <div className="scribble peri" style={{ left: "726px", top: "622px", transform: "rotate(-5deg)" }}>say hi! ↘</div>
              <svg className="doodle" style={{ left: "760px", top: "660px", width: "120px", height: "120px" }} viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 24 C 70 40, 96 70, 92 100" />
                <path d="M76 86 L94 104 L104 84" />
              </svg>
            </div>
          </section>

        </div>
        <div className="board-spacer" id="spacer" />
      </div>

      {/* FOOTER */}
      <footer id="contact">
        <div className="footer-inner">
          <div className="footer-huge">GET IN<br />TOUCH</div>
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

      <StoryInteractions />
    </>
  );
}
