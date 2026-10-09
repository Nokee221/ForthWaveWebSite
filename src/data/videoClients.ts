// Temporary copy — to be replaced when docs/CONTENT.md is written.
export const videoClientsIntro = {
  heading: "Selected work & collaborations",
  body: "A glimpse into the brands and projects behind the work.",
};

export type VideoClient = {
  /** Shown as text until the logo file exists, and used as its alt text. */
  name: string;
  /**
   * URL path of the logo inside /public. A transparent SVG or PNG. If the
   * file does not exist, the name is shown as text instead.
   */
  logo: string;
  /**
   * True for a single-color dark logo: it is inverted to white in the dark
   * theme so it stays readable. Leave off for logos that already work on
   * both backgrounds.
   */
  invertOnDark?: boolean;
  /**
   * True for an example that is only here to preview the layout and is not
   * a confirmed FourthWave client. While any entry has this, the site shows
   * a note that the row contains demo examples. Remove it once the entry is
   * a real collaboration that may be shown.
   */
  demo?: boolean;
};

/*
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ EVERY ENTRY BELOW IS CURRENTLY A DEMO EXAMPLE.                       │
 * │ They preview how the row looks; they are not a claim that these are  │
 * │ FourthWave clients. "Brand Studio", "Northstar", "Urban Motion" and  │
 * │ "Creative Co." are invented names. "Formula 1" and "NK Čelik Zenica" │
 * │ are real organizations: keep them only if the collaboration is real  │
 * │ and you have the right to show their name or logo.                   │
 * └──────────────────────────────────────────────────────────────────────┘
 *
 * To use a real logo: put the file at public + `logo`, and delete the
 * `demo: true` line. Official logos are trademarks — use files supplied or
 * approved by the brand itself.
 */
export const videoClients: VideoClient[] = [
  { name: "Formula 1", logo: "/images/clients/f1.svg", demo: true },
  {
    name: "NK Čelik Zenica",
    logo: "/images/clients/celik-zenica.svg",
    demo: true,
  },
  { name: "Brand Studio", logo: "/images/clients/brand-studio.svg", demo: true },
  { name: "Northstar", logo: "/images/clients/northstar.svg", demo: true },
  { name: "Urban Motion", logo: "/images/clients/urban-motion.svg", demo: true },
  { name: "Creative Co.", logo: "/images/clients/creative-co.svg", demo: true },
];
