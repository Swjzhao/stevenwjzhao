export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    company: "Crabel Capital Management",
    role: "Full Stack Engineer",
    period: "June 2021 - Present",
    description:
      "Developed a HighCharts dashboard for financial analysis and data visualization.",
    technologies: ["TypeScript", "React", "RPC", "HighCharts", "Python"],
    achievements: [
      "90% DOM refresh reduction",
      "96% load time improvement (20s to 0.8s)",
    ],
  },
  {
    company: "Dataraction Inc",
    role: "Chief Technology Officer",
    period: "Aug 2020 - May 2021",
    description:
      "Led development of a live streaming platform from the ground up.",
    technologies: [
      "JavaScript",
      "React",
      "Next.js",
      "LoopBack",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "Kubernetes",
      "OpenShift",
      "WebSocket",
      "Agora",
    ],
    achievements: [
      "1,500+ sign ups",
      "100 live viewers per event",
      "$5,000/month client contract",
      "Led team of 10 developers",
    ],
  },
  {
    company: "Google",
    role: "Software Engineering Intern",
    period: "May 2020 - Aug 2020",
    description:
      "Worked on Google Travel feature development and backend services.",
    technologies: ["Java", "TypeScript", "JavaScript", "RPC"],
    achievements: ["Developed travel feature used by millions of users"],
  },
  {
    company: "Google",
    role: "Software Engineering Intern (iOS)",
    period: "May 2019 - Aug 2019",
    description:
      "Developed features for Gmail iOS application.",
    technologies: ["Objective-C", "JavaScript", "iOS"],
    achievements: [
      "Built Gmail iOS button feature",
      "Developed iPad Gmail interaction handler",
    ],
  },
];
