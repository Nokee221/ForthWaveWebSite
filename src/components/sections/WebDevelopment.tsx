import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { DemoWebsite } from "@/components/sections/DemoWebsites";
import {
  ProjectDetails,
  ProjectDetailsButton,
  ProjectDetailsTrigger,
} from "@/components/sections/ProjectDetails";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import {
  type Project,
  projectAddress,
  projectPlaceholderDescription,
} from "@/data/projects";
import { webDevelopmentIntro, webProjects } from "@/data/webProjects";
import { cn } from "@/lib/cn";
import { publicFileExists } from "@/lib/publicFile";

const eyebrowStyle =
  "text-xs font-semibold tracking-[0.16em] text-muted uppercase";
const enter =
  "group-data-[reveal=in]:animate-enter group-data-[reveal=pending]:opacity-0";
const enterScale =
  "group-data-[reveal=in]:animate-enter-scale group-data-[reveal=pending]:opacity-0";
// Shared by both mockups: the lift on hover when the project can be opened.
const frameHover =
  "transition-[translate,border-color] duration-(--duration-normal) ease-standard group-hover/project:border-accent/40";

function delay(ms: number): CSSProperties {
  return { animationDelay: `${ms}ms` };
}

export function WebDevelopment() {
  const [featured, secondary] = webProjects;

  return (
    <Section
      id="web-development"
      className="relative isolate overflow-hidden"
    >
      <SectionDivider />
      <SectionWatermark word="Web" />

      <Container>
        <Reveal className="group grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <p className={cn(eyebrowStyle, enter, "flex items-center gap-3")}>
              <span aria-hidden="true" className="h-px w-8 bg-accent-gradient" />
              {webDevelopmentIntro.eyebrow}
            </p>
            <h2
              className={cn(enter, "mt-6 text-heading font-bold text-balance")}
              style={delay(90)}
            >
              {webDevelopmentIntro.headline}
            </h2>
          </div>
          <p
            className={cn(
              enter,
              "max-w-[30rem] text-lead text-muted lg:col-span-5 lg:pb-2",
            )}
            style={delay(180)}
          >
            {webDevelopmentIntro.body}
          </p>
        </Reveal>

        {/* Featured: a full-width browser window, its text in a row beneath. */}
        <WebProject project={featured}>
          {({ canOpen, button }) => (
            <Reveal className="group mt-12 md:mt-16">
              <div className={cn(enterScale, "relative")}>
                <ProjectLink
                  project={featured}
                  canOpen={canOpen}
                  className="rounded-lg md:rounded-xl"
                >
                  {/* Restrained purple light behind the window. */}
                  <span
                    aria-hidden="true"
                    className="absolute -inset-x-[6%] -inset-y-[10%] -z-10 bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-50 transition-opacity duration-(--duration-slow) ease-standard group-hover/project:opacity-90"
                  />
                  <BrowserFrame
                    address={projectAddress(featured)}
                    className={cn(
                      frameHover,
                      canOpen && "group-hover/project:-translate-y-1.5",
                    )}
                  >
                    <Page
                      project={featured}
                      sizes="(min-width: 80rem) 75rem, 100vw"
                    />
                  </BrowserFrame>
                </ProjectLink>
              </div>

              <div className="mt-8 grid gap-5 md:mt-10 lg:grid-cols-12 lg:gap-10">
                <div className={cn(enter, "lg:col-span-6")} style={delay(240)}>
                  <ProjectHeading
                    project={featured}
                    label="01 — Featured project"
                  />
                </div>
                <div
                  className={cn(enter, "lg:col-span-5 lg:col-start-8")}
                  style={delay(320)}
                >
                  <ProjectSummary project={featured} button={button} />
                </div>
              </div>
            </Reveal>
          )}
        </WebProject>

        {/* Secondary: text on the left; the window rises out of a tinted panel
            that crops its lower edge. */}
        <WebProject project={secondary}>
          {({ canOpen, button }) => (
            <Reveal className="group mt-20 grid items-center gap-8 border-t border-border pt-16 md:mt-30 md:gap-10 md:pt-24 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className={enter} style={delay(200)}>
                  <ProjectHeading
                    project={secondary}
                    label="02 — Selected project"
                  />
                </div>
                <div className={cn(enter, "mt-5")} style={delay(280)}>
                  <ProjectSummary project={secondary} button={button} />
                </div>
              </div>

              <div className="max-lg:order-first lg:col-span-8">
                <ProjectLink
                  project={secondary}
                  canOpen={canOpen}
                  className={cn(
                    "overflow-hidden rounded-xl border border-border bg-background-soft px-5 pt-5 transition-[border-color] duration-(--duration-normal) ease-standard sm:px-10 sm:pt-10 lg:px-14 lg:pt-12",
                    "group-data-[reveal=in]:animate-wipe-from-bottom group-data-[reveal=pending]:opacity-0",
                    canOpen && "hover:border-accent/40",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_85%_0%,var(--glow),transparent)] opacity-40 transition-opacity duration-(--duration-slow) ease-standard group-hover/project:opacity-80"
                  />
                  <span
                    className={cn(enterScale, "relative -mb-2 block")}
                    style={delay(220)}
                  >
                    <BrowserFrame
                      address={projectAddress(secondary)}
                      className={cn(
                        frameHover,
                        "rounded-b-none border-b-0 md:rounded-b-none",
                        canOpen && "group-hover/project:-translate-y-2",
                      )}
                    >
                      <Page
                        project={secondary}
                        sizes="(min-width: 64rem) 46rem, 100vw"
                      />
                    </BrowserFrame>
                  </span>
                </ProjectLink>
              </div>
            </Reveal>
          )}
        </WebProject>
      </Container>
    </Section>
  );
}

