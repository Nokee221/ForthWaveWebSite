import type { CSSProperties, ReactNode } from "react";
import { MarketingCanvas } from "@/components/sections/MarketingCanvas";
import { MarketingConcepts } from "@/components/sections/MarketingConcepts";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import {
  type MarketingServiceIcon,
  marketingCta,
  marketingIntro,
  marketingServices,
  marketingWorkflow,
} from "@/data/marketing";
import { cn } from "@/lib/cn";

const eyebrowStyle =
  "text-xs font-semibold tracking-[0.16em] text-muted uppercase";
const enter =
  "group-data-[reveal=in]:animate-enter group-data-[reveal=pending]:opacity-0";

function delay(ms: number): CSSProperties {
  return { animationDelay: `${ms}ms` };
}

export function DigitalMarketing() {
  return (
    <Section
      id="digital-marketing"
      className="relative isolate overflow-hidden bg-background-soft"
    >
      <SectionDivider />
      <SectionWatermark word="Marketing" />

      <Container>
        {/* Introduction beside the animated canvas. */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="group lg:col-span-5">
            <p className={cn(eyebrowStyle, enter, "flex items-center gap-3")}>
              <span aria-hidden="true" className="h-px w-8 bg-accent-gradient" />
              {marketingIntro.eyebrow}
            </p>
            <h2 className="mt-6 text-heading font-bold">
              {marketingIntro.headline.map((line, index) => (
                // The padding keeps descenders from being clipped by the reveal.
                <span
                  key={line.text}
                  className="-mb-[0.14em] block overflow-hidden pb-[0.14em]"
                >
                  <span
                    className={cn(
                      "block group-data-[reveal=in]:animate-reveal-line group-data-[reveal=pending]:opacity-0",
                      line.accent && "text-accent-gradient",
                    )}
                    style={delay(100 + index * 110)}
                  >
                    {line.text}
                  </span>
                </span>
              ))}
            </h2>
            <p
              className={cn(enter, "mt-6 max-w-[30rem] text-lead text-muted")}
              style={delay(420)}
            >
              {marketingIntro.body}
            </p>
          </Reveal>

          <Reveal className="group relative lg:col-span-7">
            {/* A restrained purple light behind the canvas. */}
            <div
              aria-hidden="true"
              className="absolute -inset-[10%] -z-10 bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-50"
            />
            <MarketingCanvas />
          </Reveal>
        </div>

        <MarketingConcepts />

        <Workflow />

        <Services />

        <ClosingCta />
      </Container>
    </Section>
  );
}

/* Strategy → Create → Grow, joined by a line that draws itself. */
function Workflow() {
  return (
    <Reveal className="group mt-24 md:mt-36">
      <p className={cn(eyebrowStyle, enter)}>How we work</p>

      <ol className="relative mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
        {/* Horizontal on desktop, vertical on phones. */}
        <li
          aria-hidden="true"
          className="absolute top-[5px] right-0 left-0 h-px bg-border max-md:hidden"
        >
          <span className="block h-full origin-left bg-accent-gradient group-data-[reveal=in]:animate-grow-x [animation-duration:1400ms]" />
        </li>
        <li
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-[5px] w-px bg-border md:hidden"
        >
          <span className="block h-full origin-top bg-accent-gradient group-data-[reveal=in]:animate-grow-y" />
        </li>

        {marketingWorkflow.map((stage, index) => (
          <li
            key={stage.number}
            className={cn(enter, "relative max-md:pl-10 md:pt-10")}
            style={delay(200 + index * 220)}
          >
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 size-[11px] rounded-full bg-accent ring-4 ring-background-soft max-md:top-1.5"
            />
            <h3 className="text-subheading font-bold">
              <span className="text-muted">{stage.number} — </span>
              {stage.title}
            </h3>
            <p className="mt-3 max-w-[22rem] text-muted">{stage.description}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

function Services() {
  return (
    <Reveal className="group mt-24 grid gap-10 md:mt-36 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <p className={cn(eyebrowStyle, enter)}>What we do</p>
        <h3
          className={cn(enter, "mt-4 text-subheading font-bold text-balance")}
          style={delay(80)}
        >
          Four ways we help a brand show up online.
        </h3>
      </div>

      <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
        {marketingServices.map((service, index) => (
          <li
            key={service.title}
            className={cn(
              enter,
              "group/service flex gap-5 border-t border-border py-7",
            )}
            style={delay(140 + index * 90)}
          >
            <span
              aria-hidden="true"
              className="flex size-11 shrink-0 items-center justify-center rounded-md border border-border text-accent transition-[translate,background-color,border-color,color] duration-(--duration-normal) ease-standard group-hover/service:-translate-y-0.5 group-hover/service:border-transparent group-hover/service:bg-accent group-hover/service:text-accent-foreground"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                {serviceIcons[service.icon]}
              </svg>
            </span>
            <span>
              <span className="block text-lg font-bold">{service.title}</span>
              <span className="mt-1.5 block text-muted">
                {service.description}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

const serviceIcons: Record<MarketingServiceIcon, ReactNode> = {
  // A speech bubble with a heart.
  social: (
    <>
      <path d="M20 12a7.5 7.5 0 0 1-11 6.6L4 20l1.4-4.6A7.5 7.5 0 1 1 20 12Z" />
      <path d="M12.5 15s-3-1.7-3-3.6a1.6 1.6 0 0 1 3-.8 1.6 1.6 0 0 1 3 .8c0 1.9-3 3.6-3 3.6Z" />
    </>
  ),
  // A picture frame with a mountain and sun.
  content: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
      <circle cx="9" cy="9.5" r="1.6" />
      <path d="M4 17l5-4.5 3.5 3 3-2.5 4.5 4" />
    </>
  ),
  // A megaphone.
  advertising: (
    <>
      <path d="M4 10v4a1 1 0 0 0 1 1h2l6 4V5L7 9H5a1 1 0 0 0-1 1Z" />
      <path d="M16.5 9a4 4 0 0 1 0 6M19 6.5a7.5 7.5 0 0 1 0 11" />
    </>
  ),
  // A compass.
  strategy: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2Z" />
    </>
  ),
};

function ClosingCta() {
  return (
    <Reveal className="group relative mt-24 border-t border-border pt-20 text-center md:mt-36 md:pt-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-[15%] top-[10%] -bottom-[10%] -z-10 bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-50 group-data-[reveal=in]:animate-emerge group-data-[reveal=pending]:opacity-0"
      />
      <h3 className={cn(enter, "text-heading font-bold text-balance")}>
        {marketingCta.headline}{" "}
        <span className="text-accent-gradient">
          {marketingCta.headlineAccent}
        </span>
      </h3>
      <p
        className={cn(enter, "mx-auto mt-6 max-w-[32rem] text-lead text-muted")}
        style={delay(120)}
      >
        {marketingCta.body}
      </p>
      <div className={cn(enter, "mt-10")} style={delay(220)}>
        <Button href={marketingCta.action.href} size="lg" className="group/arrow">
          {marketingCta.action.label}
          <ArrowIcon />
        </Button>
      </div>
    </Reveal>
  );
}
