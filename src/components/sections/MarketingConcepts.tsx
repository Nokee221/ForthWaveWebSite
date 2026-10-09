import type { CSSProperties, ReactNode } from "react";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Modal, ModalTrigger } from "@/components/ui/Modal";
import { Reveal } from "@/components/ui/Reveal";
import {
  type MarketingConcept,
  type MarketingConceptId,
  marketingConcepts,
} from "@/data/marketing";
import { cn } from "@/lib/cn";

/*
 * Three CONCEPT DESIGNS drawn in code — not client work. Any brand names,
 * handles and headlines in them are made up.
 *
 * Each visual sizes itself from the width of its frame (`cqw` → `em`), so it
 * looks the same in the grid and enlarged in the modal. The colors are the
 * concepts' own palettes, not the site's design tokens.
 */

const labelStyle =
  "text-xs font-semibold tracking-[0.16em] text-muted uppercase";

// How each concept sits in the row: different widths and proportions.
const layout: Record<MarketingConceptId, { column: string; aspect: string }> = {
  "social-media": { column: "lg:col-span-4", aspect: "aspect-[4/5]" },
  "digital-advertising": { column: "lg:col-span-5", aspect: "aspect-[5/4]" },
  "brand-identity": { column: "lg:col-span-3", aspect: "aspect-[3/4]" },
};

export function MarketingConcepts() {
  return (
    <Reveal className="group mt-20 grid items-end gap-x-5 gap-y-12 sm:grid-cols-2 md:mt-28 lg:grid-cols-12">
      {marketingConcepts.map((concept, index) => (
        <ConceptCard key={concept.id} concept={concept} index={index} />
      ))}
    </Reveal>
  );
}

