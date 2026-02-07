export interface SkillTier {
  level: string;
  rating: number;
  skills: string[];
}

export const skillTiers: SkillTier[] = [
  {
    level: "Expert",
    rating: 5,
    skills: [
      "Java",
      "JavaScript",
      "HTML/CSS/PHP",
      "React",
      "Next.js",
      "Node.js",
      "Objective-C",
      "MongoDB",
      "Git",
      "Flutter",
      "Firebase",
    ],
  },
  {
    level: "Advanced",
    rating: 4,
    skills: [
      "Python",
      "Django",
      "Objective-C",
      "Swift",
      "PostgreSQL",
      "MySQL",
      "WebSocket",
      "RPC",
    ],
  },
  {
    level: "Intermediate",
    rating: 3,
    skills: [
      "C++",
      "C",
      "Docker",
      "Kubernetes",
      "OpenShift",
      "SpringBoot",
      "TensorFlow",
      "PyTorch",
      "MATLAB",
    ],
  },
];
