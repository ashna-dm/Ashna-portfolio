"use client";

import { useEffect, useState } from "react";
import "./intro.css";

/**
 * Refresh intro: a violet panel with a 0->100% counter + progress line that
 * slides up to reveal the homepage. Adds `intro-done` to <html> when finished
 * so the hero puzzle starts assembling only after the reveal.
 */
export default function Intro() {
  const [pct, setPct] = useState(0);
  const [phase, setPhase] = useState<"run" | "leave" | "done">("run");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.documentElement.classList.add("intro-done");
      setPhase("done");
      return;
    }
    const root = document.documentElement;
    root.classList.add("intro-lock");

    const DUR = 1500; // count 0 -> 100
    const t0 = performance.now();
    let raf = 0;
    let leaveTimer = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / DUR);
      const eased = 1 - Math.pow(1 - p, 2); // ease-out
      setPct(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        root.classList.add("intro-done");
        setPhase("leave");
        leaveTimer = window.setTimeout(() => {
          setPhase("done");
          root.classList.remove("intro-lock");
        }, 850);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(leaveTimer);
      root.classList.remove("intro-lock");
    };
  }, []);

  if (phase === "done") return null;
  return (
    <div className={"intro" + (phase === "leave" ? " leaving" : "")} aria-hidden="true">
      <span className="intro-name">Ashna</span>
      <div className="intro-count">
        <span className="n">{pct}</span>
        <span className="pct">%</span>
      </div>
      <div className="intro-bar">
        <i style={{ transform: `scaleX(${pct / 100})` }} />
      </div>
    </div>
  );
}
