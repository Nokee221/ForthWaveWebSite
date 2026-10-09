import Image from "next/image";
import { TeamProfileTrigger } from "@/components/sections/team/TeamMemberModal";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import type { TeamMember } from "@/data/teamMembers";
import { cn } from "@/lib/cn";
import { publicFileExists } from "@/lib/publicFile";

/**
 * The photograph of a team member, filling its positioned parent. Until the
 * file exists, it shows the person's initials on a neutral surface. The
 * parent must be a size container.
 */
export function TeamPortraitImage({
  member,
  sizes,
}: {
  member: TeamMember;
  sizes: string;
}) {
  if (publicFileExists(member.portrait.src)) {
    return (
      <Image
        src={member.portrait.src}
        alt={member.portrait.alt}
        fill
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: member.portrait.objectPosition }}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center bg-linear-to-b from-surface to-surface-elevated"
    >
      <span className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_38%,var(--glow),transparent)] opacity-70" />
      <span className="relative text-[38cqw] leading-none font-extrabold tracking-tighter text-foreground/15">
        {member.initials}
      </span>
      <span className="absolute top-[6%] left-[7%] text-[0.625rem] font-semibold tracking-[0.18em] text-muted uppercase">
        Portrait coming soon
      </span>
    </span>
  );
}

/**
 * One portrait in the editorial layout: the photo, an always-visible name
 * and role, and a "View profile" cue. The whole thing is one button that
 * opens the member's profile. Place it inside a <Reveal className="group">.
 */
export function TeamMemberPortrait({
  member,
  index,
  aspect,
  sizes,
  delay = 0,
}: {
  member: TeamMember;
  index: number;
  /** Tailwind aspect-ratio classes for the photo frame. */
  aspect: string;
  sizes: string;
  /** Entrance delay in milliseconds. */
  delay?: number;
}) {
  return (
    <TeamProfileTrigger
      index={index}
      aria-label={`View profile of ${member.name}`}
      className="group/portrait block w-full cursor-pointer text-left"
    >
      <span
        className={cn(
          "@container relative block overflow-hidden rounded-lg border border-border bg-surface",
          // Uncovered from the top as it scrolls into view.
          "group-data-[reveal=in]:animate-reveal-down group-data-[reveal=pending]:opacity-0",
          aspect,
        )}
        style={{ animationDelay: `${delay}ms` }}
      >
        <span
          className="absolute inset-0 block group-data-[reveal=in]:animate-reveal-image"
          style={{ animationDelay: `${delay}ms` }}
        >
          <span className="absolute inset-0 block transition-[scale,filter] duration-(--duration-slow) ease-emphasized group-hover/portrait:scale-[1.04] group-hover/portrait:contrast-[1.06]">
            <TeamPortraitImage member={member} sizes={sizes} />
          </span>
        </span>

        {/* Darkens the foot of the photo so the cue stays readable. */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 block h-2/5 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-(--duration-normal) ease-standard group-hover/portrait:opacity-100 group-focus-visible/portrait:opacity-100 [@media(hover:none)]:opacity-100"
        />
        {/* Shown on hover and focus; always shown on touch screens. */}
        <span className="absolute right-4 bottom-4 left-4 flex translate-y-2 items-center justify-between text-xs font-semibold tracking-[0.16em] text-white uppercase opacity-0 transition-[opacity,translate] duration-(--duration-normal) ease-standard group-hover/portrait:translate-y-0 group-hover/portrait:opacity-100 group-focus-visible/portrait:translate-y-0 group-focus-visible/portrait:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
          View profile
          <span className="transition-[translate] duration-(--duration-fast) ease-standard group-hover/portrait:translate-x-1">
            <ArrowIcon />
          </span>
        </span>
        {/* A purple line drawn along the foot of the photo. */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 block h-0.5 origin-left scale-x-0 bg-accent-gradient transition-[scale] duration-(--duration-slow) ease-emphasized group-hover/portrait:scale-x-100 group-focus-visible/portrait:scale-x-100"
        />
      </span>

      <span
        className="mt-4 flex gap-4 group-data-[reveal=in]:animate-enter group-data-[reveal=pending]:opacity-0"
        style={{ animationDelay: `${delay + 260}ms` }}
      >
        <span className="pt-1 text-xs font-semibold tracking-[0.16em] text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span>
          <span className="block text-lg leading-snug font-bold transition-colors duration-(--duration-fast) ease-standard group-hover/portrait:text-accent md:text-xl">
            {member.name}
          </span>
          <span className="mt-1 block text-xs font-semibold tracking-[0.16em] text-muted uppercase">
            {member.role}
          </span>
        </span>
      </span>
    </TeamProfileTrigger>
  );
}
