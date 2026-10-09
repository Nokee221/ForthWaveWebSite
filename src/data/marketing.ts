// Temporary copy — to be replaced when docs/CONTENT.md is written.

export const marketingIntro = {
  eyebrow: "Digital Marketing",
  // One entry per line; `accent` lines are shown in the purple gradient.
  headline: [
    { text: "Your next", accent: false },
    { text: "big idea", accent: true },
    { text: "starts here.", accent: false },
  ],
  body: "We combine creative thinking, compelling content, and digital strategy to help brands build a stronger online presence.",
};

export type MarketingConceptId =
  | "social-media"
  | "digital-advertising"
  | "brand-identity";

export type MarketingConcept = {
  id: MarketingConceptId;
  /** e.g. "Concept 01". */
  number: string;
  title: string;
  /** One line under the title on the page. */
  summary: string;
  /** Shown in the concept's modal. */
  description: string;
  /** What the concept is meant to demonstrate. Shown in the modal. */
  explores: string[];
};

/*
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ THESE ARE CONCEPT DESIGNS, NOT CLIENT WORK.                          │
 * │ The three visuals are drawn in code (MarketingConcepts.tsx) to show  │
 * │ FourthWave's design direction. Any brand names, handles or headlines │
 * │ in them are made up. The site labels each one "Concept design".      │
 * │ When real campaigns exist, replace these with them.                  │
 * └──────────────────────────────────────────────────────────────────────┘
 */
export const marketingConcepts: MarketingConcept[] = [
  {
    id: "social-media",
    number: "Concept 01",
    title: "Social Media",
    summary: "An editorial-style post built from type and shape.",
    description:
      "A fictional social post that leans on typography and a simple geometric composition instead of stock photography.",
    explores: [
      "A headline that reads at thumbnail size",
      "A warm palette with one strong accent",
      "A layout that can repeat across a series of posts",
    ],
  },
  {
    id: "digital-advertising",
    number: "Concept 02",
    title: "Digital Advertising",
    summary: "An ad creative with one message and one action.",
    description:
      "A fictional display ad with a clear order of reading: headline first, a supporting line, then a single call to action.",
    explores: [
      "One message per creative",
      "High contrast for small placements",
      "A call to action that stands apart from the artwork",
    ],
  },
  {
    id: "brand-identity",
    number: "Concept 03",
    title: "Brand Identity",
    summary: "A brand direction: name, symbol, type and color.",
    description:
      "A fictional brand board showing how a wordmark, a simple symbol, a typeface and a small palette work together.",
    explores: [
      "A symbol that still works at small sizes",
      "One typeface used with clear hierarchy",
      "A palette of one accent, two neutrals and one warm tone",
    ],
  },
];

export const marketingWorkflow = [
  {
    number: "01",
    title: "Strategy",
    description: "Define the direction, audience, and message.",
  },
  {
    number: "02",
    title: "Create",
    description: "Turn ideas into compelling digital content.",
  },
  {
    number: "03",
    title: "Grow",
    description: "Build a consistent and recognizable online presence.",
  },
];

export type MarketingServiceIcon = "social" | "content" | "advertising" | "strategy";

export const marketingServices: {
  icon: MarketingServiceIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: "social",
    title: "Social Media",
    description:
      "Creative content and a consistent brand presence across social platforms.",
  },
  {
    icon: "content",
    title: "Content Creation",
    description: "Visual content designed to communicate ideas clearly.",
  },
  {
    icon: "advertising",
    title: "Paid Advertising",
    description: "Creative ad concepts and campaign support.",
  },
  {
    icon: "strategy",
    title: "Digital Strategy",
    description:
      "A clearer direction for digital communication and brand growth.",
  },
];

export const marketingCta = {
  // The last word is shown in the purple gradient.
  headline: "Let's build something",
  headlineAccent: "great.",
  body: "Have an idea in mind? Let's explore what your brand could become.",
  // Points at the Contact section, which uses the id "contact".
  action: { label: "Let's talk", href: "#contact" },
};
