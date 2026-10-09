import type { Project } from "@/data/projects";

// Temporary copy — to be replaced when docs/CONTENT.md is written.
export const mobileDevelopmentIntro = {
  eyebrow: "Mobile Development",
  headline: "Powerful experiences.",
  headlineQuiet: "Made for mobile.",
  body: "We build intuitive mobile applications designed around the people who use them.",
};

/*
 * The two Mobile Development projects. The first is the featured one.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ BOTH PROJECTS BELOW ARE FICTIONAL DEMOS.                             │
 * │ "Smart Living" and "MoveWell" are not real FourthWave work. Their    │
 * │ names, descriptions, roles, technologies and app screens exist only  │
 * │ to preview the layout, and the site labels them "Demo".              │
 * └──────────────────────────────────────────────────────────────────────┘
 *
 * To replace a demo with a real project:
 *   1. Put its screenshots at public + the `image` / `src` paths below.
 *      A real file replaces the demo screen automatically. Portrait phone
 *      screenshots fit best.
 *   2. Replace `title`, `description`, `role` and `technologies` with the
 *      real information (delete any you don't have).
 *   3. Delete the `demo: true` line to remove the "Demo" label.
 */
export const mobileProjects: Project[] = [
  {
    id: "mobile-project-01",
    demo: true,
    image: "/images/portfolio/mobile-development/project-01-screen-01.jpg",
    imageAlt: "Home screen of the Smart Living demo app.",
    imagePosition: "50% 0%",
    imageDemoScreen: "smart-living-home",
    moreImages: [
      {
        src: "/images/portfolio/mobile-development/project-01-screen-02.jpg",
        alt: "Room controls screen of the Smart Living demo app.",
        position: "50% 0%",
        demoScreen: "smart-living-room",
      },
    ],
    placeholderTitle: "Featured Mobile Project",
    title: "Smart Living",
    description:
      "A modern mobile experience designed to make everyday tasks simpler, faster, and more intuitive.",
    role: "Demo value — UX/UI design and development",
    technologies: ["Demo value"],
  },
  {
    id: "mobile-project-02",
    demo: true,
    image: "/images/portfolio/mobile-development/project-02-screen-01.jpg",
    imageAlt: "Daily progress screen of the MoveWell demo app.",
    imagePosition: "50% 0%",
    imageDemoScreen: "movewell-today",
    moreImages: [
      {
        src: "/images/portfolio/mobile-development/project-02-screen-02.jpg",
        alt: "Weekly goals screen of the MoveWell demo app.",
        position: "50% 0%",
        demoScreen: "movewell-goals",
      },
    ],
    placeholderTitle: "Mobile Project",
    title: "MoveWell",
    description:
      "A seamless mobile experience that helps users stay organized, track progress, and reach their goals.",
    role: "Demo value — UX/UI design and development",
    technologies: ["Demo value"],
  },
];
