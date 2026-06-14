import localFont from "next/font/local";

/**
 * Hagrid (Zetafonts, trial) — display + UI face.
 * Ships ONLY 400 (Regular) and 800 (Extrabold) + italics. No faux synthesis
 * (font-synthesis:none in globals.css) — never request 500/600/700 of Hagrid.
 *
 * NOTE: Hagrid is a *trial* font. Obtain a production license (or swap for a
 * licensed grotesque with matching 400/800 weights) before shipping publicly.
 */
export const hagrid = localFont({
  variable: "--font-hagrid",
  display: "swap",
  src: [
    { path: "../../public/assets/fonts/hagrid/Hagrid-Regular-trial.ttf", weight: "400", style: "normal" },
    { path: "../../public/assets/fonts/hagrid/Hagrid-Italic-trial.ttf", weight: "400", style: "italic" },
    { path: "../../public/assets/fonts/hagrid/Hagrid-Text-Extrabold-trial.ttf", weight: "800", style: "normal" },
    { path: "../../public/assets/fonts/hagrid/Hagrid-Text-Extrabold-Italic-trial.ttf", weight: "800", style: "italic" },
  ],
});

/** Gajraj One — Devanagari display accent. */
export const gajraj = localFont({
  variable: "--font-gajraj",
  display: "swap",
  src: [{ path: "../../public/assets/fonts/gajraj/GajrajOne-Regular.ttf", weight: "400", style: "normal" }],
});

export const fontVars = `${hagrid.variable} ${gajraj.variable}`;
