import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/** Centers content at the maximum content width with responsive side gutters. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-content px-6 md:px-10", className)}
      {...props}
    />
  );
}
