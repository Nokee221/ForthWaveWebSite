import type { TimelineEntry } from "@/data/teamMembers";

/** A vertical timeline, used for experience and education in a profile. */
export function ExperienceTimeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative grid gap-7 border-l border-border pl-6">
      {entries.map((entry) => (
        <li key={`${entry.period}-${entry.title}`} className="relative">
          <span
            aria-hidden="true"
            className="absolute top-2 -left-[calc(1.5rem+4.5px)] size-2 rounded-full bg-accent"
          />
          {entry.period && (
            <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
              {entry.period}
            </p>
          )}
          <p className="mt-1 font-bold">{entry.title}</p>
          {entry.organization && (
            <p className="text-muted">{entry.organization}</p>
          )}
          {entry.description && (
            <p className="mt-2 text-muted">{entry.description}</p>
          )}
        </li>
      ))}
    </ol>
  );
}
