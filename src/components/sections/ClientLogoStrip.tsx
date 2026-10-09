import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { videoClients, videoClientsIntro } from "@/data/videoClients";
import { cn } from "@/lib/cn";
import { publicFileExists } from "@/lib/publicFile";

const enter =
  "group-data-[reveal=in]:animate-enter group-data-[reveal=pending]:opacity-0";

/**
 * A quiet row of client logos. An entry whose logo file is missing is shown
 * as its name in text, so the row never contains a broken image.
 */
export function ClientLogoStrip() {
  const hasDemo = videoClients.some((client) => client.demo);

  return (
    <Reveal className="group mt-20 md:mt-28">
      <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3">
        <div>
          <h3 className={cn(enter, "text-xl font-bold md:text-2xl")}>
            {videoClientsIntro.heading}
          </h3>
          <p
            className={cn(enter, "mt-2 text-muted")}
            style={{ animationDelay: "70ms" }}
          >
            {videoClientsIntro.body}
          </p>
        </div>
        {hasDemo && (
          <p
            className={cn(
              enter,
              "rounded-pill border border-border px-3 py-1 text-xs font-semibold text-muted",
            )}
            style={{ animationDelay: "140ms" }}
          >
            Demo examples — not confirmed clients
          </p>
        )}
      </div>

      <ul className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 border-t border-border pt-10 sm:grid-cols-3 lg:grid-cols-6">
        {videoClients.map((client, index) => (
          <li
            key={client.name}
            className={cn(enter, "flex h-10 items-center justify-center")}
            style={{ animationDelay: `${180 + index * 70}ms` }}
          >
            {publicFileExists(client.logo) ? (
              <Image
                src={client.logo}
                alt={client.name}
                width={160}
                height={40}
                className={cn(
                  "max-h-10 w-auto object-contain opacity-60 grayscale transition-[opacity,filter] duration-(--duration-normal) ease-standard hover:opacity-100 hover:grayscale-0",
                  client.invertOnDark && "dark:invert",
                )}
              />
            ) : (
              <span className="text-center text-sm font-extrabold tracking-[0.14em] text-muted uppercase transition-colors duration-(--duration-normal) ease-standard hover:text-foreground">
                {client.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
