// Temporary copy — to be replaced when docs/CONTENT.md is written.
export const videoEditingIntro = {
  eyebrow: "Video Editing & Production",
  headline: "Stories that move people.",
  body: "From engaging social content to cinematic brand commercials, we turn ideas into compelling visual experiences.",
};

export type VideoProject = {
  id: string;
  /** The full video, played in the modal. URL path of an MP4 inside /public. */
  video: string;
  /** Poster image for the full video, shown before playback. */
  poster: string;
  /** Describes the poster for screen readers. */
  posterAlt: string;
  /** A short, silent clip that loops in the preview. URL path of an MP4. */
  previewVideo?: string;
  /** An animated GIF that loops in the preview. Used ahead of `previewVideo`. */
  previewGif?: string;
  /** Shown in place of the title until the project has one. */
  placeholderTitle: string;

  // Real project information. Only fields that are filled in are displayed.
  title?: string;
  description?: string;
  /** Only if the client has agreed to be named. */
  client?: string;
  /** e.g. "Brand commercial", "Social content". */
  category?: string;
};

/*
 * The main video. Every path below is checked before it is used, so any
 * missing file simply falls back to the next option.
 *
 * What the preview on the page shows, in order of preference:
 *   1. `previewGif`    public/videos/portfolio/video-editing/featured-preview.gif
 *   2. `previewVideo`  public/videos/portfolio/video-editing/featured-preview.mp4
 *                      (plays muted, in a loop)
 *   3. `poster`        public/images/portfolio/video-editing/featured-commercial-poster.jpg
 *   4. An animated placeholder drawn in code (no file needed).
 *
 * What the modal plays:
 *   `video`            public/videos/portfolio/video-editing/featured-commercial.mp4
 *   Until that file exists, the modal shows the placeholder and says the
 *   footage is coming.
 *
 * Then fill in `title` and `description`, and `client` / `category` if you
 * want them shown.
 */
export const featuredVideo: VideoProject = {
  id: "featured-commercial",
  video: "/videos/portfolio/video-editing/featured-commercial.mp4",
  poster: "/images/portfolio/video-editing/featured-commercial-poster.jpg",
  posterAlt: "",
  previewVideo: "/videos/portfolio/video-editing/featured-preview.mp4",
  previewGif: "/videos/portfolio/video-editing/featured-preview.gif",
  placeholderTitle: "Video showreel",
  // title: "",
  // description: "",
  // client: "",
  // category: "",
};

/*
 * Further videos, shown as smaller previews under the main one. Leave empty
 * until there are real ones — nothing is rendered for an empty list.
 */
export const moreVideos: VideoProject[] = [];
