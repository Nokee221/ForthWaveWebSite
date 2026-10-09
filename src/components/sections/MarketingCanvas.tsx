import type { CSSProperties } from "react";
import { HeroPointerShift } from "@/components/sections/HeroEffects";
import { cn } from "@/lib/cn";

const enter =
  "group-data-[reveal=in]:animate-enter group-data-[reveal=pending]:opacity-0";

function delay(ms: number): CSSProperties {
  return { animationDelay: `${ms}ms` };
}

/**
 * A decorative "digital canvas where ideas take shape", drawn entirely in
 * CSS. Sizes are relative to the canvas width (`cqw`), so it scales as one
 * piece. Place it inside a <Reveal className="group">.
 */
export function MarketingCanvas({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "@container relative aspect-[5/4] overflow-hidden rounded-xl border border-border bg-background",
        "group-data-[reveal=in]:animate-enter-scale group-data-[reveal=pending]:opacity-0",
        className,
      )}
    >
      {/* Fine dot grid. */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-[size:4cqw_4cqw]" />
      {/* Slow purple light. */}
      <div className="absolute -inset-[15%] animate-ambient bg-[radial-gradient(ellipse_38%_42%_at_68%_32%,var(--glow),transparent)]" />

      {/* The idea itself: big type. */}
      <p
        className={cn(
          enter,
          "absolute top-[7%] left-[6%] text-[23cqw] leading-none font-extrabold tracking-tighter text-accent-gradient",
        )}
        style={delay(150)}
      >
        Idea
      </p>
      <p
        className={cn(
          enter,
          "absolute top-[34%] left-[7%] text-[2.2cqw] font-semibold tracking-[0.2em] text-muted uppercase",
        )}
        style={delay(260)}
      >
        Draft 01 — Work in progress
      </p>

      {/* A line that draws itself across the canvas. */}
      <svg
        viewBox="0 0 500 400"
        fill="none"
        className="absolute inset-0 size-full"
      >
        <path
          d="M-10 330 C 110 330, 150 210, 250 220 S 380 120, 510 70"
          pathLength={1}
          strokeDasharray="1"
          stroke="url(#marketing-canvas-line)"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className="group-data-[reveal=in]:animate-draw"
          style={delay(350)}
        />
        <defs>
          <linearGradient
            id="marketing-canvas-line"
            gradientUnits="userSpaceOnUse"
            x1="0"
            x2="500"
          >
            <stop offset="0" stopColor="#7c3aed" />
            <stop offset="1" stopColor="#c084fc" />
          </linearGradient>
        </defs>
      </svg>

      {/* Back layer: shapes. Moves a little with the pointer. */}
      <HeroPointerShift strength={8} className="absolute inset-0">
        <div className={cn(enter, "absolute top-[40%] right-[9%]")} style={delay(420)}>
          <div className="size-[22cqw] animate-float rounded-full bg-accent-gradient opacity-90" />
        </div>
        <div
          className={cn(enter, "absolute bottom-[9%] left-[8%] max-sm:hidden")}
          style={delay(500)}
        >
          <div className="size-[13cqw] animate-float rounded-full border border-accent/60 [animation-delay:-3s] [animation-duration:9s]" />
        </div>
        <div className={cn(enter, "absolute top-[12%] right-[26%]")} style={delay(560)}>
          <div className="size-[4.5cqw] rotate-12 animate-float rounded-[0.8cqw] bg-foreground [animation-delay:-5s] [animation-duration:8s]" />
        </div>
      </HeroPointerShift>

      {/* Front layer: content previews. Moves more, so it feels closer. */}
      <HeroPointerShift strength={18} className="absolute inset-0">
        {/* A post taking shape. */}
        <div className={cn(enter, "absolute right-[20%] bottom-[10%]")} style={delay(620)}>
          <div className="w-[32cqw] -rotate-3 rounded-[2cqw] border border-border bg-surface-elevated p-[1.6cqw] shadow-lg">
            <div className="aspect-[4/3] rounded-[1.2cqw] bg-[linear-gradient(135deg,#7c3aed,#c084fc_60%,#f5d0c5)]" />
            <div className="mt-[1.6cqw] h-[1.2cqw] w-[70%] rounded-full bg-foreground/80" />
            <div className="mt-[1cqw] h-[1.2cqw] w-[45%] rounded-full bg-border" />
          </div>
        </div>

        {/* A color palette being chosen. */}
        <div
          className={cn(enter, "absolute bottom-[26%] left-[26%] max-sm:hidden")}
          style={delay(720)}
        >
          <div className="flex rotate-2 gap-[0.9cqw] rounded-full border border-border bg-surface-elevated p-[1.1cqw] shadow-md">
            <span className="size-[3.4cqw] rounded-full bg-purple-600" />
            <span className="size-[3.4cqw] rounded-full bg-purple-300" />
            <span className="size-[3.4cqw] rounded-full bg-foreground" />
            <span className="size-[3.4cqw] rounded-full bg-[#f5d0c5]" />
          </div>
        </div>

        {/* A label. */}
        <div className={cn(enter, "absolute top-[47%] left-[9%]")} style={delay(800)}>
          <span className="block rounded-full bg-foreground px-[2.2cqw] py-[1cqw] text-[2.1cqw] font-semibold text-background">
            Headline
          </span>
        </div>
      </HeroPointerShift>

      {/* Registration marks. */}
      <span className="absolute top-[5%] right-[5%] text-[3cqw] leading-none text-muted">
        +
      </span>
      <span className="absolute bottom-[5%] left-[5%] text-[3cqw] leading-none text-muted">
        +
      </span>
    </div>
  );
}
