import type { CSSProperties, ReactNode } from "react";
import type { DemoSiteId } from "@/data/projects";
import { cn } from "@/lib/cn";

/*
 * FICTIONAL DEMO WEBSITES — not real FourthWave projects or clients.
 *
 * Drawn in code so the Web Development section can be previewed before real
 * screenshots exist. Each one is replaced automatically when its screenshot
 * file is added (see src/data/webProjects.ts).
 *
 * Every size is in `em`, and the root font size follows the width of the
 * browser page (`cqw`), so a site looks the same at any mockup size. The
 * parent must be a size container (BrowserFrame's page area is one).
 *
 * Each site is taller than the 16:10 page area: the first screen is exactly
 * one page tall and more sections follow below it.
 *
 * Colors and fonts are the demo brands' own, not the site's design tokens.
 */

/** One page area tall: the frame is 16:10, so 62.5% of its width. */
const firstScreen = "h-[62.5cqw]";

// Small parts appear shortly after the mockup itself has been revealed.
const appear = "group-data-[reveal=in]:animate-enter";

function delay(ms: number): CSSProperties {
  return { animationDelay: `${ms}ms` };
}

export function DemoWebsite({
  id,
  view = "top",
}: {
  id: DemoSiteId;
  /** "top" shows the first screen; "lower" shows the end of the page. */
  view?: "top" | "lower";
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-x-0 text-left text-[1.35cqw] leading-tight",
        view === "top" ? "top-0" : "bottom-0",
      )}
    >
      {sites[id]}
    </div>
  );
}

/* ───────────────────────── Halden Studio (architecture) ───────────────────────── */

const halden = {
  background: "#f2eee7",
  ink: "#1c1a17",
  muted: "#7b7468",
  line: "#d8d0c2",
  clay: "#b0562f",
  dark: "#24211d",
  serif: '"Iowan Old Style", "Palatino Linotype", Georgia, serif',
};

/** A modernist house against a pale sky, built from plain blocks. */
function HaldenHouse() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg, #c8beac 0%, #e8dfd0 62%, #b4a894 62%, #a39884 100%)",
      }}
    >
      <span
        className="absolute top-[11%] right-[13%] size-[7.5em] rounded-full"
        style={{ background: "#f6ecdb" }}
      />
      {/* Rear volume */}
      <span
        className="absolute bottom-[38%] left-[7%] h-[30%] w-[34%]"
        style={{ background: "#4b453e" }}
      />
      {/* Glazed ground floor, lit from inside */}
      <span
        className="absolute bottom-[38%] left-[22%] h-[21%] w-[46%]"
        style={{
          background:
            "repeating-linear-gradient(90deg, #ecc793 0 11.5%, #2a2622 11.5% 12.5%)",
        }}
      />
      {/* Cantilevered upper floor */}
      <span
        className="absolute bottom-[59%] left-[14%] h-[16%] w-[68%]"
        style={{
          background: "linear-gradient(180deg, #37322c 0 8%, #26221e 8%)",
        }}
      >
        <span
          className="absolute top-[34%] right-[9%] h-[38%] w-[24%]"
          style={{ background: "#dcb57f" }}
        />
      </span>
      {/* Core */}
      <span
        className="absolute bottom-[38%] left-[59%] h-[50%] w-[9%]"
        style={{ background: "#1d1a17" }}
      />
      {/* Pool */}
      <span
        className="absolute bottom-[13%] left-[10%] h-[12%] w-[62%]"
        style={{
          background: "linear-gradient(180deg, #8d8473 0%, #a69c88 100%)",
        }}
      />
      {/* Afternoon shade */}
      <span
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(118deg, transparent 62%, rgb(28 26 23 / 0.1) 62%)",
        }}
      />
    </div>
  );
}

function HaldenWork({
  name,
  type,
  children,
}: {
  name: string;
  type: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[0.4em]">
        {children}
      </div>
      <p className="mt-[0.9em] text-[0.9em] font-bold">{name}</p>
      <p className="mt-[0.25em] text-[0.72em]" style={{ color: halden.muted }}>
        {type}
      </p>
    </div>
  );
}

