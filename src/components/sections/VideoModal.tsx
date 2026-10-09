"use client";

import { type ReactNode, useEffect, useId, useRef, useState } from "react";
import { Modal } from "@/components/ui/Modal";

/**
 * Wraps a video preview and owns its player modal. Anything inside can open
 * it with <ModalTrigger>.
 *
 * The <video> element only exists while the modal is open, so nothing is
 * downloaded before the visitor asks for it, and playback stops on close.
 */
export function VideoModal({
  title,
  description,
  meta,
  videoSrc,
  posterSrc,
  placeholder,
  children,
}: {
  title: string;
  description?: string;
  /** Short details such as client and category. */
  meta?: string[];
  /** The MP4 to play, or null when the file has not been added yet. */
  videoSrc: string | null;
  posterSrc: string | null;
  /** Shown in place of the player while there is no video file. */
  placeholder: ReactNode;
  children: ReactNode;
}) {
  const titleId = useId();
  const [open, setOpen] = useState(false);

  return (
    <Modal
      labelledBy={titleId}
      onOpenChange={setOpen}
      className="lg:w-[min(100%-6rem,76rem)]"
      content={
        <div className="flex min-h-full flex-col justify-center">
          <div className="@container relative aspect-video overflow-hidden bg-black">
            {open &&
              (videoSrc ? (
                <Player src={videoSrc} poster={posterSrc} label={title} />
              ) : (
                placeholder
              ))}
          </div>

          <div className="p-6 md:px-8">
            <h3 id={titleId} className="text-subheading font-bold">
              {title}
            </h3>
            {meta && meta.length > 0 && (
              <p className="mt-2 text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                {meta.join(" · ")}
              </p>
            )}
            <p className="mt-3 max-w-[44rem] text-muted">
              {videoSrc
                ? description
                : "This is a placeholder preview. The final footage will be added here."}
            </p>
          </div>
        </div>
      }
    >
      {children}
    </Modal>
  );
}

function Player({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string | null;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  // The source is attached here rather than in the markup so that it is
  // restored if the effect runs again (as it does in development). On close:
  // stop and drop the source so the browser releases the download.
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.src = src;
    return () => {
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, [src]);

  return (
    // Not autoplayed: it waits, with its controls, for the visitor to press
    // play, so sound never starts on its own.
    <video
      ref={ref}
      aria-label={label}
      poster={poster ?? undefined}
      controls
      playsInline
      preload="metadata"
      className="absolute inset-0 size-full"
    />
  );
}

/**
 * A short silent clip that loops in the preview. It stays paused for
 * visitors who have asked for reduced motion.
 */
export function LoopingPreviewVideo({
  src,
  poster,
}: {
  src: string;
  poster: string | null;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    }
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster ?? undefined}
      muted
      loop
      autoPlay
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
      className="absolute inset-0 size-full object-cover"
    />
  );
}
