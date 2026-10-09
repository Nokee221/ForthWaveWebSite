import Image from "next/image";
import { HeroPointerShift } from "@/components/sections/HeroEffects";
import { hero } from "@/data/hero";
import { publicFileExists } from "@/lib/publicFile";

/**
 * The Hero photograph, dissolved into the page background with a mask.
 * Shows a neutral placeholder until the image file exists.
 */
export function HeroVisual() {
  const hasImage = publicFileExists(hero.image.src);

  return (
    <>
      {/*
       * Ambient light behind the photograph; it shows through the faded edge.
       * It fades in, drifts slowly, and shifts more than the photo for depth.
       */}
      <HeroPointerShift
        strength={20}
        className="absolute inset-0 lg:-left-[30%]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-emerge [animation-delay:400ms]"
        >
          <div className="absolute inset-0 animate-ambient bg-[radial-gradient(closest-side_at_50%_30%,var(--glow),transparent_85%)] lg:bg-[radial-gradient(closest-side_at_42%_50%,var(--glow),transparent_85%)]" />
        </div>
      </HeroPointerShift>

      {/* The mask box is 2px larger than its contents so no edge pixel can leak. */}
      <div className="absolute -inset-0.5 animate-reveal-mask mask-fade-up lg:mask-fade-left">
        <div className="absolute inset-0.5 overflow-hidden">
          {/* Oversized so the pointer shift never exposes an edge. */}
          <HeroPointerShift strength={8} className="absolute -inset-4">
            <div className="absolute inset-0 animate-reveal-image">
              {hasImage ? (
                <Image
                  src={hero.image.src}
                  alt={hero.image.alt}
                  fill
                  preload
                  sizes="(min-width: 64rem) 54vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: hero.image.focalPoint }}
                />
              ) : (
                <HeroImagePlaceholder />
              )}
            </div>
          </HeroPointerShift>
        </div>
      </div>
    </>
  );
}

function HeroImagePlaceholder() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-linear-to-br from-border to-surface"
    >
      <svg
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-0 size-full text-muted opacity-25"
        fill="currentColor"
      >
        <circle cx="200" cy="190" r="78" />
        <path d="M40 500c0-110 70-180 160-180s160 70 160 180Z" />
      </svg>
      <p className="absolute right-6 bottom-6 text-xs text-muted">
        Placeholder — add public{hero.image.src}
      </p>
    </div>
  );
}
