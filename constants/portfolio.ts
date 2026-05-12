import type { Project, Skill, Testimonial, TimelineItem } from "@/types/portfolio";

/** Display name (title case) */
export const PROFILE = {
  name: "Niyonkuru Cedric Victor",
  company: "GriLab",
  title: "Expert Web, Mobile, and Software Engineering",
  location: "Kigali, Rwanda",
  valueProp:
    "Versatile Web Developer bridging elegant design and technical performance—React, Next.js, Node.js, machine learning, hands-on training across languages, and supervised delivery.",
  summary: `Versatile Web Developer dedicated to bridging the gap between elegant design and technical performance. With expertise in the modern web ecosystem—specifically React, Next.js, and Node.js—I focus on writing clean, maintainable code that delivers measurable business value.

Throughout my career, I've stayed committed to optimizing web performance and accessibility, ensuring that every project I touch is as inclusive as it is fast. I don't just build websites; I build digital solutions that solve real-world problems.

I apply machine learning where it drives outcomes, train teams across languages and stacks, and supervise projects so delivery stays aligned from discovery to launch.`,
  companyDescription: `GriLab is a full-service technology partner specializing in custom web design, mobile application development, and robust software engineering. We simplify the Information and Technology landscape by providing end-to-end solutions that drive efficiency and innovation.

Our expertise spans the latest development frameworks and official Microsoft Training programs designed to elevate your business operations. Focused on quality, security, and scalability, we are your trusted source for all things IT.`,
  /** Short line under the logo in the navbar */
  navSubtitle: "Web · Mobile · Software",
  phoneDisplay: "+250 789 359 021",
  links: {
    email: "mailto:cedrickvictor8@gmail.com",
    phone: "tel:+250789359021",
    whatsapp: "https://wa.me/250789359021",
    github: "https://github.com/cedrickvictor",
    instagram: "https://www.instagram.com/cedrick_grinel",
    x: "https://x.com/cedrick_grinel",
    telegram: "https://t.me/cedrickvictor",
    facebook: "https://www.facebook.com/cedrickvictor",
  },
} as const;

/** Ordered social destinations (icons rendered in `components/social-bar.tsx`). Verify Instagram/Facebook/Telegram URLs if needed. */
export const SOCIAL_LINKS = [
  {
    key: "instagram",
    label: "Instagram",
    href: PROFILE.links.instagram,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    href: PROFILE.links.whatsapp,
  },
  {
    key: "gmail",
    label: "Email",
    href: PROFILE.links.email,
  },
  {
    key: "x",
    label: "X",
    href: PROFILE.links.x,
  },
  {
    key: "telegram",
    label: "Telegram",
    href: PROFILE.links.telegram,
  },
  {
    key: "facebook",
    label: "Facebook",
    href: PROFILE.links.facebook,
  },
  {
    key: "github",
    label: "GitHub",
    href: PROFILE.links.github,
  },
] as const;

export type SocialKey = (typeof SOCIAL_LINKS)[number]["key"];

export const SKILLS: Skill[] = [
  {
    name: "Machine Learning",
    level: 78,
    group: "Backend",
    detail:
      "Practical ML integration, data pipelines, evaluation, and shipping models alongside web products.",
  },
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
      github: "https://github.com/cedrickvictor/atlas-billing",
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
      github: "https://github.com/cedrickvictor/pulse-dashboard",
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
      github: "https://github.com/cedrickvictor/vault-api",
    },
  },
];

export const EXPERIENCE: TimelineItem[] = [
  {
    title: "Founder & Lead Engineer",
    org: "GriLab",
    period: "2024 — Present",
    description:
      "Full-service technology partner for web, mobile, and software engineering—custom builds, Microsoft-aligned training, and supervised project delivery with a focus on quality, security, and scale.",
    highlights: [
      "End-to-end delivery: web design, mobile apps, and robust backend systems.",
      "Training and mentorship across modern stacks; supervision from discovery to launch.",
      "Microsoft Training program alignment and pragmatic ML where it adds business value.",
    ],
  },
  {
    title: "Full Stack Developer (Freelance)",
    org: "Independent",
    period: "2022 — 2024",
    description:
      "Delivered client products with emphasis on performance, accessibility, and maintainable code.",
    highlights: [
      "Production-grade Next.js apps with clear architecture and documentation.",
      "Performance and a11y improvements on business-critical flows.",
      "CI, PR standards, and clean handoffs for client teams.",
    ],
  },
];

export const EDUCATION: TimelineItem[] = [
  {
    title: "Computer Science & continuous learning",
    org: "Self-directed + formal training",
    period: "2021 — Present",
    description:
      "Deep focus on web fundamentals, software engineering practice, and staying current with frameworks and platforms—including Microsoft ecosystem training.",
    highlights: [
      "TypeScript, React, and Node.js through shipped products.",
      "Backend: REST, auth, data modeling, observability.",
      "Teaching mindset: workshops, pair sessions, and supervised projects.",
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
