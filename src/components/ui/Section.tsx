import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/** A page section with the standard vertical rhythm. Pass `id` for in-page navigation. */
export function Section({ className, ...props }: ComponentProps<"section">) {
  return (
    <section className={cn("py-20 md:py-30 lg:py-40", className)} {...props} />
  );
}
