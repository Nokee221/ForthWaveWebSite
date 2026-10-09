import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * A generic smartphone. Children fill the 9:19.5 screen. The body is dark in
 * both themes, like a real device; set the width with `className`.
 */
export function PhoneFrame({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    // Corner radii are percentages so the phone keeps its shape at any size.
    <div className={cn("rounded-[14%/6.5%] shadow-lg", className)}>
      <div
        data-theme="dark"
        className="rounded-[14%/6.5%] border border-border bg-surface-elevated p-[3.5%]"
      >
        <div className="@container relative aspect-[9/19.5] overflow-hidden rounded-[11%/5.1%] bg-background text-foreground">
          {children}
          {/* Front camera. */}
          <div
            aria-hidden="true"
            className="absolute top-[1.8%] left-1/2 h-[2.6%] w-[26%] -translate-x-1/2 rounded-pill bg-black"
          />
        </div>
      </div>
    </div>
  );
}
