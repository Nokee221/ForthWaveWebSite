import type { CSSProperties } from "react";
import Image from "next/image";
import { ClientLogoStrip } from "@/components/sections/ClientLogoStrip";
import {
  LoopingPreviewVideo,
  VideoModal,
} from "@/components/sections/VideoModal";
import { Container } from "@/components/ui/Container";
import { ModalTrigger } from "@/components/ui/Modal";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import {
  type VideoProject,
  featuredVideo,
  moreVideos,
  videoEditingIntro,
} from "@/data/videoProjects";
import { cn } from "@/lib/cn";
import { publicFileExists } from "@/lib/publicFile";

const eyebrowStyle =
  "text-xs font-semibold tracking-[0.16em] text-muted uppercase";
const enter =
  "group-data-[reveal=in]:animate-enter group-data-[reveal=pending]:opacity-0";

function delay(ms: number): CSSProperties {
  return { animationDelay: `${ms}ms` };
}

export function VideoEditing() {
  return (
    <Section
      id="video-editing"
      className="relative isolate overflow-hidden"
    >
      <SectionDivider />
      <SectionWatermark word="Video" />

      <Container>
        <Reveal className="group grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <p className={cn(eyebrowStyle, enter, "flex items-center gap-3")}>
              <span aria-hidden="true" className="h-px w-8 bg-accent-gradient" />
              {videoEditingIntro.eyebrow}
            </p>
            <h2
              className={cn(enter, "mt-6 text-heading font-bold text-balance")}
              style={delay(90)}
            >
              {videoEditingIntro.headline}
            </h2>
          </div>
          <p
            className={cn(
              enter,
              "max-w-[30rem] text-lead text-muted lg:col-span-5 lg:pb-2",
            )}
            style={delay(180)}
          >
            {videoEditingIntro.body}
          </p>
        </Reveal>

        <Reveal className="group relative mt-12 md:mt-16">
          {/* Soft purple light behind the screen. */}
          <div
            aria-hidden="true"
            className="absolute -inset-x-[6%] -inset-y-[14%] -z-10 bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-60"
          />
          <VideoPreview video={featuredVideo} size="featured" />
        </Reveal>

        {moreVideos.length > 0 && (
          <Reveal className="group mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {moreVideos.map((video) => (
              <VideoPreview key={video.id} video={video} size="small" />
            ))}
          </Reveal>
        )}

        <ClientLogoStrip />
      </Container>
    </Section>
  );
}

/** A 16:9 looping preview that opens the full video in the player modal. */
function VideoPreview({
  video,
  size,
}: {
  video: VideoProject;
  size: "featured" | "small";
}) {
  const exists = (path?: string) => Boolean(path) && publicFileExists(path!);
  const hasVideo = exists(video.video);
  const hasPoster = exists(video.poster);
  const hasGif = exists(video.previewGif);
  const hasLoop = exists(video.previewVideo);
  const isPlaceholder = !hasGif && !hasLoop && !hasPoster;

  const title = video.title ?? video.placeholderTitle;
  const meta = [video.client, video.category].filter(
    (value): value is string => Boolean(value),
  );
  const isFeatured = size === "featured";
  const posterSrc = hasPoster ? video.poster : null;
  const sizes = isFeatured
    ? "(min-width: 80rem) 75rem, 100vw"
    : "(min-width: 64rem) 24rem, 100vw";

  // GIF, then looping clip, then poster, then the animated placeholder.
  const media = hasGif ? (
    <Image
      src={video.previewGif!}
      alt={video.posterAlt}
      fill
      unoptimized
      sizes={sizes}
      className="object-cover"
    />
  ) : hasLoop ? (
    <LoopingPreviewVideo src={video.previewVideo!} poster={posterSrc} />
  ) : hasPoster ? (
    <Image
      src={video.poster}
      alt={video.posterAlt}
      fill
      sizes={sizes}
      className="object-cover"
    />
  ) : (
    <VideoPlaceholder animated />
  );

  return (
    // The screen and its modal are dark in both themes, so the focus stays on
    // the video.
    <div data-theme="dark" className="text-foreground">
      <VideoModal
        title={title}
        description={video.description}
        meta={meta}
        videoSrc={hasVideo ? video.video : null}
        posterSrc={posterSrc}
        placeholder={<VideoPlaceholder />}
      >
        <ModalTrigger
          aria-label={`${hasVideo ? "Play video" : "Open preview"}: ${title}`}
          className={cn(
            "group/video @container relative block aspect-video w-full cursor-pointer overflow-hidden rounded-xl border border-border bg-black text-left transition-[border-color] duration-(--duration-normal) ease-standard hover:border-accent/60",
            // Opens like curtains as it scrolls into view.
            "group-data-[reveal=in]:animate-wipe-open group-data-[reveal=pending]:opacity-0",
          )}
        >
          <span className="absolute inset-0 block group-data-[reveal=in]:animate-reveal-image">
            <span className="absolute inset-0 block transition-[scale,translate] duration-(--duration-slow) ease-emphasized group-hover/video:-translate-y-0.5 group-hover/video:scale-[1.03]">
              {media}
            </span>
          </span>

          {/* Keeps the title readable over any footage. */}
          <span
            aria-hidden="true"
            className="absolute inset-0 block bg-linear-to-t from-black/75 via-transparent to-transparent"
          />

          <span
            className={cn(
              "absolute top-1/2 left-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-pill border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-[scale,background-color,border-color,box-shadow] duration-(--duration-normal) ease-standard group-hover/video:scale-110 group-hover/video:border-transparent group-hover/video:bg-accent group-hover/video:shadow-glow",
              isFeatured ? "size-16 md:size-20" : "size-12",
            )}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className={isFeatured ? "size-6 md:size-7" : "size-5"}
            >
              <path d="M8 5.5v13l11-6.5-11-6.5Z" />
            </svg>
          </span>

          <span
            className={cn(
              "absolute bottom-0 left-0 block",
              isFeatured ? "p-5 md:p-8" : "p-4",
            )}
          >
            {/* The small label and detail line are dropped on narrow previews so
                nothing crowds the play button. */}
            <span className="hidden text-[0.6875rem] font-semibold tracking-[0.2em] text-white/60 uppercase @lg:block">
              {isPlaceholder ? "Placeholder preview" : "Featured work"}
            </span>
            <span
              className={cn(
                "mt-1 block font-bold text-white",
                isFeatured ? "text-lg md:text-subheading" : "text-base",
              )}
            >
              {title}
            </span>
            <span className="mt-1 hidden text-xs text-white/70 @lg:block md:text-sm">
              {hasVideo
                ? meta.join(" · ") || "Watch the full video"
                : "Footage coming soon"}
            </span>
          </span>
        </ModalTrigger>
      </VideoModal>
    </div>
  );
}

