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
    period: "2022 — present",
    role: "Software engineering student",
    company: "Malawi University of Business and Applied Sciences",
    description:
      "Studying while shipping side projects and an essay archive on Clojure, agentic coding, and building from first principles.",
    links: [],
  },
  {
    period: "2024 — present",
    role: "Founder & developer",
    company: "Jiya",
    description:
      "Ridesharing for Malawi — an Android app on Google Play, a web presence, and a Go backend. Shipped end to end, from hailing a ride to paying for it.",
    links: [
      { label: "app", href: JIYA_PLAY },
      { label: "server repo", href: REPOS.kujiyaserver },
    ],
  },
  {
    period: "2024 — 2025",
    role: "Developer",
    company: "Katholic",
    description:
      "Offline-first Flutter app for daily Catholic readings and the Way of the Cross, in English and Chichewa, backed by a local SQLite store.",
    links: [{ label: "repo", href: REPOS.katholic }],
  },
  {
    period: "2025 — present",
    role: "Essayist",
    company: "Notes on Clojure, agents & first principles",
    description:
      "Writing about functional programming and learning hard things. A Project Euler streak in Clojure keeps the essays honest.",
    links: [{ label: "read", href: "/blog/" }],
  },
  {
    period: "2026",
    role: "Data & ML contributor",
    company: "CXR Grad-CAM + data partnership workshops",
    description:
      "Chest X-ray classification with Grad-CAM heatmaps, plus LRLL Malawi and ASR audio-preparation workshops with the Data Partnership.",
    links: [{ label: "repo", href: REPOS.lungcxr }],
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
