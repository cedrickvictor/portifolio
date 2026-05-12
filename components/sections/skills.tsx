"use client";

import * as React from "react";
import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SKILLS } from "@/constants/portfolio";
import type { SkillGroup } from "@/types/portfolio";
import { Reveal } from "@/components/motion/reveal";
import { motion } from "framer-motion";

const GROUPS: SkillGroup[] = ["Frontend", "Backend", "Tools"];

function SkillCard({
  name,
  detail,
  level,
  idx,
}: {
  name: string;
  detail: string;
  level: number;
  idx: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.02 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-5 dark:border-slate-800 dark:bg-white/3"
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.28),transparent_60%)] blur-xl" />
        <div className="absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.24),transparent_60%)] blur-xl" />
      </div>

      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{name}</p>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-500">{level}%</p>
        </div>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{detail}</p>

        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
          <motion.div
            className="h-full rounded-full bg-[linear-gradient(90deg,hsl(var(--accent)),hsl(var(--accent-2)),hsl(var(--accent-3)))]"
            initial={{ width: 0, opacity: 0.9 }}
            whileInView={{ width: `${Math.max(10, Math.min(100, level))}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <Section id="skills">
      <div className="flex flex-col gap-8">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Depth where it matters."
            description="Grouped by domain. Each skill includes what I actually do with it—not just a buzzword list."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-3">
          {GROUPS.map((group) => {
            const items = SKILLS.filter((s) => s.group === group);
            return (
              <div key={group}>
                <div className="flex items-baseline justify-between">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{group}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">
                    {items.length} skills
                  </p>
                </div>
                <div className="mt-4 grid gap-3">
                  {items.map((s, idx) => (
                    <SkillCard
                      key={s.name}
                      name={s.name}
                      detail={s.detail}
                      level={s.level}
                      idx={idx}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