/*
 * The placeholder shown until real footage exists: slow-moving light on a
 * dark frame with corner marks, and (when `animated`) an editing timeline
 * with a playhead running across it on a loop. Drawn in code, no file needed.
 * The parent must be a size container.
 */
function VideoPlaceholder({ animated = false }: { animated?: boolean }) {
  const mark = "absolute size-[3cqw] border-white/40";
  const clip = "block h-full rounded-[0.4cqw]";

  return (
    <span aria-hidden="true" className="absolute inset-0 block bg-[#07070a]">
      {/* Two soft lights in one layer, drifting slowly together. */}
      <span className="absolute -inset-[10%] block animate-ambient bg-[radial-gradient(ellipse_42%_62%_at_26%_28%,rgb(124_58_237/0.55),transparent),radial-gradient(ellipse_40%_60%_at_80%_88%,rgb(192_132_252/0.32),transparent)] [animation-duration:16s]" />
      {/* A thin lens flare across the frame. */}
      <span className="absolute inset-x-[6%] top-[42%] block h-px animate-ambient bg-linear-to-r from-transparent via-white/45 to-transparent [animation-duration:19s]" />
      <span className="absolute inset-0 block bg-[radial-gradient(ellipse_at_center,transparent_45%,rgb(0_0_0/0.65))]" />

      <span className={cn(mark, "top-[5%] left-[3.5%] border-t border-l")} />
      <span className={cn(mark, "top-[5%] right-[3.5%] border-t border-r")} />

      <span className="absolute top-[6%] left-1/2 block -translate-x-1/2 text-[clamp(0.5rem,1.15cqw,0.8125rem)] font-semibold tracking-[0.2em] whitespace-nowrap text-white/55 uppercase">
        Video showreel · placeholder
      </span>

      {animated && (
        // An editing timeline: three tracks of clips and a moving playhead.
        <span className="absolute right-[4%] bottom-[9%] hidden w-[46%] @lg:block">
          <span className="flex h-[2.2cqw] gap-[0.5cqw]">
            <span className={cn(clip, "w-[22%] bg-white/15")} />
            <span className={cn(clip, "w-[38%] bg-purple-400/50")} />
            <span className={cn(clip, "w-[18%] bg-white/15")} />
            <span className={cn(clip, "flex-1 bg-white/10")} />
          </span>
          <span className="mt-[0.6cqw] flex h-[2.2cqw] gap-[0.5cqw]">
            <span className={cn(clip, "w-[34%] bg-white/10")} />
            <span className={cn(clip, "w-[26%] bg-purple-300/40")} />
            <span className={cn(clip, "flex-1 bg-white/15")} />
          </span>
          <span className="mt-[0.6cqw] flex h-[1.2cqw] gap-[0.5cqw]">
            <span className={cn(clip, "w-[58%] bg-white/10")} />
            <span className={cn(clip, "flex-1 bg-purple-400/30")} />
          </span>
          <span className="absolute -inset-y-[0.8cqw] left-0 block w-full animate-scan">
            <span className="block h-full w-px bg-white/80 shadow-[0_0_1.2cqw_rgb(192_132_252/0.9)]" />
          </span>
        </span>
      )}
    </span>
  );
}
