import type { Project } from "@/data/projects";

// Temporary copy — to be replaced when docs/CONTENT.md is written.
export const webDevelopmentIntro = {
  eyebrow: "What We Build",
  headline: "Websites built to make an impression.",
  body: "We create modern digital experiences that combine thoughtful design, performance, and usability.",
};

/*
 * The two Web Development projects. The first is the featured one.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ BOTH PROJECTS BELOW ARE FICTIONAL DEMOS.                             │
 * │ "Halden Studio" and "Drift" are not real FourthWave work or clients. │
 * │ Their names, categories, descriptions, roles, technologies and       │
 * │ website designs exist only to preview the layout, and the site       │
 * │ labels them "Demo".                                                  │
 * └──────────────────────────────────────────────────────────────────────┘
 *
 * To replace a demo with a real project:
 *   1. Put its screenshot at public + `image` (the paths below). A real
 *      file replaces the demo website automatically. A wide screenshot of
 *      the top of the page fits best; `imagePosition` chooses which part
 *      stays in view when it is cropped to 16:10.
 *   2. Replace `title`, `category`, `description`, `role` and
 *      `technologies` with the real information (delete any you don't
 *      have), and write `imageAlt`.
 *   3. Replace `address` with `projectUrl: "https://…"` if the site is
 *      live; the mockup then shows the real address and the details view
 *      links to it.
 *   4. Delete the `demo: true` and `imageDemoSite` lines.
 */
export const webProjects: Project[] = [
  {
    id: "web-project-01",
    demo: true,
    image: "/images/portfolio/web-development/project-01.jpg",
    imageAlt: "Home page of the Halden Studio demo website.",
    imagePosition: "50% 0%",
    imageDemoSite: "halden-studio",
    placeholderTitle: "Featured Web Project",
    title: "Halden Studio",
    category: "Studio website — demo concept",
    description:
      "A calm, editorial website concept for an architecture and interior design studio, built around large imagery and generous space.",
    role: "Demo value — Web design and development",
    technologies: ["Demo value"],
    address: "haldenstudio.demo",
  },
  {
    id: "web-project-02",
    demo: true,
    image: "/images/portfolio/web-development/project-02.jpg",
    imageAlt: "Home page of the Drift demo website.",
    imagePosition: "50% 0%",
    imageDemoSite: "drift",
    placeholderTitle: "Web Project",
    title: "Drift",
    category: "Online store — demo concept",
    description:
      "A bold product website concept for a drinks brand, with a single clear message and a short path from landing to shop.",
    role: "Demo value — Web design and development",
    technologies: ["Demo value"],
    address: "drinkdrift.demo",
  },
];
