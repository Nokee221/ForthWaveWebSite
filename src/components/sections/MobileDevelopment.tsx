import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { DemoAppScreen } from "@/components/sections/DemoAppScreens";
import {
  ProjectDetails,
  ProjectDetailsButton,
  ProjectDetailsTrigger,
} from "@/components/sections/ProjectDetails";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import { mobileDevelopmentIntro, mobileProjects } from "@/data/mobileProjects";
import {
  type Project,
  type ProjectImage,
  projectImages,
  projectPlaceholderDescription,
} from "@/data/projects";
import { cn } from "@/lib/cn";
import { publicFileExists } from "@/lib/publicFile";

const eyebrowStyle =
  "text-xs font-semibold tracking-[0.16em] text-muted uppercase";
const enter =
  "group-data-[reveal=in]:animate-enter group-data-[reveal=pending]:opacity-0";
const enterScale =
  "group-data-[reveal=in]:animate-enter-scale group-data-[reveal=pending]:opacity-0";
// Shared by every phone: the lift on hover when its project can be opened.
const phoneHover =
  "transition-[translate,box-shadow] duration-(--duration-normal) ease-standard";

function delay(ms: number): CSSProperties {
  return { animationDelay: `${ms}ms` };
}

export function MobileDevelopment() {
  const [featured, secondary] = mobileProjects;
  const [featuredMain, featuredSecond] = projectImages(featured);
  const [secondaryMain, secondarySecond] = projectImages(secondary);

  return (
    <Section
      id="mobile-development"
      className="relative isolate overflow-hidden bg-background-soft"
    >
      <SectionDivider />
      <SectionWatermark word="Mobile" />

      <Container>
        <Reveal className="group grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <p className={cn(eyebrowStyle, enter, "flex items-center gap-3")}>
              <span aria-hidden="true" className="h-px w-8 bg-accent-gradient" />
              {mobileDevelopmentIntro.eyebrow}
            </p>
            <h2
              className={cn(enter, "mt-6 text-heading font-bold")}
              style={delay(90)}
            >
              <span className="block">{mobileDevelopmentIntro.headline}</span>
              <span className="block text-muted">
                {mobileDevelopmentIntro.headlineQuiet}
              </span>
            </h2>
          </div>
          <p
            className={cn(
              enter,
              "max-w-[28rem] text-lead text-muted lg:col-span-5 lg:pb-2",
            )}
            style={delay(180)}
          >
            {mobileDevelopmentIntro.body}
          </p>
        </Reveal>

        {/* Featured: text on the left, a large phone with a second screen behind it. */}
        <MobileProject project={featured}>
          {({ canOpen, button }) => (
            <Reveal className="group mt-14 grid items-center gap-12 md:mt-20 lg:grid-cols-12 lg:gap-10">
              <div className={cn(enter, "lg:col-span-5")} style={delay(200)}>
                <ProjectText
                  project={featured}
                  label="01 — Featured project"
                  button={button}
                />
              </div>

              <Devices
                project={featured}
                canOpen={canOpen}
                className="lg:col-span-7"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-[8%] inset-y-0 -z-10 bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-60 transition-opacity duration-(--duration-slow) ease-standard group-hover/project:opacity-100"
                />
                <div className={cn(enterScale, "z-10 w-[60%] sm:w-[40%]")}>
                  <PhoneFrame
                    className={cn(
                      phoneHover,
                      "group-hover/project:-translate-y-2",
                    )}
                  >
                    <Screen image={featuredMain} sizes="(min-width: 64rem) 18rem, 60vw" />
                  </PhoneFrame>
                </div>
                {/* Second screen: smaller, behind and lower. Hidden on phones. */}
                <div
                  className={cn(
                    enter,
                    "mt-[14%] -ml-[7%] w-[32%] max-sm:hidden",
                  )}
                  style={delay(220)}
                >
                  <PhoneFrame
                    className={cn(
                      phoneHover,
                      "group-hover/project:translate-x-2",
                    )}
                  >
                    <Screen image={featuredSecond} sizes="14rem" />
                  </PhoneFrame>
                </div>
              </Devices>
            </Reveal>
          )}
        </MobileProject>

        {/* Secondary: mirrored, with two equal phones stepped side by side. */}
        <MobileProject project={secondary}>
          {({ canOpen, button }) => (
            <Reveal className="group mt-20 grid items-center gap-12 border-t border-border pt-16 md:mt-30 md:pt-24 lg:grid-cols-12 lg:gap-10">
              <Devices
                project={secondary}
                canOpen={canOpen}
                className="gap-[5%] lg:col-span-6"
              >
                <div className={cn(enterScale, "mt-[12%] w-[52%] sm:w-[36%]")}>
                  <PhoneFrame
                    className={cn(
                      phoneHover,
                      "group-hover/project:-translate-y-2",
                    )}
                  >
                    <Screen image={secondaryMain} sizes="(min-width: 64rem) 14rem, 52vw" />
                  </PhoneFrame>
                </div>
                <div
                  className={cn(enterScale, "mb-[12%] w-[36%] max-sm:hidden")}
                  style={delay(140)}
                >
                  <PhoneFrame
                    className={cn(
                      phoneHover,
                      "group-hover/project:-translate-y-2",
                    )}
                  >
                    <Screen image={secondarySecond} sizes="14rem" />
                  </PhoneFrame>
                </div>
              </Devices>

              <div
                className={cn(enter, "lg:col-span-5 lg:col-start-8")}
                style={delay(240)}
              >
                <ProjectText
                  project={secondary}
                  label="02 — Selected project"
                  button={button}
                />
              </div>
            </Reveal>
          )}
        </MobileProject>
      </Container>
    </Section>
  );
}

