"use client";

import { useEffect, useState } from "react";
import "./intro.css";

/**
 * Refresh intro: a purple screen with a SPARSE scatter of small pixels that
 * dissolve away diagonally (top-left -> bottom-right), then the purple clears
 * to reveal the homepage. `intro-done` is added to <html> only once the page
 * has appeared, so the hero puzzle + ID video start after the reveal.
 */
type Cell = { x: number; y: number; s: number; delay: number };

const DENSITY = 0.05; // few pixels -> lots of blank purple

export default function Intro() {
  const [cells, setCells] = useState<Cell[]>([]);
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

    const W = window.innerWidth;
    const H = window.innerHeight;
    const size = Math.ceil(W / 48); // small pixels
    const cols = Math.ceil(W / size);
    const rows = Math.ceil(H / size);
    const SWEEP = 1300;
    const JITTER = 500;

    const arr: Cell[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (Math.random() > DENSITY) continue;
        const d = (c / Math.max(1, cols - 1) + r / Math.max(1, rows - 1)) / 2;
        arr.push({ x: c * size, y: r * size, s: size, delay: d * SWEEP + Math.random() * JITTER });
      }
    }
    setCells(arr);
    const maxDelay = arr.reduce((m, a) => Math.max(m, a.delay), 0);

    const leaveT = window.setTimeout(() => setPhase("leave"), maxDelay + 120);
    const doneT = window.setTimeout(() => {
      root.classList.add("intro-done"); // page has appeared -> puzzle + video start
      setPhase("done");
      root.classList.remove("intro-lock");
    }, maxDelay + 120 + 750);

    return () => {
      window.clearTimeout(leaveT);
      window.clearTimeout(doneT);
      root.classList.remove("intro-lock");
    };
  }, []);

  if (phase === "done") return null;
  return (
    <div className={"intro" + (phase === "leave" ? " leaving" : "")} aria-hidden="true">
      {cells.map((c, i) => (
        <span
          key={i}
          className="cell"
          style={{ left: c.x, top: c.y, width: c.s, height: c.s, animationDelay: `${c.delay}ms` }}
        />
      ))}
    </div>
  );
}
