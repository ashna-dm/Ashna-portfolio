/* eslint-disable @next/next/no-img-element */
/**
 * Production stand-in for the prototypes' <image-slot> custom element.
 * Renders a real <img> for slots we have an export for; otherwise a labelled
 * placeholder box (so the layout/aspect is preserved until Ashna drops the
 * real Figma export / photo in).
 */
const S = "/assets/images/sorta/screens";
const A = "/assets/images/aura/screens";
const SLOT_SRC: Record<string, string> = {
  // Sorta case study - media
  "sc-journey": "/assets/images/sorta/sc-journey.jpg",
  "sc-market": "/assets/images/sorta/sc-market.png",
  "sc-opp": "/assets/images/sorta/sc-opp.webp",
  "ds-logo": "/assets/images/sorta/ds-logo.png",
  // Sorta - solution feature screens (curated UI exports; captions now match)
  "sc-f1a": `${S}/home.png`, // Scan the mess: home
  "sc-f1b": `${S}/take-photo.png`, // + scan
  "sc-f2a": `${S}/preview.png`, // One decision at a time: keep/relocate/discard plan
  "sc-f2b": `${S}/session1.png`, // + active session
  "sc-f3a": `${S}/donate1.png`, // It leaves the house: donate / pickup
  "sc-f3b": `${S}/donate2.png`, // + pickup confirm
  "sc-f4a": `${S}/search.png`, // Never lose it again: item finder
  "sc-f4b": `${S}/after-photo.png`, // + result
  // Sorta - onboarding (UNCHANGED per request)
  "sc-onb1": `${S}/splash.png`,
  "sc-onb2": `${S}/select-goal-1.png`,
  "sc-onb3": `${S}/select-goal-2.png`,
  "sc-onb4": `${S}/select-time-1.png`,
  "sc-onb5": `${S}/select-time-2.png`,
  // Sorta - build gallery (screens NOT shown elsewhere, for breadth)
  "sc-g1": `${S}/change-plan.png`,
  "sc-g2": `${S}/offer.png`,
  "sc-g3": `${S}/session0.png`,
  "sc-g4": `${S}/rate.png`,
  "sc-g5": `${S}/finish-session.png`,
  "sc-g6": `${S}/loading.png`,
  "sc-g7": `${S}/pattern.png`, // AI "found a pattern" insight
  "sc-g8": `${S}/resell.png`, // resell marketplace
  // Sorta - design system
  "ds-nav": `${S}/navbar.png`,
  "ds-components": `${S}/ds-components.png`,
  // AURA case study - mobile screens (from the AURA mobile export)
  "aura-p1-1": `${A}/onb1.png`, // Your skin profile: skin condition
  "aura-p1-2": `${A}/onb2.png`, // + sensitivities
  "aura-p2-1": `${A}/scan.png`, // AI fabric risk scan
  "aura-p2-2": `${A}/scan-result.png`, // + result
  "aura-p3-1": `${A}/wardrobe.png`, // Scores for every item: wardrobe
  "aura-p3-2": `${A}/home.png`, // + safe-outfit dashboard
  "aura-p4-1": `${A}/insights.png`, // Insights that learn you
  "aura-p4-2": `${A}/calendar.png`, // + skin risk calendar
  "aura-onb1": `${A}/welcome.png`,
  "aura-onb2": `${A}/onb1.png`,
  "aura-onb3": `${A}/onb2.png`,
  "aura-onb4": `${A}/onb3.png`,
  "aura-onb5": `${A}/onb5.png`,
  "aura-b1": `${A}/reaction.png`,
  "aura-b2": `${A}/daily-log.png`,
  "aura-b3": `${A}/chatbot.png`,
  "aura-b4": `${A}/profile.png`,
  "aura-b5": `${A}/body.png`,
  "aura-b6": `${A}/home.png`,
  // AURA - companion website (desktop)
  "aura-web-1": `${A}/web-home.png`,
  "aura-web-2": `${A}/web-report.png`,
  "aura-web-4": `${A}/web-calendar.png`,
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
