/** Nudges right when the surrounding link or button (a `group/arrow`) is hovered. */
export function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-4 transition-[translate] duration-(--duration-fast) ease-standard group-hover/arrow:translate-x-1"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}
