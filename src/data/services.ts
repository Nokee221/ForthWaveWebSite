export type ServiceId =
  | "web-development"
  | "mobile-development"
  | "video-editing"
  | "digital-marketing";

export type Service = {
  id: ServiceId;
  title: string;
  description: string;
  cta: string;
  // Placeholder destination. The detailed service sections do not exist yet;
  // give each one this id (or change this to a route) to connect the link.
  href: string;
  image: {
    // Put the photograph at public + src.
    src: string;
    // Describe the photograph for screen readers once it is added.
    alt: string;
    // Which part of the photo stays in view when it is cropped: "x y".
    focalPoint: string;
  };
};

// Temporary copy — to be replaced when docs/CONTENT.md is written.
export const servicesIntro = {
  eyebrow: "What We Do",
  headline: ["Digital solutions.", "Creative experiences."],
  headlineQuiet: "Measurable impact.",
};

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Fast, modern websites and web apps, built to perform.",
    cta: "Explore Web Development",
    href: "#web-development",
    image: {
      src: "/images/services/web-development.jpg",
      alt: "",
      focalPoint: "50% 50%",
    },
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "Intuitive iOS and Android apps people enjoy using.",
    cta: "Explore Mobile Development",
    href: "#mobile-development",
    image: {
      src: "/images/services/mobile-development.jpg",
      alt: "",
      focalPoint: "50% 50%",
    },
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "Edits that turn raw footage into stories worth watching.",
    cta: "Explore Video Editing",
    href: "#video-editing",
    image: {
      src: "/images/services/video-editing.jpg",
      alt: "",
      focalPoint: "50% 50%",
    },
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Campaigns that help brands reach and engage their audience.",
    cta: "Explore Digital Marketing",
    href: "#digital-marketing",
    image: {
      src: "/images/services/digital-marketing.jpg",
      alt: "",
      focalPoint: "50% 50%",
    },
  },
];
