"use client";

import { useEffect, useState } from "react";
import "./intro.css";

/**
 * Refresh intro: a solid violet screen that clears diagonally (top-left ->
 * bottom-right) as a connected mass, its leading edge breaking into small
 * pixels - revealing the homepage. `intro-done` is added to <html> only once
 * the page has appeared, so the hero puzzle + ID video start after the reveal.
 */
type Cell = { x: number; y: number; s: number; delay: number };

export default function Intro() {
  const [cells, setCells] = useState<Cell[]>([]);
  const [phase, setPhase] = useState<"cover" | "go" | "done">("cover");

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
    const size = Math.ceil(W / 44); // small pixels
    const cols = Math.ceil(W / size);
    const rows = Math.ceil(H / size);
    const SWEEP = 1500; // travel of the diagonal front
    const JITTER = 650; // width/scatter of the pixelated dissolving edge

    const arr: Cell[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const d = (c + r) / (cols + rows - 2 || 1); // diagonal position
        arr.push({ x: c * size, y: r * size, s: size + 1, delay: d * SWEEP + Math.random() * JITTER });
      }
    }
    setCells(arr);
    const maxDelay = arr.reduce((m, a) => Math.max(m, a.delay), 0);

    const goT = window.setTimeout(() => setPhase("go"), 220);
    const doneT = window.setTimeout(() => {
      root.classList.add("intro-done"); // page has appeared -> puzzle + video start
      setPhase("done");
      root.classList.remove("intro-lock");
    }, 220 + maxDelay + 460);

    return () => {
      window.clearTimeout(goT);
      window.clearTimeout(doneT);
      root.classList.remove("intro-lock");
    };
  }, []);

  if (phase === "done") return null;
  return (
    <div className={"intro" + (phase === "go" ? " go" : "")} aria-hidden="true">
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