function ConceptCard({
  concept,
  index,
}: {
  concept: MarketingConcept;
  index: number;
}) {
  const { column, aspect } = layout[concept.id];
  const titleId = `concept-${concept.id}-title`;
  const style: CSSProperties = { animationDelay: `${index * 120}ms` };

  return (
    <div
      className={cn(
        column,
        "group-data-[reveal=in]:animate-enter group-data-[reveal=pending]:opacity-0",
      )}
      style={style}
    >
      <Modal
        labelledBy={titleId}
        className="md:w-[min(100%-3rem,60rem)]"
        content={
          <div className="md:grid md:grid-cols-2">
            <div className="flex items-center justify-center bg-surface p-6 pt-16 md:p-10">
              <div
                className={cn(
                  "@container relative w-full max-w-[24rem] overflow-hidden rounded-lg",
                  aspect,
                )}
              >
                {visuals[concept.id]}
              </div>
            </div>
            <div className="p-6 md:self-center md:p-10">
              <p className="inline-flex rounded-pill border border-border px-3 py-1 text-xs font-semibold text-muted">
                Concept design — not client work
              </p>
              <p className={cn(labelStyle, "mt-6")}>{concept.number}</p>
              <h3 id={titleId} className="mt-2 text-subheading font-bold">
                {concept.title}
              </h3>
              <p className="mt-4 text-lead text-muted">{concept.description}</p>
              <h4 className={cn(labelStyle, "mt-8 border-t border-border pt-8")}>
                What it explores
              </h4>
              <ul className="mt-4 grid gap-3">
                {concept.explores.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.7em] h-px w-4 shrink-0 bg-accent-gradient"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        }
      >
        <ModalTrigger
          aria-label={`Explore ${concept.number}: ${concept.title}`}
          className="group/concept block w-full cursor-pointer text-left"
        >
          <span
            className={cn(
              "@container relative block overflow-hidden rounded-xl border border-border transition-[translate,border-color,box-shadow] duration-(--duration-normal) ease-standard group-hover/concept:-translate-y-1.5 group-hover/concept:border-accent/60 group-hover/concept:shadow-glow",
              aspect,
            )}
          >
            <span className="absolute inset-0 block transition-[scale] duration-(--duration-slow) ease-emphasized group-hover/concept:scale-[1.04]">
              {visuals[concept.id]}
            </span>
          </span>

          <span className="mt-5 flex items-baseline justify-between gap-4">
            <span className={labelStyle}>Concept design</span>
            <span className={labelStyle}>{concept.number.slice(-2)}</span>
          </span>
          <span className="mt-2 block text-xl font-bold">{concept.title}</span>
          <span className="mt-1 block text-muted">{concept.summary}</span>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-(--duration-fast) ease-standard group-hover/concept:text-accent">
            Explore concept
            <span className="transition-[translate] duration-(--duration-fast) ease-standard group-hover/concept:translate-x-1">
              <ArrowIcon />
            </span>
          </span>
        </ModalTrigger>
      </Modal>
    </div>
  );
}

/* ───────────────────────────── The visuals ───────────────────────────── */

const frame =
  "absolute inset-0 flex flex-col overflow-hidden text-left leading-tight";

// Concept 01 — a social post: editorial type over simple shapes.
const socialPost = (
  <span
    aria-hidden="true"
    className={cn(frame, "text-[4.4cqw]")}
    style={{ background: "#f3eee6", color: "#1b1530" }}
  >
    <span className="flex items-center gap-[0.7em] px-[1.2em] pt-[1.2em]">
      <span
        className="size-[2em] rounded-full"
        style={{ background: "linear-gradient(135deg,#7c3aed,#f28f6b)" }}
      />
      <span>
        <span className="block text-[0.8em] font-bold">yourbrand</span>
        <span className="block text-[0.62em] opacity-60">Sponsored concept</span>
      </span>
    </span>

    <span className="relative mx-[1.2em] mt-[1em] block flex-1 overflow-hidden rounded-[1em]" style={{ background: "#1b1530" }}>
      <span
        className="absolute -top-[18%] -right-[14%] block size-[62%] rounded-full"
        style={{ background: "linear-gradient(160deg,#a855f7,#f28f6b)" }}
      />
      <span
        className="absolute bottom-0 left-[10%] block h-[46%] w-[34%] rounded-t-full"
        style={{ background: "#f3eee6" }}
      />
      <span
        className="absolute right-[12%] bottom-[12%] block size-[16%] rounded-full border-[0.12em]"
        style={{ borderColor: "#f3eee6" }}
      />
      <span
        className="absolute top-[10%] left-[9%] block text-[1.9em] leading-[1.02] font-extrabold tracking-tight"
        style={{ color: "#f3eee6" }}
      >
        Good
        <br />
        ideas
        <br />
        travel.
      </span>
    </span>

    <span className="flex items-center gap-[0.8em] px-[1.2em] pt-[0.9em]">
      <span className="size-[1.1em] rounded-full border-[0.12em] border-current" />
      <span className="size-[1.1em] rounded-[0.3em] border-[0.12em] border-current" />
      <span className="ml-auto size-[1.1em] rounded-[0.3em] border-[0.12em] border-current" />
    </span>
    <span className="block px-[1.2em] pt-[0.7em] pb-[1.2em] text-[0.7em]">
      <span className="font-bold">yourbrand</span>{" "}
      <span className="opacity-70">A new series starts this week.</span>
    </span>
  </span>
);

// Concept 02 — a display ad: headline, one supporting line, one action.
const displayAd = (
  <span
    aria-hidden="true"
    className={cn(frame, "justify-between p-[1.6em] text-[3.6cqw]")}
    style={{ background: "#0d0b14", color: "#f7f5fb" }}
  >
    <span
      className="absolute -top-[30%] -right-[18%] block size-[80%] rounded-full opacity-90"
      style={{
        background:
          "radial-gradient(closest-side,#7c3aed,rgb(124 58 237 / 0.25) 60%,transparent)",
      }}
    />
    <span className="absolute top-[14%] right-[10%] block size-[30%] rounded-full border-[0.08em] border-white/40" />
    <span className="absolute top-[26%] right-[22%] block size-[18%] rounded-full bg-[#c084fc]" />

    <span className="relative flex items-center justify-between text-[0.7em] font-semibold tracking-[0.18em] uppercase opacity-70">
      <span>Brand name</span>
      <span>Ad · Concept</span>
    </span>

    <span className="relative block">
      <span className="block text-[2.5em] leading-[1.02] font-extrabold tracking-tight">
        Make it
        <br />
        <span
          style={{
            backgroundImage: "linear-gradient(135deg,#a855f7,#f0abfc)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          unmistakable.
        </span>
      </span>
      <span className="mt-[0.9em] block max-w-[70%] text-[0.9em] opacity-70">
        One clear message, made for small screens.
      </span>
      <span
        className="mt-[1.3em] inline-flex items-center gap-[0.5em] rounded-full px-[1.3em] py-[0.7em] text-[0.85em] font-bold"
        style={{ background: "#f7f5fb", color: "#0d0b14" }}
      >
        Learn more <span>→</span>
      </span>
    </span>
  </span>
);

const palette = [
  { color: "#7c3aed", name: "Violet" },
  { color: "#1b1530", name: "Ink" },
  { color: "#c4b5fd", name: "Lilac" },
  { color: "#f28f6b", name: "Coral" },
];

// Concept 03 — a brand board: symbol, wordmark, type and palette.
const brandBoard = (
  <span
    aria-hidden="true"
    className={cn(frame, "justify-between p-[1.5em] text-[5.2cqw]")}
    style={{ background: "#efe9f7", color: "#1b1530" }}
  >
    <span className="flex items-center justify-between text-[0.6em] font-semibold tracking-[0.18em] uppercase opacity-60">
      <span>Brand direction</span>
      <span>v1</span>
    </span>

    <span className="block">
      {/* The symbol: two overlapping half circles. */}
      <span className="relative block h-[3.4em] w-[4.6em]">
        <span
          className="absolute bottom-0 left-0 block h-[3.4em] w-[3.4em] rounded-full"
          style={{ background: "#7c3aed" }}
        />
        <span
          className="absolute right-0 bottom-0 block h-[1.7em] w-[3.4em] rounded-t-full mix-blend-multiply"
          style={{ background: "#f28f6b" }}
        />
      </span>
      <span className="mt-[0.5em] block text-[2.6em] leading-none font-extrabold tracking-tight">
        Aven
      </span>
      <span className="mt-[0.5em] block text-[0.7em] opacity-60">
        Aa — Manrope ExtraBold / Regular
      </span>
    </span>

    <span className="flex gap-[0.4em]">
      {palette.map((swatch) => (
        <span key={swatch.name} className="block flex-1">
          <span
            className="block aspect-square rounded-[0.5em]"
            style={{ background: swatch.color }}
          />
          <span className="mt-[0.4em] block text-[0.5em] font-semibold opacity-70">
            {swatch.name}
          </span>
        </span>
      ))}
    </span>
  </span>
);

const visuals: Record<MarketingConceptId, ReactNode> = {
  "social-media": socialPost,
  "digital-advertising": displayAd,
  "brand-identity": brandBoard,
};
