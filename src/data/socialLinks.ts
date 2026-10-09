export type SocialPlatform = "instagram" | "tiktok" | "youtube";

export type SocialLink = {
  platform: SocialPlatform;
  /** The platform's official name. */
  name: string;
  /**
   * The full URL of FourthWave's profile, e.g.
   * "https://www.instagram.com/your-handle". Leave empty until it exists:
   * the footer then shows the platform as "Coming soon" without a link.
   */
  url: string;
};

/*
 * FourthWave's social profiles, in display order.
 *
 * The URLs have not been provided yet. Paste each real profile URL into
 * `url` and its footer entry becomes a link that opens in a new tab.
 */
export const socialLinks: SocialLink[] = [
  { platform: "instagram", name: "Instagram", url: "" },
  { platform: "tiktok", name: "TikTok", url: "" },
  { platform: "youtube", name: "YouTube", url: "" },
];
