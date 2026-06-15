"use client";

import { useState } from "react";
import "./ScreenFlow.css";

export type Frame = { src: string; label: string };

/**
 * A generic tap-through image cycler. Fills its (positioned) parent — the
 * device frame (laptop .scr or phone screen) is provided by the caller.
 */
export default function ScreenFlow({
  frames,
  fit = "cover",
  objectPosition = "center top",
}: {
  frames: Frame[];
  fit?: "cover" | "contain";
  objectPosition?: string;
}) {
  const [i, setI] = useState(0);
  const [touched, setTouched] = useState(false);
  const atEnd = i === frames.length - 1;
  const advance = () => {
    setTouched(true);
    setI((v) => (v + 1) % frames.length);
  };
  return (
    <div
      className="screenflow"
      role="button"
      tabIndex={0}
      aria-label={`Prototype — ${frames[i].label}. Tap to continue.`}
      onClick={advance}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") {
          e.preventDefault();
          advance();
        }
      }}
    >
      {frames.map((f, idx) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={f.src}
          src={f.src}
          alt={f.label}
          className={"sf-img" + (idx === i ? " on" : "")}
          style={{ objectFit: fit, objectPosition }}
          draggable={false}
          loading={idx <= 1 ? "eager" : "lazy"}
        />
      ))}
      <span className={"sf-hint" + (touched ? " dim" : "")}>
        {atEnd ? "↺ replay" : "tap →"}
      </span>
    </div>
  );
}
