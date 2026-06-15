"use client";

import { useEffect, useState } from "react";
import "./intro.css";

/**
 * Refresh intro, two diagonal passes on a purple screen:
 *  1) a sparse stream of small white pixels flows top -> bottom diagonally;
 *  2) the violet cover dissolves diagonally into small pixels, revealing the
 *     homepage.
 * `intro-done` is added to <html> only once the page has fully appeared, so the
 * hero puzzle + ID video start after the reveal.
 */
type Cell = { x: number; y: number; s: number; delay: number };
type Flow = { x: number; s: number; delay: number };

export default function Intro() {
  const [cells, setCells] = useState<Cell[]>([]);
  const [flow, setFlow] = useState<Flow[]>([]);
  const [phase, setPhase] = useState<"flow" | "go" | "done">("flow");

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
    const JITTER = 460;

    // full-cover cells for the dissolve (pass 2)
    const cArr: Cell[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const d = (c / Math.max(1, cols - 1) + r / Math.max(1, rows - 1)) / 2;
        cArr.push({ x: c * size, y: r * size, s: size + 1, delay: d * SWEEP + Math.random() * JITTER });
      }
    }
    setCells(cArr);
    const coverMax = cArr.reduce((m, a) => Math.max(m, a.delay), 0);

    // sparse stream of pixels for the flow (pass 1)
    const fArr: Flow[] = [];
    for (let i = 0; i < 44; i++) {
      fArr.push({ x: Math.random() * W, s: size, delay: Math.random() * 700 });
    }
    setFlow(fArr);

    const GO = 2050; // start the dissolving pass after the flow pass
    const goT = window.setTimeout(() => setPhase("go"), GO);
    const doneT = window.setTimeout(() => {
      root.classList.add("intro-done"); // page has appeared -> puzzle + video start
      setPhase("done");
      root.classList.remove("intro-lock");
    }, GO + coverMax + 470);

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
          key={"c" + i}
          className="cell"
          style={{ left: c.x, top: c.y, width: c.s, height: c.s, animationDelay: `${c.delay}ms` }}
        />
      ))}
      {flow.map((f, i) => (
        <span
          key={"f" + i}
          className="flow"
          style={{ left: f.x, top: 0, width: f.s, height: f.s, animationDelay: `${f.delay}ms` }}
        />
      ))}
    </div>
  );
}
