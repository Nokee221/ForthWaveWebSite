"use client";

import {
  type ComponentProps,
  type ReactNode,
  createContext,
  use,
  useId,
  useState,
} from "react";
import { ExperienceTimeline } from "@/components/sections/team/ExperienceTimeline";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Modal, useOpenModal } from "@/components/ui/Modal";
import { PROFILE_PLACEHOLDER, type TeamMember } from "@/data/teamMembers";

const OpenProfileContext = createContext<(index: number) => void>(() => {});

const labelStyle =
  "text-xs font-semibold tracking-[0.16em] text-muted uppercase";

/**
 * Wraps the team layout and owns the one profile modal shared by all
 * members. Anything inside can open a profile with <TeamProfileTrigger>.
 *
 * Built on the site's Modal, so it traps focus, closes on Escape or a
 * backdrop click, locks page scrolling and returns focus to the portrait
 * that opened it.
 */
export function TeamProfiles({
  members,
  portraits,
  children,
}: {
  members: TeamMember[];
  /** One rendered portrait per member, in the same order. */
  portraits: ReactNode[];
  children: ReactNode;
}) {
  const titleId = useId();
  const [selected, setSelected] = useState(0);
  const member = members[selected];

  // Previous / next wrap around the team.
  function step(by: number) {
    setSelected((index) => (index + by + members.length) % members.length);
  }
  const previous = members[(selected - 1 + members.length) % members.length];
  const next = members[(selected + 1) % members.length];

  const hasDetails =
    Boolean(member.biography?.length) ||
    member.experience.length > 0 ||
    member.education.length > 0 ||
    member.skills.length > 0 ||
    member.projects.length > 0 ||
    member.certifications.length > 0;

  return (
    <Modal
      labelledBy={titleId}
      className="lg:w-[min(100%-4rem,70rem)]"
      // Left and right arrow keys move between profiles.
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") step(-1);
        if (event.key === "ArrowRight") step(1);
      }}
      content={
        <div className="lg:grid lg:min-h-[36rem] lg:grid-cols-[23rem_1fr]">
          {/* Identity: portrait, name, role. Stays in view on desktop while
              the CV beside it scrolls. */}
          <div className="bg-surface">
            <div className="flex flex-col p-6 pt-16 md:p-8 lg:sticky lg:top-0 lg:pt-8">
              <div
                key={member.id}
                className="@container relative mx-auto aspect-[4/5] w-full max-w-[20rem] animate-emerge overflow-hidden rounded-lg border border-border [animation-duration:var(--duration-normal)]"
              >
                {portraits[selected]}
              </div>

              <p className={`${labelStyle} mt-6`}>
                <span className="text-accent">
                  {String(selected + 1).padStart(2, "0")}
                </span>{" "}
                / {String(members.length).padStart(2, "0")}
              </p>
              <h3 id={titleId} className="mt-2 text-subheading font-bold">
                {member.name}
              </h3>
              <p className={`${labelStyle} mt-2`}>{member.role}</p>
              {member.availability && (
                <p className="mt-4 inline-flex w-fit items-center gap-2 rounded-pill border border-border px-3 py-1 text-xs font-semibold">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-accent"
                  />
                  {member.availability}
                </p>
              )}

              {member.socialLinks.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                  {member.socialLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold underline decoration-border underline-offset-4 transition-colors duration-(--duration-fast) ease-standard hover:text-accent"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex gap-3 pt-8">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label={`Previous profile: ${previous.name}`}
                  className="group/prev inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-pill border border-border text-sm font-semibold transition-colors duration-(--duration-fast) ease-standard hover:bg-background"
                >
                  <span
                    aria-hidden="true"
                    className="rotate-180 transition-[translate] duration-(--duration-fast) ease-standard group-hover/prev:-translate-x-1"
                  >
                    <ArrowIcon />
                  </span>
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label={`Next profile: ${next.name}`}
                  className="group/arrow inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-pill border border-border text-sm font-semibold transition-colors duration-(--duration-fast) ease-standard hover:bg-background"
                >
                  Next
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>

          {/* The CV. Only sections with content are shown. */}
          <div
            key={member.id}
            className="animate-emerge p-6 [animation-duration:var(--duration-normal)] md:p-10 lg:pt-16"
          >
            <p className={labelStyle}>Profile</p>
            <p className="mt-4 max-w-[40rem] text-lead">
              {member.shortIntro ?? PROFILE_PLACEHOLDER}
            </p>

            {!hasDetails && (
              // A quiet sketch of the profile to come, so the layout is
              // visible before the content exists.
              <div
                aria-hidden="true"
                className="mt-10 grid gap-8 border-t border-border pt-10"
              >
                {["Experience", "Education", "Skills"].map((section) => (
                  <div key={section}>
                    <p className={labelStyle}>{section}</p>
                    <div className="mt-4 grid gap-2.5">
                      <span className="h-2.5 w-2/3 rounded-pill bg-surface" />
                      <span className="h-2.5 w-1/2 rounded-pill bg-surface" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {member.biography && member.biography.length > 0 && (
              <ProfileSection title="About">
                <div className="grid max-w-[40rem] gap-4 text-muted">
                  {member.biography.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </ProfileSection>
            )}

            {member.experience.length > 0 && (
              <ProfileSection title="Experience">
                <ExperienceTimeline entries={member.experience} />
              </ProfileSection>
            )}

            {member.education.length > 0 && (
              <ProfileSection title="Education">
                <ExperienceTimeline entries={member.education} />
              </ProfileSection>
            )}

            {member.skills.length > 0 && (
              <ProfileSection title="Skills & expertise">
                <ul className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-pill border border-border px-3.5 py-1.5 text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </ProfileSection>
            )}

            {member.projects.length > 0 && (
              <ProfileSection title="Selected projects">
                <ul className="grid gap-5">
                  {member.projects.map((project) => (
                    <li key={project.title}>
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold underline decoration-border underline-offset-4 transition-colors duration-(--duration-fast) ease-standard hover:text-accent"
                        >
                          {project.title}
                        </a>
                      ) : (
                        <p className="font-bold">{project.title}</p>
                      )}
                      {project.description && (
                        <p className="mt-1 text-muted">{project.description}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </ProfileSection>
            )}

            {member.certifications.length > 0 && (
              <ProfileSection title="Certifications">
                <ul className="grid gap-2 text-muted">
                  {member.certifications.map((certification) => (
                    <li key={certification}>{certification}</li>
                  ))}
                </ul>
              </ProfileSection>
            )}
          </div>
        </div>
      }
    >
      <OpenProfileProvider onSelect={setSelected}>
        {children}
      </OpenProfileProvider>
    </Modal>
  );
}

function ProfileSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-10 border-t border-border pt-10">
      <h4 className={labelStyle}>{title}</h4>
      <div className="mt-5">{children}</div>
    </section>
  );
}

/** Must sit inside <Modal> so it can open it. */
function OpenProfileProvider({
  onSelect,
  children,
}: {
  onSelect: (index: number) => void;
  children: ReactNode;
}) {
  const openModal = useOpenModal();

  function openProfile(index: number) {
    onSelect(index);
    openModal();
  }

  return (
    <OpenProfileContext value={openProfile}>{children}</OpenProfileContext>
  );
}

/** A button that opens the profile of the member at `index`. */
export function TeamProfileTrigger({
  index,
  ...props
}: { index: number } & ComponentProps<"button">) {
  const openProfile = use(OpenProfileContext);
  return <button type="button" onClick={() => openProfile(index)} {...props} />;
}
