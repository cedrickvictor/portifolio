"use client";

import * as React from "react";
import Image from "next/image";
import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROJECTS } from "@/constants/portfolio";
import type { Project, ProjectCategory } from "@/types/portfolio";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/reveal";
import { Modal } from "@/components/ui/modal";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

const FILTERS: Array<"All" | ProjectCategory> = [
  "All",
  "Frontend",
  "Backend",
  "Full Stack",
];

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.links.github ? (
        <a
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-sm text-slate-800 hover:bg-slate-200 hover:text-slate-950 dark:border-slate-800 dark:bg-white/6 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-slate-50"
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
        >
          <GitBranch className="h-4 w-4" />
          GitHub
        </a>
      ) : null}
      {project.links.live ? (
        <a
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 text-sm font-medium text-slate-50 hover:opacity-90 dark:bg-white dark:text-slate-950"
          href={project.links.live}
          target="_blank"
          rel="noreferrer"
        >
          Live demo
          <ArrowUpRight className="h-4 w-4" />
        </a>
      ) : null}
    </div>
  );
}

function TiltCard({
  project,
  onOpen,
  idx,
}: {
  project: Project;
  onOpen: () => void;
  idx: number;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = React.useState<React.CSSProperties>({});

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (0.5 - py) * 10;
    const ry = (px - 0.5) * 12;
    setStyle({
      transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`,
    });
  };

  const onLeave = () => setStyle({ transform: "perspective(900px) rotateX(0deg) rotateY(0deg)" });

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: idx * 0.03 }}
      className="group"
    >
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className={cn(
          "relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white/90 dark:border-slate-800 dark:bg-white/3",
          "transition-[box-shadow,transform] duration-200 will-change-transform",
          "hover:shadow-[0_28px_120px_rgba(15,23,42,0.12)] dark:hover:shadow-[0_28px_120px_rgba(0,0,0,0.55)]",
        )}
        style={style}
      >
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.30),transparent_60%)] blur-2xl" />
          <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.22),transparent_60%)] blur-2xl" />
        </div>

        <div className="relative p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{project.title}</p>
            <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-white/6 dark:text-slate-300">
              {project.category}
            </span>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-black/20">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={1200}
              height={720}
              className="h-[180px] w-full object-cover sm:h-[200px]"
              loading="lazy"
            />
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <span className="font-medium text-slate-800 dark:text-slate-200">Problem:</span>{" "}
            {project.problem}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700 dark:border-slate-800 dark:bg-white/4 dark:text-slate-400"
              >
                {t}
              </span>
            ))}
            {project.technologies.length > 4 ? (
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-800 dark:bg-white/4 dark:text-slate-500">
                +{project.technologies.length - 4}
              </span>
            ) : null}
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <ProjectLinks project={project} />
            <button
              type="button"
              onClick={onOpen}
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/8 dark:hover:text-slate-50"
            >
              Case study <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-black/25">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={1200}
            height={720}
            className="h-[240px] w-full object-cover sm:h-[320px]"
          />
        </div>
        <div className="mt-5 space-y-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
          <p>
            <span className="font-semibold text-slate-900 dark:text-slate-100">Problem:</span>{" "}
            {project.problem}
          </p>
          <p>
            <span className="font-semibold text-slate-900 dark:text-slate-100">Solution:</span>{" "}
            {project.solution}
          </p>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-5 dark:border-slate-800 dark:bg-white/3">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Impact</p>
          <ul className="mt-3 space-y-2">
            {project.impact.map((x) => (
              <li key={x} className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                <span className="text-slate-400 dark:text-slate-500">•</span> {x}
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700 dark:border-slate-800 dark:bg-white/4 dark:text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = React.useState<(typeof FILTERS)[number]>("All");
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Project | null>(null);

  const visible = React.useMemo(() => {
    if (filter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <Section id="projects" className="relative">
      <div className="absolute inset-x-0 -top-32 h-64 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_60%)]" />

      <div className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Proof of work, not just polish."
            description="Case studies that show the problem, the solution, and measurable impact. Built to be credible within five seconds."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-6 flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={cn(
                    "rounded-full border px-3 py-2 text-sm transition",
                    active
                      ? "border-slate-400 bg-slate-200 text-slate-900 dark:border-white/14 dark:bg-white/10 dark:text-slate-100"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 dark:border-white/10 dark:bg-white/4 dark:text-slate-400 dark:hover:bg-white/8 dark:hover:text-slate-100",
                  )}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {visible.map((p, idx) => (
            <TiltCard
              key={p.slug}
              project={p}
              idx={idx}
              onOpen={() => {
                setSelected(p);
                setOpen(true);
              }}
            />
          ))}
        </div>

        <Modal
          open={open}
          onOpenChange={setOpen}
          title={selected?.title ?? "Project"}
        >
          {selected ? <ProjectCaseStudy project={selected} /> : null}
        </Modal>
      </div>
    </Section>
  );
}

