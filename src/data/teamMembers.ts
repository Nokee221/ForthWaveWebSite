// Temporary copy — to be replaced when docs/CONTENT.md is written.
export const teamIntro = {
  eyebrow: "The people behind FourthWave",
  // One entry per line; `accent` lines are shown in the purple gradient.
  headline: [
    { text: "Good ideas", accent: false },
    { text: "start with", accent: false },
    { text: "good people.", accent: true },
  ],
  body: "Meet the people combining different perspectives, skills, and creative thinking to build meaningful digital experiences.",
  detail: "Four people. One creative vision.",
};

/** One entry in a profile's experience or education timeline. */
export type TimelineEntry = {
  /** e.g. "2022 — Present". */
  period?: string;
  title: string;
  /** Company, school or similar. */
  organization?: string;
  description?: string;
};

export type TeamMember = {
  /** Stable identifier; also used in the portrait file name. */
  id: string;
  name: string;
  /** Shown on the portrait placeholder until the photo is added. */
  initials: string;
  portrait: {
    /** URL path of the photograph inside /public. */
    src: string;
    /** Describes the photograph for screen readers. */
    alt: string;
    /**
     * Which part of the photo stays in view when it is cropped: "x y", where
     * 0% is the left/top edge. Adjust per person so the face is not cut off.
     */
    objectPosition: string;
  };

  /** Shown under the portrait and in the profile. */
  role: string;

  // Everything below is optional. A section of the profile is shown only
  // when its field has content — leave it empty rather than inventing it.
  shortIntro?: string;
  /** One entry per paragraph. */
  biography?: string[];
  experience: TimelineEntry[];
  education: TimelineEntry[];
  skills: string[];
  projects: { title: string; description?: string; href?: string }[];
  certifications: string[];
  /** Only real URLs. Nothing is shown while this is empty. */
  socialLinks: { label: string; href: string }[];
  /** e.g. "Available for new projects". */
  availability?: string;
};

/** Shown wherever a role has not been supplied yet. */
export const ROLE_PLACEHOLDER = "Role coming soon";

/** Shown in a profile that has no details yet. */
export const PROFILE_PLACEHOLDER =
  "Full profile coming soon. Biography, experience, education and skills will be added here.";

/*
 * The four team members, in display order.
 *
 * Only the names are real. Roles and every profile detail are still to be
 * supplied: replace ROLE_PLACEHOLDER with the real role and fill in the
 * optional fields. Do not add anything that has not been confirmed by the
 * person it describes.
 *
 * Portraits: put each photograph at public + `portrait.src`. Until a file
 * exists, the site shows the person's initials in its place.
 */
export const teamMembers: TeamMember[] = [
  {
    id: "adem-halilovic",
    name: "Adem Halilović",
    initials: "AH",
    portrait: {
      src: "/images/team/adem-halilovic.jpg",
      alt: "Portrait of Adem Halilović",
      objectPosition: "50% 25%",
    },
    role: ROLE_PLACEHOLDER,
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    socialLinks: [],
  },
  {
    id: "kenan-cosic",
    name: "Kenan Ćosić",
    initials: "KĆ",
    portrait: {
      src: "/images/team/kenan-cosic.jpg",
      alt: "Portrait of Kenan Ćosić",
      objectPosition: "50% 25%",
    },
    role: ROLE_PLACEHOLDER,
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    socialLinks: [],
  },
  {
    id: "ammar-kahrimanovic",
    name: "Ammar Kahrimanović",
    initials: "AK",
    portrait: {
      src: "/images/team/ammar-kahrimanovic.jpg",
      alt: "Portrait of Ammar Kahrimanović",
      objectPosition: "50% 25%",
    },
    role: ROLE_PLACEHOLDER,
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    socialLinks: [],
  },
  {
    id: "sumeja-halilovic",
    name: "Sumeja Halilović",
    initials: "SH",
    portrait: {
      src: "/images/team/sumeja-halilovic.jpg",
      alt: "Portrait of Sumeja Halilović",
      objectPosition: "50% 25%",
    },
    role: ROLE_PLACEHOLDER,
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    socialLinks: [],
  },
];
