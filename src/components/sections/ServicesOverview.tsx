import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import {
  type Service,
  type ServiceId,
  services,
  servicesIntro,
} from "@/data/services";
import { cn } from "@/lib/cn";
import { publicFileExists } from "@/lib/publicFile";

/*
 * How each panel sits in the grid and enters the screen. The grid has two
 * rows on desktop — wide + narrow, then narrow + wide — so no two neighbours
 * share a shape, and each panel wipes in from a different edge.
 */
const presentation: Record<
  ServiceId,
  { layout: string; wide: boolean; wipe: string; delay: number }
> = {
  "web-development": {
    layout: "lg:col-span-7 lg:h-[30rem]",
    wide: true,
    wipe: "data-[reveal=in]:animate-wipe-from-left",
    delay: 0,
  },
  "mobile-development": {
    layout: "lg:col-span-5 lg:h-[30rem]",
    wide: false,
    wipe: "data-[reveal=in]:animate-wipe-from-bottom",
    delay: 120,
  },
  "video-editing": {
    layout: "lg:col-span-5 lg:h-[26rem]",
    wide: false,
    wipe: "data-[reveal=in]:animate-wipe-from-bottom",
    delay: 0,
  },
  "digital-marketing": {
    layout: "lg:col-span-7 lg:h-[26rem]",
    wide: true,
    wipe: "data-[reveal=in]:animate-wipe-from-right",
    delay: 120,
  },
};

