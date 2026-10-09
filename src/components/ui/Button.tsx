import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
};

type ButtonProps = BaseProps &
  (
    | ({ href: string } & Omit<ComponentProps<"a">, "href">)
    | ({ href?: undefined } & ComponentProps<"button">)
  );

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold whitespace-nowrap select-none " +
  "transition-[translate,scale,box-shadow,background-color,border-color] duration-(--duration-fast) ease-standard " +
  "active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-button-gradient text-accent-foreground shadow-sm inset-shadow-[0_1px_0_rgb(255_255_255/0.24)] hover:-translate-y-0.5 hover:shadow-glow active:translate-y-0 active:shadow-sm",
  secondary:
    "border border-border bg-transparent text-foreground hover:-translate-y-px hover:border-muted/50 hover:bg-surface active:translate-y-0",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

/** Renders a link when `href` is given, otherwise a button. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    return <a className={classes} {...props} />;
  }

  return <button type="button" className={classes} {...props} />;
}
