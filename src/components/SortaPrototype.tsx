"use client";

import { useState } from "react";
import "./SortaPrototype.css";

const S = "/assets/images/sorta/screens";

// A tappable walk-through of the core Sorta flow, built from the real screens.
const FLOW = [
  { src: `${S}/splash.png`, label: "Welcome" },
  { src: `${S}/home.png`, label: "Home" },
  { src: `${S}/take-photo.png`, label: "Scan the mess" },
  { src: `${S}/select-goal-1.png`, label: "Pick a goal" },
  { src: `${S}/select-time-1.png`, label: "Set a time" },
  { src: `${S}/loading.png`, label: "AI builds a plan" },
  { src: `${S}/preview.png`, label: "Review the plan" },
  { src: `${S}/session1.png`, label: "Sort, one tap at a time" },
  { src: `${S}/donate2.png`, label: "Book a pickup" },
  { src: `${S}/finish-session.png`, label: "Done!" },
  { src: `${S}/rate.png`, label: "Rate the session" },
];

export default function SortaPrototype() {
  const [i, setI] = useState(0);
  const [touched, setTouched] = useState(false);
  const atEnd = i === FLOW.length - 1;

  const advance = () => {
    setTouched(true);
    setI((v) => (v + 1) % FLOW.length);
  };

  return (
    <div className="sorta-proto">
      <div
        className="sp-phone"
        role="button"
        tabIndex={0}
        aria-label={`Sorta prototype — ${FLOW[i].label}. Tap to continue.`}
        onClick={advance}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") {
            e.preventDefault();
            advance();
          }
        }}
      >
        <div className="sp-screen">
          {FLOW.map((s, idx) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={s.src}
              src={s.src}
              alt={s.label}
              className={"sp-img" + (idx === i ? " on" : "")}
              draggable={false}
              loading={idx <= 1 ? "eager" : "lazy"}
            />
          ))}
          <span className="sp-island" />
          <span className={"sp-hint" + (touched ? " dim" : "")}>
            {atEnd ? "↺ replay" : "tap to continue"}
          </span>
        </div>
      </div>

      <div className="sp-caption">{FLOW[i].label}</div>
      <div className="sp-dots" role="tablist" aria-label="Prototype steps">
        {FLOW.map((s, idx) => (
          <button
            key={s.src}
            className={"sp-dot" + (idx === i ? " on" : "")}
            aria-label={`Step ${idx + 1}: ${s.label}`}
            aria-selected={idx === i}
            onClick={(e) => {
              e.stopPropagation();
              setTouched(true);
              setI(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
}