/** True when the project has something to put in its browser window. */
function hasPreview(project: Project) {
  return publicFileExists(project.image) || Boolean(project.imageDemoSite);
}

/**
 * Wraps a project in its details dialog when there is something to show, and
 * hands `children` what it needs to lay the project out.
 */
function WebProject({
  project,
  children,
}: {
  project: Project;
  children: (state: { canOpen: boolean; button: ReactNode }) => ReactNode;
}) {
  // Needs a title and a preview to open.
  const canOpen = Boolean(project.title) && hasPreview(project);

  const button = canOpen ? (
    <ProjectDetailsButton>View project</ProjectDetailsButton>
  ) : (
    <Button variant="secondary" disabled>
      Details coming soon
    </Button>
  );
  const content = children({ canOpen, button });
  if (!canOpen) return content;

  // A real screenshot is one image. A demo website is a long page, so it is
  // shown twice: the first screen and further down.
  const slides = publicFileExists(project.image)
    ? [<Page key="screenshot" project={project} sizes="(min-width: 64rem) 58rem, 100vw" still />]
    : [
        <Page key="top" project={project} sizes="" still />,
        <Page key="lower" project={project} sizes="" still view="lower" />,
      ];

  return (
    <ProjectDetails project={project} slides={slides}>
      {content}
    </ProjectDetails>
  );
}

/**
 * The clickable area around a mockup. Opens the project's details when it can
 * be opened, and shows a "View project" tag on hover and keyboard focus.
 */
function ProjectLink({
  project,
  canOpen,
  className,
  children,
}: {
  project: Project;
  canOpen: boolean;
  className?: string;
  children: ReactNode;
}) {
  const box = cn("relative isolate block w-full text-left", className);
  if (!canOpen) return <div className={box}>{children}</div>;

  return (
    <ProjectDetailsTrigger
      aria-label={`View details of ${project.title}`}
      className={cn(box, "group/project group/arrow cursor-pointer")}
    >
      {children}
      <span
        aria-hidden="true"
        className="absolute right-4 bottom-4 z-10 inline-flex translate-y-2 items-center gap-2 rounded-pill border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground opacity-0 shadow-md transition-[opacity,translate] duration-(--duration-normal) ease-standard group-hover/project:translate-y-0 group-hover/project:opacity-100 group-focus-visible/project:translate-y-0 group-focus-visible/project:opacity-100 md:right-6 md:bottom-6"
      >
        View project
        <ArrowIcon />
      </span>
    </ProjectDetailsTrigger>
  );
}

function ProjectHeading({
  project,
  label,
}: {
  project: Project;
  label: string;
}) {
  return (
    <>
      <p className={cn(eyebrowStyle, "flex flex-wrap items-center gap-3")}>
        {label}
        {project.demo && (
          <span className="rounded-pill border border-border px-2.5 py-0.5 tracking-normal normal-case">
            Demo
          </span>
        )}
      </p>
      <h3 className="mt-4 text-subheading font-bold">
        {project.title ?? project.placeholderTitle}
      </h3>
      {project.category && (
        <p className="mt-2 text-sm text-muted">{project.category}</p>
      )}
    </>
  );
}

function ProjectSummary({
  project,
  button,
}: {
  project: Project;
  button: ReactNode;
}) {
  return (
    <>
      <p className="max-w-[30rem] text-lead text-muted">
        {project.description ?? projectPlaceholderDescription}
      </p>
      <div className="mt-7">{button}</div>
    </>
  );
}

/**
 * What a browser window shows: the real screenshot if its file exists,
 * otherwise the demo website, otherwise a neutral note.
 */
function Page({
  project,
  sizes,
  still = false,
  view,
}: {
  project: Project;
  sizes: string;
  /** No entrance or hover motion; used inside the details dialog. */
  still?: boolean;
  view?: "top" | "lower";
}) {
  if (publicFileExists(project.image)) {
    return (
      <div
        className={cn(
          "absolute inset-0",
          // Draws in from the top, like a page loading.
          !still &&
            "group-data-[reveal=in]:animate-reveal-down [animation-delay:150ms]",
        )}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes={sizes}
          className={cn(
            "object-cover",
            !still &&
              "transition-[scale] duration-(--duration-slow) ease-emphasized group-hover/project:scale-[1.02]",
          )}
          style={{ objectPosition: project.imagePosition }}
        />
      </div>
    );
  }

  if (project.imageDemoSite) {
    return (
      <div
        className={cn(
          "absolute inset-0",
          !still &&
            "group-data-[reveal=in]:animate-reveal-down [animation-delay:150ms]",
        )}
      >
        <div
          className={cn(
            "absolute inset-0",
            // On hover the page scrolls a little, to show there is more below.
            !still &&
              "transition-[translate] duration-[1400ms] ease-emphasized motion-safe:group-hover/project:-translate-y-[18cqw]",
          )}
        >
          <DemoWebsite id={project.imageDemoSite} view={view} />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-surface p-4">
      <p className="rounded-md border border-border bg-background px-4 py-3 text-center text-xs text-muted">
        <span className="block font-semibold text-foreground">
          Website preview coming soon
        </span>
        <span className="mt-1 block break-all">
          {project.image.split("/").pop()}
        </span>
      </p>
    </div>
  );
}
