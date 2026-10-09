import type { CSSProperties } from "react";
import { TeamProfiles } from "@/components/sections/team/TeamMemberModal";
import {
  TeamMemberPortrait,
  TeamPortraitImage,
} from "@/components/sections/team/TeamMemberPortrait";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import { teamIntro, teamMembers } from "@/data/teamMembers";
import { cn } from "@/lib/cn";

const eyebrowStyle =
  "text-xs font-semibold tracking-[0.16em] text-muted uppercase";
const enter =
  "group-data-[reveal=in]:animate-enter group-data-[reveal=pending]:opacity-0";

function delay(ms: number): CSSProperties {
  return { animationDelay: `${ms}ms` };
}

/*
 * A team of equals: every portrait has the same size, shape and treatment.
 * The asymmetry comes only from where each one hangs.
 */
const PORTRAIT_ASPECT = "aspect-[3/4]";
const PORTRAIT_SIZES = "(min-width: 64rem) 18rem, 50vw";

/*
 * On desktop the four portraits hang in one row from a thin rule, each on a
 * line of a different length, so the row rises and falls like a wave. The
 * list repeats if the team grows.
 *
 * `drop` is the space above the portrait and `line` the matching length of
 * its hanging line (40, 120, 72 and 152px).
 */
const hangs = [
  { drop: "lg:pt-10", line: "h-10", delay: 0 },
  { drop: "lg:pt-30", line: "h-30", delay: 110 },
  { drop: "lg:pt-18", line: "h-18", delay: 220 },
  { drop: "lg:pt-38", line: "h-38", delay: 330 },
];

export function TeamSection() {
  return (
    <Section id="team" className="relative isolate overflow-hidden">
      <SectionDivider />
      <SectionWatermark word="People" />

      <Container className="relative">
        <Reveal className="group grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <p className={cn(eyebrowStyle, enter, "flex items-center gap-3")}>
              <span aria-hidden="true" className="h-px w-8 bg-accent-gradient" />
              {teamIntro.eyebrow}
            </p>
            <h2 className="mt-6 text-heading font-bold">
              {teamIntro.headline.map((line, index) => (
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
          </div>

          <div className="lg:col-span-5 lg:pb-2">
            <p
              className={cn(enter, "max-w-[30rem] text-lead text-muted")}
              style={delay(420)}
            >
              {teamIntro.body}
            </p>
            <p
              className={cn(eyebrowStyle, enter, "mt-6 text-foreground")}
              style={delay(520)}
            >
              {teamIntro.detail}
            </p>
          </div>
        </Reveal>

        <TeamProfiles
          members={teamMembers}
          portraits={teamMembers.map((member) => (
            <TeamPortraitImage key={member.id} member={member} sizes="20rem" />
          ))}
        >
          <div className="relative mt-14 md:mt-20">
            {/* One soft light behind the whole row, shared by everyone. */}
            <div
              aria-hidden="true"
              className="absolute inset-x-[8%] -inset-y-[6%] -z-10 bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-50"
            />

            <ul className="grid grid-cols-2 items-start gap-x-4 gap-y-14 sm:gap-x-6 lg:grid-cols-4 lg:border-t lg:border-border">
              {teamMembers.map((member, index) => {
                const hang = hangs[index % hangs.length];
                return (
                  <li
                    key={member.id}
                    className={cn(
                      // Below desktop: two columns, the second set lower.
                      index % 2 === 1 && "max-lg:mt-14",
                      hang.drop,
                    )}
                  >
                    <Reveal className="group relative">
                      {/* The line this portrait hangs from. */}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute bottom-full left-1/2 w-px origin-top bg-border group-data-[reveal=in]:animate-grow-y group-data-[reveal=pending]:opacity-0 max-lg:hidden",
                          hang.line,
                        )}
                        style={delay(hang.delay)}
                      >
                        <span className="absolute top-0 left-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
                      </span>

                      <TeamMemberPortrait
                        member={member}
                        index={index}
                        aspect={PORTRAIT_ASPECT}
                        sizes={PORTRAIT_SIZES}
                        delay={hang.delay}
                      />
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </TeamProfiles>
      </Container>
    </Section>
  );
}
