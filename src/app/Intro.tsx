"use client";

import { useEffect, useState } from "react";
import "./intro.css";

/**
 * Refresh intro: a plain violet screen with a few "pixels" streaking
 * diagonally from top to bottom, twice, then the panel slides up to reveal
 * the homepage. Adds `intro-done` to <html> when finished so the hero puzzle
 * (and the ID video) start only after the reveal.
 */
const PIXELS = 8;

export default function Intro() {
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

    const HOLD = 3600; // two diagonal passes
    const REVEAL = 850; // slide-up duration
    const leaveTimer = window.setTimeout(() => {
      root.classList.add("intro-done");
      setPhase("leave");
    }, HOLD);
    const doneTimer = window.setTimeout(() => {
      setPhase("done");
      root.classList.remove("intro-lock");
    }, HOLD + REVEAL);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
      root.classList.remove("intro-lock");
    };
  }, []);

  if (phase === "done") return null;
  return (
    <div className={"intro" + (phase === "leave" ? " leaving" : "")} aria-hidden="true">
      <div className="intro-px">
        {Array.from({ length: PIXELS }).map((_, i) => (
          <i key={i} style={{ animationDelay: `${i * 0.06}s` }} />
        ))}
      </div>
    </div>
  );
}
