export interface SocialLink {
  name: string;
  url: string;
  icon: "instagram" | "linkedin" | "github";
}

export const socials: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/swjz_perspective/",
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/wen-jie-steven-zhao-b4212514a/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/Swjzhao",
    icon: "github",
  },
];
