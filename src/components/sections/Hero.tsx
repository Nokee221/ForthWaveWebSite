import type { CSSProperties } from "react";
import { HeroGlow, HeroParallax } from "@/components/sections/HeroEffects";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { hero } from "@/data/hero";
import { cn } from "@/lib/cn";

/*
 * Entrance timeline, in milliseconds. The order is the hierarchy: the
 * photograph leads (it starts at 0), the headline is the main moment, then
 * the supporting text, the buttons, and last the small details. Steps
 * overlap so it reads as one move.
 */
const timeline = {
  eyebrow: 220,
  headline: 320,
  headlineStagger: 120,
  body: 740,
  actions: 860,
  actionsStagger: 90,
  services: 1060,
  scrollCue: 1250,
};

function delay(ms: number): CSSProperties {
  return { animationDelay: `${ms}ms` };
}

const smallLabel =
  "text-xs font-semibold tracking-[0.16em] text-muted uppercase";

export function Hero() {
  const headlineLines = [...hero.headline, hero.headlineAccent];

  return (
    <Section
      id="top"
      className="relative isolate flex min-h-svh flex-col overflow-hidden pt-24 pb-0 sm:pt-28 md:pt-36 md:pb-0 lg:justify-center lg:pt-24 lg:pb-12"
    >
      <Container className="relative z-20">
        <div className="lg:max-w-[40rem]">
          <p className={cn(smallLabel, "flex items-center gap-3")}>
            <span
              aria-hidden="true"
              className="h-px w-8 origin-left animate-grow-x bg-accent-gradient"
              style={delay(timeline.eyebrow)}
            />
            <span className="animate-enter" style={delay(timeline.eyebrow)}>
              {hero.eyebrow}
            </span>
          </p>

          {/* Set in the display face. The opening lines are regular weight
              and the closing line is bold and in the gradient, so the
              contrast carries the emphasis. */}
          <h1 className="mt-6 font-display text-hero">
            {headlineLines.map((line, index) => (
              // The padding keeps descenders and accents (č, š, ž) from being
              // clipped by the reveal.
              <span
                key={line}
                className="-mt-[0.1em] -mb-[0.16em] block overflow-hidden pt-[0.1em] pb-[0.16em]"
              >
                <span
                  className={cn(
                    "block animate-reveal-line",
                    line === hero.headlineAccent
                      ? "font-bold text-accent-gradient"
                      : "font-normal",
                  )}
                  style={delay(
                    timeline.headline + index * timeline.headlineStagger,
                  )}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="mt-6 max-w-[30rem] animate-enter text-lead text-pretty text-muted sm:mt-7"
            style={delay(timeline.body)}
          >
            {hero.body}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <div className="animate-enter" style={delay(timeline.actions)}>
              <Button
                href={hero.primaryAction.href}
                size="lg"
                className="group/arrow w-full"
              >
                {hero.primaryAction.label}
                <ArrowIcon />
              </Button>
            </div>
            <div
              className="animate-enter"
              style={delay(timeline.actions + timeline.actionsStagger)}
            >
              <Button
                href={hero.secondaryAction.href}
                size="lg"
                variant="secondary"
                className="group/arrow w-full"
              >
                {hero.secondaryAction.label}
                <ArrowIcon />
              </Button>
            </div>
          </div>

          {/* What FourthWave does, in one quiet line. */}
          <p
            className={cn(
              smallLabel,
              "mt-7 flex animate-enter flex-wrap items-center gap-x-3 gap-y-1 sm:mt-9",
            )}
            style={delay(timeline.services)}
          >
            {hero.services.map((service, index) => (
              <span key={service} className="flex items-center gap-3">
                {index > 0 && (
                  <span aria-hidden="true" className="text-accent">
                    ·
                  </span>
                )}
                {service}
              </span>
            ))}
          </p>
        </div>
      </Container>

      {/* Below the text on small screens; the right side of the scene on desktop. */}
      <HeroParallax className="relative -z-10 -mt-8 min-h-52 flex-1 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:w-[54%]">
        <HeroVisual />
      </HeroParallax>

      {/* A cue to scroll, on desktop screens tall enough to have room for it. */}
      <div className="absolute inset-x-0 bottom-8 z-20 hidden lg:[@media(min-height:52rem)]:block">
        <Container>
          <a
            href={hero.scrollCue.href}
            className={cn(
              smallLabel,
              "inline-flex animate-enter items-center gap-4 transition-colors duration-(--duration-fast) ease-standard hover:text-foreground",
            )}
            style={delay(timeline.scrollCue)}
          >
            <span
              aria-hidden="true"
              className="relative block h-10 w-px overflow-hidden bg-border"
            >
              <span className="absolute inset-x-0 top-0 block h-2/5 animate-scroll-cue bg-accent" />
            </span>
            {hero.scrollCue.label}
          </a>
        </Container>
      </div>

      <HeroGlow />
    </Section>
  );
}