const haldenStudio = (
  <div style={{ background: halden.background, color: halden.ink }}>
    <div className={cn(firstScreen, "flex flex-col")}>
      <div className="flex items-center justify-between px-[3.4em] pt-[1.9em]">
        <span className="text-[1.02em] font-extrabold tracking-[0.34em]">
          HALDEN
        </span>
        <div
          className="flex gap-[2.4em] text-[0.8em] font-medium"
          style={{ color: halden.muted }}
        >
          <span style={{ color: halden.ink }}>Projects</span>
          <span>Studio</span>
          <span>Journal</span>
          <span>Contact</span>
        </div>
        <span
          className="rounded-[2em] border px-[1.2em] py-[0.55em] text-[0.78em] font-semibold"
          style={{ borderColor: halden.ink }}
        >
          Start a project
        </span>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-12 gap-[2.2em] px-[3.4em] pt-[2.2em] pb-[2.6em]">
        <div className="col-span-5 flex flex-col pt-[1.6em]">
          <p
            className="flex items-center gap-[0.9em] text-[0.7em] font-semibold tracking-[0.2em] uppercase"
            style={{ color: halden.clay }}
          >
            <span
              className="h-px w-[2.4em]"
              style={{ background: halden.clay }}
            />
            Architecture &amp; Interiors
          </p>
          <p
            className="mt-[0.5em] text-[3.9em] leading-[1.03] tracking-[-0.02em]"
            style={{ fontFamily: halden.serif }}
          >
            Spaces shaped by light and quiet detail.
          </p>
          <p
            className="mt-[1.5em] max-w-[24em] text-[0.92em] leading-[1.6]"
            style={{ color: halden.muted }}
          >
            A small studio designing homes, interiors and places to work, from
            the first sketch to the final handover.
          </p>
          <div className="mt-[2em] flex items-center gap-[1.6em] text-[0.82em] font-semibold">
            <span
              className="rounded-[2em] px-[1.5em] py-[0.85em]"
              style={{ background: halden.ink, color: halden.background }}
            >
              View projects
            </span>
            <span className="underline underline-offset-[0.35em]">
              Our approach
            </span>
          </div>
          <div
            className="mt-auto flex items-center gap-[1em] text-[0.72em]"
            style={{ color: halden.muted }}
          >
            <span className="font-semibold" style={{ color: halden.ink }}>
              01
            </span>
            <span className="h-px w-[5em]" style={{ background: halden.line }} />
            <span>04</span>
          </div>
        </div>

        <div className="relative col-span-7 overflow-hidden rounded-[0.5em]">
          <HaldenHouse />
          <div
            className={cn(
              appear,
              "absolute bottom-[1.4em] left-[1.4em] rounded-[0.35em] px-[1.2em] py-[0.9em]",
            )}
            style={{ background: halden.background, ...delay(700) }}
          >
            <p className="text-[0.85em] font-bold">Hillside House</p>
            <p
              className="mt-[0.25em] text-[0.7em]"
              style={{ color: halden.muted }}
            >
              Residential · Concept
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="px-[3.4em] pt-[3em] pb-[3.2em]">
      <div
        className="flex items-end justify-between border-t pt-[2em]"
        style={{ borderColor: halden.line }}
      >
        <p
          className="text-[2.3em] tracking-[-0.01em]"
          style={{ fontFamily: halden.serif }}
        >
          Selected work
        </p>
        <span className="text-[0.8em] font-semibold underline underline-offset-[0.35em]">
          All projects
        </span>
      </div>
      <div className="mt-[1.8em] grid grid-cols-3 gap-[1.6em]">
        <HaldenWork name="Courtyard House" type="Residential">
          <span className="absolute inset-0" style={{ background: "#cdb9a0" }} />
          <span
            className="absolute bottom-0 left-[18%] h-[72%] w-[30%] rounded-t-full"
            style={{ background: "#2a2622" }}
          />
          <span
            className="absolute bottom-0 left-[54%] h-[48%] w-[30%] rounded-t-full"
            style={{ background: "#e9dcc8" }}
          />
        </HaldenWork>
        <HaldenWork name="Gallery Loft" type="Interior">
          <span className="absolute inset-0" style={{ background: "#2b2824" }} />
          <span
            className="absolute inset-x-[14%] top-[18%] bottom-[18%]"
            style={{
              background:
                "repeating-linear-gradient(90deg, #e3bd86 0 22%, #2b2824 22% 26%)",
            }}
          />
          <span
            className="absolute inset-x-[14%] top-[48%] h-[4%]"
            style={{ background: "#2b2824" }}
          />
        </HaldenWork>
        <HaldenWork name="Garden Studio" type="Workspace">
          <span className="absolute inset-0" style={{ background: "#b8c0b1" }} />
          <span
            className="absolute bottom-0 left-[12%] h-[30%] w-[76%]"
            style={{ background: "#7d8a77" }}
          />
          <span
            className="absolute bottom-[30%] left-[30%] h-[26%] w-[58%]"
            style={{ background: "#566251" }}
          />
          <span
            className="absolute bottom-[56%] left-[50%] h-[22%] w-[38%]"
            style={{ background: "#f0ebdf" }}
          />
        </HaldenWork>
      </div>
    </div>

    <div
      className="grid grid-cols-12 items-center gap-[2em] px-[3.4em] py-[2.8em]"
      style={{ background: halden.dark, color: halden.background }}
    >
      <p
        className="col-span-5 text-[2em] leading-[1.15]"
        style={{ fontFamily: halden.serif }}
      >
        Calm places, made to last.
      </p>
      <div className="col-span-7 grid grid-cols-3 gap-[1.6em]">
        {["Listen", "Shape", "Build"].map((step, index) => (
          <div
            key={step}
            className="border-t pt-[0.9em]"
            style={{ borderColor: "rgb(242 238 231 / 0.25)" }}
          >
            <p className="text-[0.7em]" style={{ color: "#c9a27a" }}>
              0{index + 1}
            </p>
            <p className="mt-[0.4em] text-[0.95em] font-bold">{step}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ──────────────────────────── Drift (drinks brand) ──────────────────────────── */

const drift = {
  blue: "#1f3cf0",
  deep: "#1630cf",
  cream: "#fbf6ea",
  ink: "#0b1340",
  lime: "#d8ff45",
  display: "var(--font-space-grotesk), var(--font-manrope), sans-serif",
};

const flavours = [
  { name: "Lime & Mint", color: "#d8ff45", soft: "#eaf7b4" },
  { name: "Peach & Ginger", color: "#ffb38a", soft: "#ffe1d0" },
  { name: "Blackcurrant", color: "#c4a8ff", soft: "#e4d8ff" },
];

function Can({
  color,
  flavour,
  className,
  style,
}: {
  color: string;
  flavour: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={cn("relative", className)} style={style}>
      {/* Lid */}
      <span
        className="absolute inset-x-[7%] top-0 h-[6%] rounded-t-[40%]"
        style={{
          background: "linear-gradient(90deg, #8a90a6, #f1f3f8 45%, #959bb0)",
        }}
      />
      {/* Body, shaded like a cylinder */}
      <span
        className="absolute inset-x-0 top-[3.5%] bottom-0 flex flex-col items-center overflow-hidden rounded-[12%/6%] pt-[34%]"
        style={{
          backgroundColor: color,
          backgroundImage:
            "linear-gradient(90deg, rgb(0 0 0 / 0.26) 0%, transparent 24%, rgb(255 255 255 / 0.4) 42%, transparent 62%, rgb(0 0 0 / 0.3) 100%)",
          color: drift.ink,
        }}
      >
        <span
          className="text-[2.1em] leading-none font-bold tracking-[-0.05em]"
          style={{ fontFamily: drift.display }}
        >
          drift
        </span>
        <span
          className="mt-[0.9em] h-px w-[36%]"
          style={{ background: drift.ink }}
        />
        <span className="mt-[0.9em] text-[0.62em] font-bold tracking-[0.12em] uppercase">
          {flavour}
        </span>
      </span>
    </div>
  );
}

const driftSite = (
  <div style={{ background: drift.cream, color: drift.ink }}>
    <div
      className={cn(firstScreen, "relative overflow-hidden")}
      style={{ background: drift.blue, color: drift.cream }}
    >
      {/* Soft light behind the cans */}
      <span
        className="absolute bottom-[-30%] left-1/2 size-[46em] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgb(255 255 255 / 0.22), transparent)",
        }}
      />

      <div className="relative flex items-center justify-between px-[3.4em] pt-[1.8em]">
        <div className="flex w-[18em] gap-[2em] text-[0.8em] font-medium opacity-85">
          <span>Shop</span>
          <span>Flavours</span>
          <span>Our story</span>
        </div>
        <span
          className="text-[1.8em] leading-none font-bold tracking-[-0.05em]"
          style={{ fontFamily: drift.display }}
        >
          drift
        </span>
        <div className="flex w-[18em] items-center justify-end gap-[1.6em] text-[0.8em] font-medium">
          <span className="opacity-85">Account</span>
          <span
            className="rounded-[2em] border px-[1.1em] py-[0.5em]"
            style={{ borderColor: "rgb(251 246 234 / 0.45)" }}
          >
            Cart · 0
          </span>
        </div>
      </div>

      <p
        className="relative mt-[0.28em] text-center text-[9.4em] leading-[0.9] font-bold tracking-[-0.055em]"
        style={{ fontFamily: drift.display }}
      >
        Refreshingly
        <br />
        simple.
      </p>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center">
        <Can
          color={flavours[1].color}
          flavour={flavours[1].name}
          className={cn(appear, "-mr-[1.6em] mb-[-6.5em] h-[23em] w-[10.6em]")}
          style={{ rotate: "-9deg", ...delay(620) }}
        />
        <Can
          color={flavours[0].color}
          flavour={flavours[0].name}
          className={cn(appear, "z-10 mb-[-4em] h-[27em] w-[12.4em]")}
          style={delay(500)}
        />
        <Can
          color={flavours[2].color}
          flavour={flavours[2].name}
          className={cn(appear, "-ml-[1.6em] mb-[-6.5em] h-[23em] w-[10.6em]")}
          style={{ rotate: "9deg", ...delay(740) }}
        />
      </div>

      <div className="absolute bottom-[2.6em] left-[3.4em] w-[15em]">
        <p className="text-[0.92em] leading-[1.5] opacity-90">
          Sparkling water with real fruit and nothing to hide.
        </p>
        <span
          className="mt-[1.3em] inline-flex rounded-[2em] px-[1.5em] py-[0.85em] text-[0.82em] font-bold"
          style={{ background: drift.lime, color: drift.ink }}
        >
          Shop the range →
        </span>
      </div>

      <div className="absolute right-[3.4em] bottom-[2.6em] text-right">
        <p className="text-[0.68em] font-semibold tracking-[0.18em] uppercase opacity-70">
          Three flavours
        </p>
        {flavours.map((flavour) => (
          <p
            key={flavour.name}
            className="mt-[0.7em] flex items-center justify-end gap-[0.7em] text-[0.82em] font-medium"
          >
            {flavour.name}
            <span
              className="size-[0.8em] rounded-full"
              style={{ background: flavour.color }}
            />
          </p>
        ))}
      </div>
    </div>

    <div className="px-[3.4em] pt-[3em] pb-[3em]">
      <div className="flex items-end justify-between">
        <p
          className="text-[2.6em] leading-none font-bold tracking-[-0.04em]"
          style={{ fontFamily: drift.display }}
        >
          Pick your flavour
        </p>
        <span className="text-[0.82em] font-bold">Shop all →</span>
      </div>
      <div className="mt-[1.8em] grid grid-cols-3 gap-[1.4em]">
        {flavours.map((flavour) => (
          <div
            key={flavour.name}
            className="relative overflow-hidden rounded-[1.3em] px-[1.4em] pt-[1.4em]"
            style={{ background: flavour.soft }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[1em] font-bold">{flavour.name}</p>
                <p className="mt-[0.3em] text-[0.72em] opacity-65">
                  Pack of twelve
                </p>
              </div>
              <span
                className="flex size-[2.2em] items-center justify-center rounded-full text-[1em] font-bold"
                style={{ background: drift.ink, color: drift.cream }}
              >
                +
              </span>
            </div>
            <Can
              color={flavour.color}
              flavour={flavour.name}
              className="mx-auto mt-[2em] mb-[-7em] h-[22em] w-[10.1em] text-[0.56em]"
            />
          </div>
        ))}
      </div>
    </div>

    <div
      className="overflow-hidden py-[1.1em] text-[1.9em] font-bold tracking-[-0.03em] whitespace-nowrap"
      style={{
        background: drift.lime,
        color: drift.ink,
        fontFamily: drift.display,
      }}
    >
      {[...flavours, ...flavours].map((flavour, index) => (
        <span key={index} className="mx-[0.7em]">
          {flavour.name} <span className="ml-[1.2em]">✳</span>
        </span>
      ))}
    </div>
  </div>
);

const sites: Record<DemoSiteId, ReactNode> = {
  "halden-studio": haldenStudio,
  drift: driftSite,
};
