import type { CSSProperties } from "react";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import { contactDetails, contactIntro } from "@/data/contact";
import { cn } from "@/lib/cn";

const eyebrowStyle =
  "text-xs font-semibold tracking-[0.16em] text-muted uppercase";
const enter =
  "group-data-[reveal=in]:animate-enter group-data-[reveal=pending]:opacity-0";

function delay(ms: number): CSSProperties {
  return { animationDelay: `${ms}ms` };
}

export function ContactSection() {
  return (
    <Section
      id="contact"
      className="relative isolate overflow-hidden bg-background-soft"
    >
      <SectionDivider />
      <SectionWatermark word="Contact" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* The invitation. Stays in view beside the form on desktop. */}
          <Reveal className="group lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <p className={cn(eyebrowStyle, enter, "flex items-center gap-3")}>
              <span aria-hidden="true" className="h-px w-8 bg-accent-gradient" />
              {contactIntro.eyebrow}
            </p>
            <h2 className="mt-6 text-heading font-bold">
              {contactIntro.headline.map((line, index) => (
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
              className={cn(enter, "mt-6 max-w-[28rem] text-lead text-muted")}
              style={delay(360)}
            >
              {contactIntro.body}
            </p>

            {contactDetails.email && (
              <p
                className={cn(enter, "mt-10 border-t border-border pt-6")}
                style={delay(460)}
              >
                <span className={cn(eyebrowStyle, "block")}>Email</span>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="mt-2 inline-block text-lg font-bold break-all underline decoration-border underline-offset-4 transition-colors duration-(--duration-fast) ease-standard hover:text-accent"
                >
                  {contactDetails.email}
                </a>
              </p>
            )}
          </Reveal>

          <Reveal className="group relative lg:col-span-7">
            {/* A restrained purple light behind the form. */}
            <div
              aria-hidden="true"
              className="absolute -inset-[8%] -z-10 bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-50"
            />
            <div className="rounded-xl border border-border bg-surface-elevated p-6 shadow-md group-data-[reveal=in]:animate-enter-scale group-data-[reveal=pending]:opacity-0 md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
