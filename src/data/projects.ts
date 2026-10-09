/**
 * Demo app screens drawn in code (src/components/sections/DemoAppScreens.tsx).
 * A screen is shown only while the real screenshot file is missing.
 */
export type DemoScreenId =
  | "smart-living-home"
  | "smart-living-room"
  | "movewell-today"
  | "movewell-goals";

/**
 * Demo websites drawn in code (src/components/sections/DemoWebsites.tsx).
 * A site is shown only while the real screenshot file is missing.
 */
export type DemoSiteId = "halden-studio" | "drift";

/** An image of a project, such as one screen of an app. */
export type ProjectImage = {
  /** URL path of the image inside /public. */
  src: string;
  /** Describes the image for screen readers. */
  alt: string;
  /** Which part of the image stays in view when cropped: "x y". */
  position: string;
  /** Demo screen to show until the file at `src` exists. */
  demoScreen?: DemoScreenId;
};

/** A portfolio project. Shared by every service's portfolio. */
export type Project = {
  id: string;
  /**
   * True for fictional sample projects that only exist to preview the layout.
   * The site labels them "Demo". Remove it when the project is real.
   */
  demo?: boolean;
  /** URL path of the main screenshot inside /public. */
  image: string;
  /** Describes the screenshot for screen readers. */
  imageAlt: string;
  /** Which part of the screenshot stays in view when cropped: "x y". */
  imagePosition: string;
  /** Demo screen to show until the main screenshot exists. */
  imageDemoScreen?: DemoScreenId;
  /** Demo website to show until the main screenshot exists. */
  imageDemoSite?: DemoSiteId;
  /** Further images, shown after the main one (e.g. more screens of an app). */
  moreImages?: ProjectImage[];
  /** Shown in place of the title until the project has one. */
  placeholderTitle: string;

  // Project information. Only fields that are filled in are displayed.
  title?: string;
  /** The kind of project, e.g. "Online store". */
  category?: string;
  description?: string;
  role?: string;
  technologies?: string[];
  /** The live website or store listing, if there is one. */
  projectUrl?: string;
  /**
   * Text for a browser mockup's address bar when there is no `projectUrl`.
   * Display only; it is never a link.
   */
  address?: string;
};

/** What a browser mockup shows in its address bar for a project. */
export function projectAddress(project: Project) {
  return (
    project.projectUrl?.replace(/^https?:\/\/|\/$/g, "") ?? project.address
  );
}

export const projectPlaceholderDescription =
  "Project details will be added soon.";

/** All of a project's images, main one first. */
export function projectImages(project: Project): ProjectImage[] {
  return [
    {
      src: project.image,
      alt: project.imageAlt,
      position: project.imagePosition,
      demoScreen: project.imageDemoScreen,
    },
    ...(project.moreImages ?? []),
  ];
}