export function ServicesOverview() {
  return (
    <Section id="services" className="relative isolate overflow-hidden">
      <SectionDivider />
      <SectionWatermark word="Services" />

      <Container>
        <Reveal className="group">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-muted uppercase group-data-[reveal=in]:animate-enter group-data-[reveal=pending]:opacity-0">
            <span aria-hidden="true" className="h-px w-8 bg-accent-gradient" />
            {servicesIntro.eyebrow}
          </p>
          <h2
            className="mt-6 text-heading font-bold group-data-[reveal=in]:animate-enter group-data-[reveal=pending]:opacity-0"
            style={{ animationDelay: "90ms" }}
          >
            {servicesIntro.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="block text-muted">
              {servicesIntro.headlineQuiet}
            </span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-5 lg:grid-cols-12">
          {services.map((service, index) => (
            <ServicePanel key={service.id} service={service} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ServicePanel({ service, index }: { service: Service; index: number }) {
  const { layout, wide, wipe, delay } = presentation[service.id];
  const hasImage = publicFileExists(service.image.src);

  return (
    // Panels are always dark, in both themes, so photos and text read the same.
    <Reveal
      data-theme="dark"
      style={{ animationDelay: `${delay}ms` }}
      className={cn(
        "group relative isolate h-[22rem] overflow-hidden rounded-xl bg-surface text-foreground md:h-[24rem]",
        "data-[reveal=pending]:opacity-0",
        wipe,
        layout,
      )}
    >
      {/* Settles from a slight zoom as the panel wipes in. */}
      <div
        className="absolute inset-0 -z-10 group-data-[reveal=in]:animate-reveal-image"
        style={{ animationDelay: `${delay}ms` }}
      >
        {hasImage ? (
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            sizes="(min-width: 64rem) 58vw, (min-width: 48rem) 50vw, 100vw"
            className="object-cover transition-[scale] duration-(--duration-slow) ease-emphasized group-hover:scale-105"
            style={{ objectPosition: service.image.focalPoint }}
          />
        ) : (
          <ServicePlaceholder service={service} />
        )}
      </div>

      {/* Keeps the text readable over any photo. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-background/95 via-background/60 via-45% to-transparent"
      />
      {/* Purple light that comes up on hover. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_15%_100%,var(--glow),transparent)] opacity-0 transition-opacity duration-(--duration-slow) ease-standard group-hover:opacity-100"
      />

      <div className="flex h-full flex-col justify-between p-6 md:p-8">
        <p className="text-sm font-semibold tracking-[0.16em] text-foreground/60">
          {String(index + 1).padStart(2, "0")}
        </p>

        <div
          className={cn(
            "flex flex-col gap-6",
            wide && "lg:flex-row lg:items-end lg:justify-between",
          )}
        >
          <div
            className="group-data-[reveal=in]:animate-enter"
            style={{ animationDelay: `${delay + 260}ms` }}
          >
            <h3 className="text-subheading font-bold">{service.title}</h3>
            <p className="mt-2 max-w-[26rem] text-foreground/75">
              {service.description}
            </p>
          </div>

          <div
            className="shrink-0 group-data-[reveal=in]:animate-enter"
            style={{ animationDelay: `${delay + 340}ms` }}
          >
            <Button
              href={service.href}
              variant="secondary"
              className="group/arrow backdrop-blur-sm"
            >
              {service.cta}
              <ArrowIcon />
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* Shown until the service's photograph is added. */
function ServicePlaceholder({ service }: { service: Service }) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-linear-to-br from-surface-elevated to-background transition-[scale] duration-(--duration-slow) ease-emphasized group-hover:scale-105"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_70%_30%,var(--glow),transparent)] opacity-60" />
      <svg
        viewBox="0 0 320 220"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute top-[12%] right-[8%] h-[52%] max-w-[70%] text-foreground/30"
      >
        {motifs[service.id]}
      </svg>
      <p className="absolute top-6 right-6 max-w-[62%] text-right text-[0.6875rem] leading-snug text-foreground/40 md:top-8 md:right-8">
        Placeholder — add public{service.image.src}
      </p>
    </div>
  );
}

/* One line drawing per service, so the placeholders are told apart at a glance. */
const motifs: Record<ServiceId, ReactNode> = {
  // A browser window with a page layout.
  "web-development": (
    <>
      <rect x="10" y="20" width="300" height="190" rx="10" />
      <path d="M10 48h300" />
      <circle cx="28" cy="34" r="3" />
      <circle cx="40" cy="34" r="3" />
      <circle cx="52" cy="34" r="3" />
      <rect x="30" y="68" width="120" height="14" rx="3" />
      <path d="M30 98h100M30 112h80" />
      <rect x="180" y="68" width="110" height="90" rx="6" />
      <rect x="30" y="140" width="56" height="18" rx="9" />
      <path d="M30 184h260" />
    </>
  ),
  // Two phones, one in front of the other.
  "mobile-development": (
    <>
      <rect x="170" y="24" width="96" height="186" rx="16" />
      <path d="M206 36h24" />
      <rect x="182" y="56" width="72" height="44" rx="6" />
      <path d="M182 116h72M182 130h48" />
      <rect x="64" y="8" width="104" height="200" rx="18" />
      <path d="M102 21h28" />
      <rect x="78" y="44" width="76" height="60" rx="8" />
      <path d="M78 122h76M78 138h52" />
      <rect x="78" y="164" width="76" height="22" rx="11" />
    </>
  ),
  // A preview frame above an editing timeline with a playhead.
  "video-editing": (
    <>
      <rect x="70" y="10" width="180" height="100" rx="8" />
      <path d="M150 46v28l24-14Z" />
      <path d="M10 136h300" />
      <rect x="10" y="148" width="90" height="18" rx="4" />
      <rect x="106" y="148" width="130" height="18" rx="4" />
      <rect x="242" y="148" width="68" height="18" rx="4" />
      <rect x="40" y="174" width="150" height="18" rx="4" />
      <rect x="196" y="174" width="84" height="18" rx="4" />
      <path d="M168 126v78" />
      <path d="M162 126h12" />
    </>
  ),
  // A rising line over bars.
  "digital-marketing": (
    <>
      <path d="M20 10v190h290" />
      <rect x="48" y="150" width="28" height="50" rx="3" />
      <rect x="100" y="126" width="28" height="74" rx="3" />
      <rect x="152" y="138" width="28" height="62" rx="3" />
      <rect x="204" y="98" width="28" height="102" rx="3" />
      <rect x="256" y="70" width="28" height="130" rx="3" />
      <path d="M40 120l62-30 52 16 52-48 80-30" />
      <circle cx="286" cy="28" r="4" />
    </>
  ),
};
