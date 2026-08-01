export const GITHUB = "https://github.com/mtendekuyokwa";
export const LINKEDIN = "https://www.linkedin.com/in/mtende-kuyokwa-a71a60241/";
export const MAILTO = "mailto:mtendekuyokwa19@gmail.com";
export const JIYA_PLAY =
  "https://play.google.com/store/apps/details?id=com.mtendekuyokwa.jiya";

export const REPOS = {
  katholic: "https://github.com/mtendekuyokwa/katholic",
  kujiyaserver: "https://github.com/mtendekuyokwa/kujiyaserver",
  jiyaweb: "https://github.com/mtendekuyokwa/jiyaweb",
  deathtotheworld: "https://github.com/mtendekuyokwa/deathtotheworld",
  lungcxr: "https://github.com/mtendekuyokwa/lungcxr_classification_gradcam",
  all: GITHUB + "?tab=repositories",
};

export interface Post {
  title: string;
  description: string;
  pubDate: string;
  cover?: string;
  url: string;
}

export interface ExperienceEntry {
  period: string;
  role: string;
  company: string;
  description: string;
  links: { label: string; href: string }[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    period: "Jun 2026 — present",
    role: "Student Technical Trainee",
    company: "Malawi Liverpool Wellcome Research Programme",
    description:
      "Working with HPC infrastructure and training models at the Malawi Liverpool Wellcome Research Programme.",
    links: [],
  },
  {
    period: "Apr 2026 — present",
    role: "Student Researcher",
    company: "Kuyesera AI Lab",
    description:
      "Working on TB imaging models with Grad-CAM explainability at Kuyesera AI Lab.",
    links: [{ label: "repo", href: REPOS.lungcxr }],
  },
  {
    period: "Oct 2025 — Mar 2026",
    role: "Software Engineer",
    company: "iMoSyS",
    description:
      "Built a parser in Flutter for a crypto application and worked on the driver side of a taxi-hailing app.",
    links: [],
  },
  {
    period: "Oct 2024 — Jan 2025",
    role: "Robotics Intern",
    company: "Robotics Foundation LimitedMW",
    description:
      "Robotics internship at Robotics Foundation LimitedMW in Blantyre.",
    links: [],
  },
];

export interface Project {
  title: string;
  blurb: string;
  cover: string;
  tall?: boolean;
  href: string;
  repoLabel: string;
  repoHref: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Jiya",
    blurb: "Ridesharing for Malawi",
    cover: "/portfolio/project-03.svg",
    href: JIYA_PLAY,
    repoLabel: "view repo",
    repoHref: REPOS.kujiyaserver,
  },
  {
    title: "Katholic",
    blurb: "Daily readings & the Way of the Cross, offline",
    cover: "/portfolio/project-01.png",
    tall: true,
    href: REPOS.katholic,
    repoLabel: "view repo",
    repoHref: REPOS.katholic,
  },
  {
    title: "Project Eular",
    blurb: "Math problems, solved in Clojure",
    cover: "/portfolio/project-04.webp",
    href: "/blog/project-eular/",
    repoLabel: "view write-up",
    repoHref: "/blog/project-eular/",
  },
  {
    title: "deathtotheworld",
    blurb: "An esolang love letter, in Brainfuck",
    cover: "/portfolio/project-05.svg",
    tall: true,
    href: REPOS.deathtotheworld,
    repoLabel: "view repo",
    repoHref: REPOS.deathtotheworld,
  },
];
