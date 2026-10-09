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
 * Both now use real screenshots. Only the titles are filled in; add the rest
 * when it is written:
 *   - `category`, `description`, `role`, `technologies` (all optional; only
 *     the fields that are filled in are displayed),
 *   - `projectUrl: "https://…"` if the site is live. The mockup then shows
 *     the address and the details view links to it.
 *
 * To change a screenshot, replace the file at public + `image`. A wide
 * screenshot of the top of the page fits best; `imagePosition` chooses which
 * part stays in view when it is cropped to 16:10.
 *
 * Do not fill these in with anything that is not real.
 */
export const webProjects: Project[] = [
  {
    id: "web-project-01",
    image: "/images/portfolio/web-development/project-01.png",
    imageAlt: "Home page of the PerfectCV website.",
    imagePosition: "50% 0%",
    placeholderTitle: "Featured Web Project",
    title: "PerfectCV",
    // category: "",
    // description: "",
    // role: "",
    // technologies: [],
    // projectUrl: "",
  },
  {
    id: "web-project-02",
    // A 16:10 crop of project-02.png, trimmed to the page content so it
    // fills the browser window instead of sitting small between wide margins.
    image: "/images/portfolio/web-development/project-02-cropped.jpg",
    imageAlt: "Home page of the SHIFT website.",
    imagePosition: "50% 0%",
    placeholderTitle: "Web Project",
    title: "SHIFT",
    // category: "",
    // description: "",
    // role: "",
    // technologies: [],
    // projectUrl: "",
  },
];
