/**
 * A single very faint word, set very large behind the foot of a section.
 * The section must be `relative isolate overflow-clip` so the word sits
 * behind the content and is cut off at the section's edges. (`clip`, not
 * `hidden`, so scroll-driven motion inside the section still follows the
 * page.) The word rises a little slower than the page as it is scrolled.
 */
export function SectionWatermark({ word }: { word: string }) {
  // Longer words are set smaller so every word spans a similar width.
  const size = Math.min(26, 132 / word.length);

  return (
    <p
      aria-hidden="true"
      className="scroll-watermark pointer-events-none absolute -bottom-[0.2em] left-1/2 -z-10 -translate-x-1/2 leading-none font-extrabold tracking-tighter whitespace-nowrap text-foreground/[0.035] uppercase select-none"
      style={{ fontSize: `${size}vw` }}
    >
      {word}
    </p>
  );
}
