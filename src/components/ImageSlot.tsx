/* eslint-disable @next/next/no-img-element */
/**
 * Production stand-in for the prototypes' <image-slot> custom element.
 * Renders a real <img> for slots we have an export for; otherwise a labelled
 * placeholder box (so the layout/aspect is preserved until Ashna drops the
 * real Figma export / photo in).
 */
const SLOT_SRC: Record<string, string> = {
  // Sorta case study
  "sc-journey": "/assets/images/sorta/sc-journey.png",
  "sc-market": "/assets/images/sorta/sc-market.png",
  "sc-opp": "/assets/images/sorta/sc-opp.webp",
  "ds-logo": "/assets/images/sorta/ds-logo.png",
  // Story board
  "story-portrait": "/assets/images/story/story-portrait.webp",
  "story-snap-3": "/assets/images/story/story-snap-3.webp",
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
    return (
      <img
        className={className}
        src={src}
        alt={placeholder || id || ""}
        style={{ width: "100%", height: "100%", objectFit: fit, display: "block" }}
      />
    );
  }
  return (
    <div className={className ? `${className} imgslot-ph` : "imgslot-ph"}>
      <span>{placeholder}</span>
    </div>
  );
}
