"use client";

import { useEffect, useState } from "react";
import "./intro.css";

/**
 * Refresh intro: a solid violet screen that breaks into pixel squares and
 * dissolves away diagonally (top-left -> bottom-right) to reveal the homepage,
 * like a pixel-dissolve edge. Adds `intro-done` to <html> when the reveal
 * starts so the hero puzzle and ID video begin as the page appears.
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
    const size = Math.ceil(W / 48); // ~48 columns of small pixels
    const cols = Math.ceil(W / size);
    const rows = Math.ceil(H / size);
    const SWEEP = 1400; // ms across the diagonal
    const JITTER = 620; // scatter at the dissolving edge

    const arr: Cell[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const d = (c / Math.max(1, cols - 1) + r / Math.max(1, rows - 1)) / 2;
        arr.push({ x: c * size, y: r * size, s: size + 1, delay: d * SWEEP + Math.random() * JITTER });
      }
    }
    setCells(arr);
    const maxDelay = arr.reduce((m, a) => Math.max(m, a.delay), 0);

    const goT = window.setTimeout(() => {
      setPhase("go");
      root.classList.add("intro-done");
    }, 200);
    const doneT = window.setTimeout(() => {
      setPhase("done");
      root.classList.remove("intro-lock");
    }, 200 + maxDelay + 480);

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
