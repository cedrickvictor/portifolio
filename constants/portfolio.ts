import type { Project, Skill, Testimonial, TimelineItem } from "@/types/portfolio";

export const PROFILE = {
  name: "Q.C",
  title: "Full Stack Developer",
  location: "Remote · UTC+2",
  valueProp: "I build scalable, secure, user-focused digital products.",
  summary:
    "I’m a product-minded engineer who ships clean systems with measurable outcomes—performance, reliability, conversion, and developer velocity.",
  links: {
    github: "https://github.com/your-handle",
    linkedin: "https://linkedin.com/in/your-handle",
    email: "mailto:you@example.com",
    whatsapp: "https://wa.me/0000000000",
  },
} as const;

export const SKILLS: Skill[] = [
  // Frontend
  {
    name: "React",
    level: 92,
    group: "Frontend",
    detail: "Component architecture, performance, state, accessibility.",
  },
  {
    name: "Next.js",
    level: 90,
    group: "Frontend",
    detail: "App Router, SSR/ISR, Server Actions, SEO, edge-friendly patterns.",
  },
  {
    name: "TypeScript",
    level: 88,
    group: "Frontend",
    detail: "Domain typing, generics, API contracts, DX-focused safety.",
  },
  {
    name: "Tailwind CSS",
    level: 86,
    group: "Frontend",
    detail: "Design systems, tokens, responsive composition, dark-first UI.",
  },
  {
    name: "HTML/CSS",
    level: 85,
    group: "Frontend",
    detail: "Semantics, layout, motion, cross-browser polish.",
  },

  // Backend
  {
    name: "Node.js",
    level: 84,
    group: "Backend",
    detail: "APIs, queues, auth, caching, observability, testing.",
  },
  {
    name: "Express",
    level: 80,
    group: "Backend",
    detail: "REST, middleware, validation, structured error handling.",
  },
  {
    name: "PHP",
    level: 72,
    group: "Backend",
    detail: "Legacy modernization, API integration, pragmatic delivery.",
  },
  {
    name: "MySQL",
    level: 78,
    group: "Backend",
    detail: "Schema design, indexing, query optimization, migrations.",
  },

  // Tools
  {
    name: "Git / GitHub",
    level: 88,
    group: "Tools",
    detail: "PR hygiene, branching strategies, CI workflows, code review.",
  },
  {
    name: "Figma",
    level: 76,
    group: "Tools",
    detail: "UI exploration, components, design handoff, tokens.",
  },
  {
    name: "Vercel",
    level: 82,
    group: "Tools",
    detail: "Preview deploys, performance, environment management, analytics.",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "atlas-billing",
    title: "Atlas Billing",
    category: "Full Stack",
    image: { src: "/projects/atlas-billing.svg", alt: "Atlas Billing preview" },
    problem:
      "A SaaS had revenue leakage and slow invoicing due to manual reconciliation, inconsistent pricing logic, and missing audit trails.",
    solution:
      "Designed a typed billing engine with idempotent invoice runs, Stripe-compatible pricing abstractions, and an audit timeline. Added caching and job orchestration to keep runs fast and safe.",
    impact: [
      "Reduced invoice generation time from 12m → 45s for 25k line items.",
      "Eliminated duplicate charges via idempotency keys + reconciliation UI.",
      "Improved finance confidence with a complete audit trail per invoice.",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "MySQL", "Stripe"],
    links: {
      github: "https://github.com/your-handle/atlas-billing",
      live: "https://example.com",
    },
  },
  {
    slug: "pulse-dashboard",
    title: "Pulse Observability Dashboard",
    category: "Frontend",
    image: { src: "/projects/pulse-dashboard.svg", alt: "Pulse dashboard preview" },
    problem:
      "Teams couldn’t trust incident status because data lived across tools, dashboards were slow, and the UI buried critical signals.",
    solution:
      "Built a fast, accessible dashboard with progressive loading, crisp information hierarchy, and composable charts. Added saved views and keyboard-first navigation.",
    impact: [
      "Improved time-to-signal by 38% with redesigned IA + quick filters.",
      "Cut initial load by 52% using code splitting and memoization.",
      "A11y upgrades: 0 critical issues, fully keyboard navigable.",
    ],
    technologies: ["React", "Next.js", "Framer Motion", "Tailwind"],
    links: {
      github: "https://github.com/your-handle/pulse-dashboard",
      live: "https://example.com",
    },
  },
  {
    slug: "vault-api",
    title: "Vault API Gateway",
    category: "Backend",
    image: { src: "/projects/vault-api.svg", alt: "Vault API preview" },
    problem:
      "A multi-client platform needed a secure, rate-limited API layer with consistent validation and observability across services.",
    solution:
      "Implemented a gateway with request signing, per-tenant rate limiting, structured validation, and standardized error envelopes. Added request tracing and latency budgets.",
    impact: [
      "Reduced 5xx errors by 31% with consistent validation and timeouts.",
      "Introduced per-tenant throttles to prevent noisy-neighbor incidents.",
      "Improved debugging with trace IDs and structured logs.",
    ],
    technologies: ["Node.js", "Express", "Zod", "MySQL"],
    links: {
      github: "https://github.com/your-handle/vault-api",
    },
  },
];

export const EXPERIENCE: TimelineItem[] = [
  {
    title: "Full Stack Developer (Freelance)",
    org: "Independent",
    period: "2024 — Present",
    description:
      "Deliver end-to-end web products: discovery, architecture, implementation, and deployment. Strong focus on performance, accessibility, and maintainable code.",
    highlights: [
      "Built production-grade Next.js apps with design systems and analytics.",
      "Improved conversion with UX-driven iterations and faster page loads.",
      "Established CI, PR standards, and documentation for client handoff.",
    ],
  },
  {
    title: "Software Engineering Intern",
    org: "Product Team",
    period: "2023",
    description:
      "Shipped customer-facing features, fixed reliability issues, and improved component reuse with a small, high-ownership team.",
    highlights: [
      "Refactored UI into reusable primitives, reducing duplicate code.",
      "Optimized key flows and fixed regressions with targeted tests.",
      "Collaborated with design on accessibility and UX details.",
    ],
  },
];

export const EDUCATION: TimelineItem[] = [
  {
    title: "Computer Science Training",
    org: "Self-directed + courses",
    period: "2021 — 2023",
    description:
      "Focused on web fundamentals, algorithms, system design basics, and shipping real projects. Continuous learning through practice and iteration.",
    highlights: [
      "TypeScript + React mastery through repeated product builds.",
      "Backend fundamentals: REST, auth, data modeling, caching.",
      "UI craft: spacing, typography, motion, and interaction design.",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amina K.",
    role: "Product Lead",
    company: "SaaS Platform",
    rating: 5,
    quote:
      "Rare mix of product thinking and engineering depth. Clear communication, premium UI, and shipped a complex billing workflow with confidence.",
    avatar: "/avatars/amina.svg",
  },
  {
    name: "Daniel M.",
    role: "Engineering Manager",
    rating: 5,
    quote:
      "Strong ownership and reliability. Thought through edge cases, performance, and accessibility—then delivered a polished result with docs.",
    avatar: "/avatars/daniel.svg",
  },
  {
    name: "Sofia L.",
    role: "Founder",
    company: "Agency Client",
    rating: 5,
    quote:
      "The work wasn’t just beautiful—it was practical. The case studies, metrics, and structured delivery made it easy to trust the process.",
    avatar: "/avatars/sofia.svg",
  },
];

