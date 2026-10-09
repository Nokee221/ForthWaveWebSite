// Temporary copy — to be replaced when docs/CONTENT.md is written.
export const hero = {
  eyebrow: "Creative Technology Company",
  // One entry per line of the headline.
  headline: ["Web, mobile", "and video."],
  // The final line, shown in the purple gradient.
  headlineAccent: "One team.",
  body: "We design, build and edit under one roof, so your website, your app and your launch video look like they came from the same company.",
  primaryAction: { label: "Let's Talk", href: "#contact" },
  secondaryAction: { label: "Explore Our Work", href: "#web-development" },
  // Shown as one quiet line under the buttons, separated by dots.
  services: ["Web", "Mobile", "Video", "Digital"],
  // The cue at the foot of the Hero; it links to the next section.
  scrollCue: { label: "Scroll to explore", href: "#services" },

  image: {
    // Put the photograph at public/images/hero/hero-portrait.jpg.
    src: "/images/hero/hero-portrait.jpg",
    // Describe the photograph for screen readers.
    alt: "A desk with three monitors, a keyboard and a PC, lit in green and purple.",
    // Which part of the photo stays in view when it is cropped: "x y",
    // where 0% is the left/top edge and 100% is the right/bottom edge.
    focalPoint: "50% 60%",
  },
};
