"use client";

import { setTheme } from "@/lib/theme";

function toggleTheme() {
  const next =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  // Cross-fades the whole page where the browser supports it.
  if (!document.startViewTransition || reduceMotion) {
    setTheme(next);
    return;
  }
  document.startViewTransition(() => setTheme(next));
}

export function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Switch between light and dark theme"
      className="inline-flex size-10 items-center justify-center rounded-pill text-muted transition-colors duration-(--duration-fast) ease-standard hover:bg-surface hover:text-foreground"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="size-5"
      >
        {/* Moon in light mode, sun in dark mode. */}
        <path
          className="dark:hidden"
          d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z"
        />
        <g className="hidden dark:block">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </g>
      </svg>
    </button>
  );
}