/** The screens a project can actually show: a real screenshot or a demo screen. */
function availableImages(project: Project) {
  return projectImages(project).filter(
    (image) => publicFileExists(image.src) || image.demoScreen,
  );
}

/**
 * Wraps a project in its details dialog when there is something to show, and
 * hands `children` what it needs to lay the project out.
 */
function MobileProject({
  project,
  children,
}: {
  project: Project;
  children: (state: { canOpen: boolean; button: ReactNode }) => ReactNode;
}) {
  const images = availableImages(project);
  // Needs a title and at least one screen to open.
  const canOpen = Boolean(project.title) && images.length > 0;

  const button = canOpen ? (
    <ProjectDetailsButton>View project</ProjectDetailsButton>
  ) : (
    <Button variant="secondary" disabled>
      Details coming soon
    </Button>
  );
  const content = children({ canOpen, button });

  return canOpen ? (
    <ProjectDetails
      project={project}
      orientation="portrait"
      slides={images.map((image) => (
        <Screen key={image.src} image={image} sizes="15rem" />
      ))}
    >
      {content}
    </ProjectDetails>
  ) : (
    content
  );
}

/** The row of phones. Opens the project's details when it can be opened. */
function Devices({
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
  const row = cn(
    "relative isolate flex w-full items-center justify-center",
    className,
  );

  return canOpen ? (
    <ProjectDetailsTrigger
      aria-label={`View details of ${project.title}`}
      className={cn(row, "group/project cursor-pointer rounded-xl")}
    >
      {children}
    </ProjectDetailsTrigger>
  ) : (
    <div className={row}>{children}</div>
  );
}

function ProjectText({
  project,
  label,
  button,
}: {
  project: Project;
  label: string;
  button: ReactNode;
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
      <p className="mt-3 max-w-[30rem] text-lead text-muted">
        {project.description ?? projectPlaceholderDescription}
      </p>
      <div className="mt-8">{button}</div>
    </>
  );
}

/**
 * One phone screen: the real screenshot if its file exists, otherwise the
 * demo screen, otherwise a neutral placeholder.
 */
function Screen({ image, sizes }: { image: ProjectImage; sizes: string }) {
  if (publicFileExists(image.src)) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: image.position }}
      />
    );
  }

  if (image.demoScreen) return <DemoAppScreen id={image.demoScreen} />;

  return (
    <div className="absolute inset-0 flex items-center bg-surface p-[8%]">
      <p className="w-full rounded-sm border border-border bg-background px-2 py-2 text-center text-[0.625rem] leading-snug text-muted">
        <span className="block font-semibold text-foreground">
          Application preview coming soon
        </span>
        <span className="mt-1 block break-all">
          {image.src.split("/").pop()}
        </span>
      </p>
    </div>
  );
}
