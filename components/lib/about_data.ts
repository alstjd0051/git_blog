export const GITHUB_USERNAME = "alstjd0051";
export const CAREER_START_YEAR = 2019;

export interface SkillItem {
  name: string;
  level: number;
}

export interface ExperienceItem {
  period: string;
  title: string;
  description: string;
}

export interface ValueItem {
  icon: string;
  title: string;
  desc: string;
}

export const backendStacks: SkillItem[] = [
  { name: "Node.js", level: 95 },
  { name: "NestJS", level: 90 },
  { name: "Java", level: 85 },
  { name: "Spring Boot", level: 75 },
  { name: "Express.js", level: 90 },
  { name: "Fastify", level: 72 },
  { name: "GraphQL", level: 70 },
];

export const frontendStacks: SkillItem[] = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 92 },
  { name: "Tailwind CSS", level: 88 },
  { name: "HTML / CSS", level: 95 },
  { name: "Zustand", level: 85 },
];

export const backendLibs = [
  "tRPC",
  "Zod",
  "BullMQ",
  "Swagger / OpenAPI",
  "Passport.js",
  "Socket.IO",
  "Jest / Vitest",
] as const;

export const frontendLibs = [
  "TanStack Query",
  "React Hook Form",
  "Framer Motion",
  "shadcn/ui",
  "Radix UI",
  "TanStack Table",
  "Storybook",
] as const;

export const devopsStacks = [
  "Docker",
  "Kubernetes",
  "Terraform",
  "AWS",
  "Nginx",
  "Linux",
  "Vercel",
] as const;

export const cicdStacks = [
  "GitHub Actions",
  "Jenkins",
  "ArgoCD",
  "Docker Compose",
  "AWS CodePipeline",
  "Husky / lint-staged",
  "Turborepo",
] as const;

export const dbStacks = [
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Drizzle ORM",
  "Prisma",
  "TypeORM",
] as const;

export const toolStacks = [
  "Git",
  "Jira",
  "Figma",
  "Notion",
  "Postman",
  "VS Code",
] as const;

export const experiences: ExperienceItem[] = [
  {
    period: "6년+",
    title: "풀스택 웹 개발",
    description:
      "프론트엔드부터 백엔드까지 전 영역을 아우르는 웹 애플리케이션 설계 및 개발",
  },
  {
    period: "Backend",
    title: "서버 & API 개발",
    description:
      "NestJS, Java 기반의 RESTful API 설계, 마이크로서비스 아키텍처 구축 및 대규모 트래픽 처리 경험",
  },
  {
    period: "Frontend",
    title: "사용자 경험 중심 개발",
    description:
      "React, Next.js를 활용한 SSR/SSG 기반의 고성능 웹 애플리케이션 및 인터랙티브 UI 개발",
  },
];

export const values: ValueItem[] = [
  {
    icon: "🏗️",
    title: "확장 가능한 설계",
    desc: "변화에 유연하고, 유지보수가 쉬운 아키텍처를 지향합니다.",
  },
  {
    icon: "🧹",
    title: "클린 코드",
    desc: "읽기 쉽고 의도가 명확한 코드가 최고의 문서라고 생각합니다.",
  },
  {
    icon: "🚀",
    title: "성능 최적화",
    desc: "사용자가 체감하는 속도와 서버 자원 효율 모두 놓치지 않습니다.",
  },
  {
    icon: "🤝",
    title: "협업과 소통",
    desc: "코드 리뷰, 문서화, 지식 공유를 통해 팀 전체가 성장합니다.",
  },
];
