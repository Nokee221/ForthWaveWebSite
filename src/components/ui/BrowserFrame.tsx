import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * A minimal desktop-browser window. Children fill the 16:10 page area, which
 * is a size container, so content drawn in `cqw` scales with the mockup.
 */
export function BrowserFrame({
  address,
  className,
  children,
}: {
  /** Text for the address bar; leave empty for a blank bar. */
  address?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-surface-elevated shadow-lg md:rounded-xl",
        className,
      )}
    >
      <div className="flex h-8 items-center gap-3 border-b border-border px-3 md:h-10 md:px-4">
        <div aria-hidden="true" className="flex w-10 gap-1.5 md:w-12">
          <span className="size-2 rounded-pill bg-border md:size-2.5" />
          <span className="size-2 rounded-pill bg-border md:size-2.5" />
          <span className="size-2 rounded-pill bg-border md:size-2.5" />
        </div>
        <div className="mx-auto flex h-5 max-w-xs min-w-0 flex-1 items-center justify-center gap-1.5 rounded-md bg-surface px-3 text-[0.6875rem] text-muted md:h-6">
          {address && (
            <svg
              aria-hidden="true"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              className="size-2.5 shrink-0 opacity-70"
            >
              <rect x="2.5" y="5.5" width="7" height="4.5" rx="1" />
              <path d="M4 5.5V4a2 2 0 0 1 4 0v1.5" />
            </svg>
          )}
          <span className="truncate">{address}</span>
        </div>
        <div
          aria-hidden="true"
          className="flex w-10 justify-end gap-2 text-muted/50 md:w-12"
        >
          <svg
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="size-3"
          >
            <path d="M6 2.5v7M2.5 6h7" />
          </svg>
        </div>
      </div>
      <div className="@container relative aspect-[16/10] overflow-hidden bg-surface">
        {children}
      </div>
    </div>
  );
}
