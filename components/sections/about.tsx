"use client";

import * as React from "react";
import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { EDUCATION, EXPERIENCE, PROFILE } from "@/constants/portfolio";
import { Reveal } from "@/components/motion/reveal";
import { motion } from "framer-motion";

function Timeline({
  items,
}: {
  items: { title: string; org: string; period: string; highlights: string[] }[];
}) {
  return (
    <div className="relative mt-8">
      <div className="absolute left-[11px] top-0 bottom-0 w-px bg-slate-200 dark:bg-white/10" />
      <ol>
        {items.map((item, idx) => (
          <li
            key={`${item.title}-${item.period}`}
            className="relative pl-10 not-first:mt-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: idx * 0.03,
              }}
            >
              <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border border-slate-300 bg-[--bg-elev] shadow-[0_0_0_4px_rgba(15,23,42,0.06)] dark:border-white/14 dark:shadow-[0_0_0_4px_rgba(255,255,255,0.03)]">
                <div className="absolute inset-1.5 rounded-full bg-[linear-gradient(90deg,hsl(var(--accent)),hsl(var(--accent-2)),hsl(var(--accent-3)))] opacity-85" />
              </div>
              <div className="glass rounded-2xl p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {item.title}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.org}</p>
                  </div>
                  <p className="text-xs font-medium tracking-wide text-slate-500 dark:text-slate-500">
                    {item.period}
                  </p>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {item.highlights.map((h) => (
                    <li key={h} className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                      <span className="text-slate-400 dark:text-slate-500">•</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function AboutSection() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title={`${PROFILE.company}: engineering partner for serious teams.`}
              description="Custom web, mobile, and software engineering—with training, supervision, and outcomes you can measure."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-6 space-y-4 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
              {PROFILE.summary.split("\n\n").map((block, i) => (
                <p key={`summary-${i}`} className="text-pretty">
                  {block.trim()}
                </p>
              ))}
              {PROFILE.companyDescription.split("\n\n").map((block, i) => (
                <p key={`company-${i}`} className="text-pretty">
                  {block.trim()}
                </p>
              ))}
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Training", "Hands-on guidance across languages and stacks."],
                  ["Supervision", "Projects led end-to-end—from discovery to launch."],
                  ["Security & scale", "Quality-first delivery with resilient architecture."],
                  ["Microsoft-aligned", "Modern frameworks plus official training pathways."],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-white/4">
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{k}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-300">
              Timeline
              <span className="ml-2 text-slate-500 dark:text-slate-500">
                (Experience + Training)
              </span>
            </p>
          </Reveal>
          <Timeline items={[...EXPERIENCE, ...EDUCATION]} />
        </div>
      </div>
    </Section>
  );
}

