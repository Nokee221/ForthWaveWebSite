"use client";

import { type ComponentProps, useEffect, useRef } from "react";

/**
 * Marks its element when it scrolls into view, so CSS can animate it in:
 *
 *   data-reveal="pending"  below the viewport, waiting
 *   data-reveal="in"       has entered the viewport (set once)
 *
 * Style it with `data-[reveal=pending]:opacity-0 data-[reveal=in]:animate-…`,
 * and children with `group-data-[reveal=in]:…` when it is also a `group`.
 *
 * Content is visible by default: nothing is hidden without JavaScript, with
 * reduced motion, or when the element is already on screen at load.
 */
export function Reveal(props: ComponentProps<"div">) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (element.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    element.dataset.reveal = "pending";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.dataset.reveal = "in";
        observer.disconnect();
      },
      { threshold: 0.15 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} {...props} />;
}
