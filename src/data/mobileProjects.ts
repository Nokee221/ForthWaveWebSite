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
 * Both now use real screenshots (public + the `image` / `src` paths below;
 * portrait phone screenshots fit best).
 *
 * Still to fill in, with real information only:
 *   - Project 1 has no `title` yet. Until it has one, the site shows
 *     `placeholderTitle` and its details view stays disabled.
 *   - `description`, `role`, `technologies` and `projectUrl` for both (all
 *     optional; only the fields that are filled in are displayed).
 */
export const mobileProjects: Project[] = [
  {
    id: "mobile-project-01",
    image: "/images/portfolio/mobile-development/project-01-screen-01.jpg",
    imageAlt: "Home screen of the app, showing the available balance.",
    imagePosition: "50% 0%",
    moreImages: [
      {
        src: "/images/portfolio/mobile-development/project-01-screen-02.jpg",
        alt: "Forecast screen of the app, showing a financial health score.",
        position: "50% 0%",
      },
    ],
    placeholderTitle: "Featured Mobile Project",
    // title: "",
    // description: "",
    // role: "",
    // technologies: [],
  },
  {
    id: "mobile-project-02",
    image: "/images/portfolio/mobile-development/project-02-screen-01.jpg",
    imageAlt: "Check-in screen of the SHIFT app.",
    imagePosition: "50% 0%",
    moreImages: [
      {
        src: "/images/portfolio/mobile-development/project-02-screen-02.jpg",
        alt: "Check-in screen of the SHIFT app.",
        position: "50% 0%",
      },
    ],
    placeholderTitle: "Mobile Project",
    title: "SHIFT",
    // description: "",
    // role: "",
    // technologies: [],
  },
];
