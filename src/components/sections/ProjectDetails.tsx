"use client";

import { type ReactNode, useId, useState } from "react";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Button } from "@/components/ui/Button";
import { Modal, ModalTrigger, useOpenModal } from "@/components/ui/Modal";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { type Project, projectAddress } from "@/data/projects";
import { cn } from "@/lib/cn";

const detailLabelStyle =
  "text-xs font-semibold tracking-[0.16em] text-muted uppercase";

/**
 * Wraps a project's showcase and owns its details modal. Anything inside can
 * open it with <ProjectDetailsTrigger> or <ProjectDetailsButton>.
 */
export function ProjectDetails({
  project,
  slides,
  orientation = "landscape",
  children,
}: {
  project: Project;
  /**
   * The project's images, already rendered (a screenshot or a demo screen).
   * Each must fill its positioned parent.
   */
  slides: ReactNode[];
  /** "landscape" for website screenshots, "portrait" for phone screens. */
  orientation?: "landscape" | "portrait";
  children: ReactNode;
}) {
  const titleId = useId();
  const [selected, setSelected] = useState(0);
  const isPortrait = orientation === "portrait";

  const picker = slides.length > 1 && (
    <div
      role="group"
      aria-label="Project images"
      className="mt-6 flex flex-wrap justify-center gap-3"
    >
      {slides.map((slide, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Show image ${index + 1} of ${slides.length}`}
          aria-pressed={index === selected}
          onClick={() => setSelected(index)}
          className={cn(
            "@container relative overflow-hidden rounded-sm border-2 bg-surface transition-[opacity,border-color] duration-(--duration-fast) ease-standard",
            isPortrait ? "aspect-[9/19.5] w-12" : "aspect-[16/10] w-20",
            index === selected
              ? "border-accent"
              : "border-border opacity-60 hover:opacity-100",
          )}
        >
          {slide}
        </button>
      ))}
    </div>
  );

  // Re-keyed on change so the new image fades in.
  const currentSlide = (
    <div
      key={selected}
      className="absolute inset-0 animate-emerge [animation-duration:var(--duration-normal)]"
    >
      {slides[selected]}
    </div>
  );

  const media = isPortrait ? (
    <div className="flex flex-col items-center bg-surface px-6 pt-16 pb-8 md:py-12">
      <PhoneFrame className="w-full max-w-[15rem]">{currentSlide}</PhoneFrame>
      {picker}
    </div>
  ) : (
    // Top padding keeps the browser window clear of the close button.
    <div className="bg-surface px-4 pt-18 pb-6 sm:px-8 md:px-12 md:pb-8">
      <BrowserFrame address={projectAddress(project)}>
        {currentSlide}
      </BrowserFrame>
      {picker}
    </div>
  );

  const text = (
    <div className={cn("p-6 md:p-10", isPortrait && "md:self-center")}>
      {(project.demo || project.category) && (
        <p
          className={cn(
            detailLabelStyle,
            "mb-4 flex flex-wrap items-center gap-3",
          )}
        >
          {project.demo && (
            <span className="rounded-pill border border-border px-3 py-1 tracking-normal normal-case">
              Demo project
            </span>
          )}
          {project.category}
        </p>
      )}
      <h3 id={titleId} className="text-subheading font-bold">
        {project.title}
      </h3>
      {project.description && (
        <p className="mt-4 max-w-[44rem] text-lead text-muted">
          {project.description}
        </p>
      )}

      {(project.role || project.technologies?.length) && (
        <dl
          className={cn(
            "mt-8 grid gap-6 border-t border-border pt-8",
            !isPortrait && "sm:grid-cols-2",
          )}
        >
          {project.role && (
            <div>
              <dt className={detailLabelStyle}>Role</dt>
              <dd className="mt-2">{project.role}</dd>
            </div>
          )}
          {project.technologies?.length ? (
            <div>
              <dt className={detailLabelStyle}>Technologies</dt>
              <dd className="mt-2">{project.technologies.join(", ")}</dd>
            </div>
          ) : null}
        </dl>
      )}

      {project.projectUrl && (
        <div className="mt-8">
          <Button
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/arrow"
          >
            {isPortrait ? "View app" : "Visit website"}
            <ArrowIcon />
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <Modal
      labelledBy={titleId}
      className={cn(isPortrait && "md:w-[min(100%-3rem,54rem)]")}
      content={
        isPortrait ? (
          <div className="md:grid md:grid-cols-[22rem_1fr]">
            {media}
            {text}
          </div>
        ) : (
          <>
            {media}
            {text}
          </>
        )
      }
    >
      {children}
    </Modal>
  );
}

/** A plain button that opens the surrounding project's details. */
export const ProjectDetailsTrigger = ModalTrigger;

/** The same, styled as the site's secondary button with an arrow. */
export function ProjectDetailsButton({ children }: { children: ReactNode }) {
  const open = useOpenModal();
  return (
    <Button variant="secondary" onClick={open} className="group/arrow">
      {children}
      <ArrowIcon />
    </Button>
  );
}
