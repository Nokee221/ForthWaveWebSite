import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Container } from "@/components/ui/Container";
import { CurrentYear } from "@/components/ui/CurrentYear";
import { Reveal } from "@/components/ui/Reveal";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { footerDescription, footerNavigation } from "@/data/footer";
import { type SocialLink, socialLinks } from "@/data/socialLinks";
import { cn } from "@/lib/cn";

const headingStyle =
  "text-xs font-semibold tracking-[0.16em] text-muted uppercase";
const enter =
  "group-data-[reveal=in]:animate-enter group-data-[reveal=pending]:opacity-0";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      <Container>
        <Reveal className="group grid gap-x-10 gap-y-14 pt-20 pb-16 md:grid-cols-2 md:pt-28 lg:grid-cols-12">
          {/* Brand. */}
          <div className={cn(enter, "md:col-span-2 lg:col-span-4")}>
            <a href="#top" className="text-2xl font-extrabold tracking-tight">
              FourthWave
            </a>
            <p className="mt-4 max-w-[24rem] text-muted">{footerDescription}</p>
          </div>

          {/* Navigation. */}
          <nav
            aria-label="Footer"
            className={cn(
              enter,
              "grid grid-cols-2 gap-x-10 gap-y-10 lg:col-span-4",
            )}
            style={{ animationDelay: "90ms" }}
          >
            {footerNavigation.map((group) => (
              <div key={group.title}>
                <h2 className={headingStyle}>{group.title}</h2>
                <ul className="mt-5 grid gap-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="group/link relative inline-block py-0.5 transition-colors duration-(--duration-fast) ease-standard hover:text-accent"
                      >
                        {link.label}
                        {/* A thin line drawn under the link on hover. */}
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent-gradient transition-[scale] duration-(--duration-normal) ease-emphasized group-hover/link:scale-x-100"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Social profiles. */}
          <div
            className={cn(enter, "lg:col-span-4")}
            style={{ animationDelay: "180ms" }}
          >
            <h2 className={headingStyle}>Follow us</h2>
            <ul className="mt-5 border-t border-border">
              {socialLinks.map((link) => (
                <li key={link.platform} className="border-b border-border">
                  <SocialRow link={link} />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>

      {/* The closing wordmark. */}
      <p
        aria-hidden="true"
        className="pointer-events-none text-center text-[14.6vw] leading-[0.8] font-extrabold tracking-tighter whitespace-nowrap text-accent-gradient opacity-90 select-none"
      >
        FOURTHWAVE
      </p>

      <Container>
        <p className="border-t border-border py-6 text-sm text-muted">
          © <CurrentYear /> FourthWave. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

const rowStyle = "flex h-16 items-center gap-4";
const iconStyle = "size-6 shrink-0";

/** A link to the profile, or a "Coming soon" row until its URL is set. */
function SocialRow({ link }: { link: SocialLink }) {
  if (!link.url) {
    return (
      <span className={cn(rowStyle, "text-muted")}>
        <SocialIcon platform={link.platform} className={iconStyle} />
        <span className="text-lg font-bold">{link.name}</span>
        <span className="ml-auto rounded-pill border border-border px-2.5 py-0.5 text-xs font-semibold">
          Coming soon
        </span>
      </span>
    );
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`FourthWave on ${link.name} (opens in a new tab)`}
      className={cn(
        rowStyle,
        "group/arrow transition-[color,padding] duration-(--duration-normal) ease-standard hover:pl-2 hover:text-accent",
      )}
    >
      <SocialIcon
        platform={link.platform}
        className={cn(
          iconStyle,
          "transition-[translate] duration-(--duration-normal) ease-standard group-hover/arrow:-translate-y-0.5",
        )}
      />
      <span className="text-lg font-bold">{link.name}</span>
      <span className="ml-auto">
        <ArrowIcon />
      </span>
    </a>
  );
}
