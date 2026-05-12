export type SkillGroup = "Frontend" | "Backend" | "Tools";

export type Skill = {
  name: string;
  level: number; // 0-100 (confidence / usage depth)
  detail: string;
  group: SkillGroup;
};

export type ProjectCategory = "Frontend" | "Backend" | "Full Stack";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  image: {
    src: string;
    alt: string;
  };
  problem: string;
  solution: string;
  impact: string[];
  technologies: string[];
  links: {
    github?: string;
    live?: string;
  };
};

export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  description: string;
  highlights: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  company?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  avatar: string;
};

