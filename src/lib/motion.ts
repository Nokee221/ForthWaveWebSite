// Mirrors the motion tokens in src/styles/tokens.css for JavaScript animations.
// Durations are in seconds, easings are cubic-bezier control points.

export const duration = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.6,
} as const;

export const ease = {
  standard: [0.2, 0, 0, 1],
  emphasized: [0.16, 1, 0.3, 1],
} as const;
