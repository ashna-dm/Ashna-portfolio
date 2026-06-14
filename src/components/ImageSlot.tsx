/* eslint-disable @next/next/no-img-element */
/**
 * Production stand-in for the prototypes' <image-slot> custom element.
 * Renders a real <img> for slots we have an export for; otherwise a labelled
 * placeholder box (so the layout/aspect is preserved until Ashna drops the
 * real Figma export / photo in).
 */
const S = "/assets/images/sorta/screens";
const SLOT_SRC: Record<string, string> = {
  // Sorta case study — media
  "sc-journey": "/assets/images/sorta/sc-journey.png",
  "sc-market": "/assets/images/sorta/sc-market.png",
  "sc-opp": "/assets/images/sorta/sc-opp.webp",
  "ds-logo": "/assets/images/sorta/ds-logo.png",
  // Sorta — solution feature screens (pulled from Figma "essential flow")
  "sc-f1a": `${S}/home-page.png`,
  "sc-f1b": `${S}/take-photo.png`,
  "sc-f2a": `${S}/select-goal-1.png`,
  "sc-f2b": `${S}/start-session-1.png`,
  "sc-f3a": `${S}/preview.png`,
  "sc-f3b": `${S}/change-plan.png`,
  "sc-f4a": `${S}/start-session-0.png`,
  "sc-f4b": `${S}/after-photo.png`,
  // Sorta — onboarding
  "sc-onb1": `${S}/splash.png`,
  "sc-onb2": `${S}/select-goal-1.png`,
  "sc-onb3": `${S}/select-goal-2.png`,
  "sc-onb4": `${S}/select-time-1.png`,
  "sc-onb5": `${S}/select-time-2.png`,
  // Sorta — build gallery
  "sc-g1": `${S}/home-page.png`,
  "sc-g2": `${S}/take-photo.png`,
  "sc-g3": `${S}/start-session-1.png`,
  "sc-g4": `${S}/preview.png`,
  "sc-g5": `${S}/start-session-0.png`,
  "sc-g6": `${S}/after-photo.png`,
  // Story board
  "story-portrait": "/assets/images/story/story-portrait.webp",
  "story-snap-1": "/assets/images/story/offduty.jpg", // "me, off duty"
  "story-snap-2": "/assets/images/story/studio-chaos.jpg", // "the studio chaos"
  "story-snap-3": "/assets/images/story/pour-over.jpg", // "pour-over #47"
  "story-snap-4": "/assets/images/story/good-find.jpg", // "a good find"
};

export default function ImageSlot({
  id,
  placeholder = "",
  className,
  fit = "cover",
}: {
  id?: string;
  placeholder?: string;
  className?: string;
  fit?: "cover" | "contain";
}) {
  const src = id ? SLOT_SRC[id] : undefined;
  if (src) {
    // When a sizing className (e.g. the polaroid ".ph") is provided, let its CSS
    // own the height; otherwise fill the parent container (e.g. ".glass").
    const style: React.CSSProperties = className
      ? { width: "100%", objectFit: fit, display: "block" }
      : { width: "100%", height: "100%", objectFit: fit, display: "block" };
    return <img className={className} src={src} alt={placeholder || id || ""} style={style} />;
  }
  return (
    <div className={className ? `${className} imgslot-ph` : "imgslot-ph"}>
      <span>{placeholder}</span>
    </div>
  );
}
