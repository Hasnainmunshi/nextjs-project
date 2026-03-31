import { resolve } from "path";

export type Skill = {
  id: string;
  name: string;
  description: string;
  category: string;
  createAt: string;
  updateAt: string;
};

export let SKILLS: Skill[] = [
  {
    id: "1",
    name: "JavaScript",
    description: "Core programming language for web development",
    category: "Programming",
    createAt: "2026-03-17T10:00:00Z",
    updateAt: "2026-03-17T10:00:00Z",
  },
  {
    id: "2",
    name: "TypeScript",
    description: "Typed superset of JavaScript for scalable apps",
    category: "Programming",
    createAt: "2026-03-17T10:01:00Z",
    updateAt: "2026-03-17T10:01:00Z",
  },
  {
    id: "3",
    name: "React",
    description: "Frontend library for building UI components",
    category: "Frontend",
    createAt: "2026-03-17T10:02:00Z",
    updateAt: "2026-03-17T10:02:00Z",
  },
  {
    id: "4",
    name: "Next.js",
    description: "Full-stack React framework for SSR & SSG",
    category: "Frontend",
    createAt: "2026-03-17T10:03:00Z",
    updateAt: "2026-03-17T10:03:00Z",
  },
  {
    id: "5",
    name: "Node.js",
    description: "Backend runtime for building APIs",
    category: "Backend",
    createAt: "2026-03-17T10:04:00Z",
    updateAt: "2026-03-17T10:04:00Z",
  },
  {
    id: "6",
    name: "Express.js",
    description: "Minimal Node.js framework for REST APIs",
    category: "Backend",
    createAt: "2026-03-17T10:05:00Z",
    updateAt: "2026-03-17T10:05:00Z",
  },
  {
    id: "7",
    name: "MongoDB",
    description: "NoSQL database for scalable applications",
    category: "Database",
    createAt: "2026-03-17T10:06:00Z",
    updateAt: "2026-03-17T10:06:00Z",
  },
  {
    id: "8",
    name: "JWT Authentication",
    description: "Secure token-based authentication method",
    category: "Security",
    createAt: "2026-03-17T10:07:00Z",
    updateAt: "2026-03-17T10:07:00Z",
  },
  {
    id: "9",
    name: "REST API Design",
    description: "Designing scalable and maintainable APIs",
    category: "Backend",
    createAt: "2026-03-17T10:08:00Z",
    updateAt: "2026-03-17T10:08:00Z",
  },
  {
    id: "10",
    name: "Git & GitHub",
    description: "Version control and collaboration tools",
    category: "Tools",
    createAt: "2026-03-17T10:09:00Z",
    updateAt: "2026-03-17T10:09:00Z",
  },
];

export async function getSkills() {
  await new Promise((res) => setTimeout(res, 2000));
  return [...SKILLS];
}

export async function addSkill(skill: Skill) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  SKILLS = [...SKILLS, skill];
  console.log("skills updated", SKILLS);
  return getSkills();
}
