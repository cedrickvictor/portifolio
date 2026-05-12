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
      <div className="absolute left-[11px] top-0 bottom-0 w-px bg-white/10" />
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
              <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border border-white/14 bg-[--bg-elev] shadow-[0_0_0_4px_rgba(255,255,255,0.03)]">
                <div className="absolute inset-1.5 rounded-full bg-[linear-gradient(90deg,hsl(var(--accent)),hsl(var(--accent-2)),hsl(var(--accent-3)))] opacity-85" />
              </div>
              <div className="glass rounded-2xl p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="text-sm text-white/60">{item.org}</p>
                  </div>
                  <p className="text-xs font-medium tracking-wide text-white/45">
                    {item.period}
                  </p>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {item.highlights.map((h) => (
                    <li key={h} className="text-sm leading-6 text-white/70">
                      <span className="text-white/45">•</span> {h}
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
              title="Senior-level execution, with product instincts."
              description="Recruiters care about proof. Here’s how I work, what I optimize for, and the standards I ship with."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-6 space-y-4 text-[15px] leading-7 text-white/70">
              <p className="text-pretty">
                {PROFILE.summary} I’m most effective in ambiguous spaces—turning
                messy requirements into a plan, a system, and a polished user
                experience.
              </p>
              <p className="text-pretty">
                My approach is simple: understand the user, pick the smallest
                solution that stays correct under scale, and ship with
                observability so we can iterate with confidence.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Principles", "Clarity, performance, accessibility, security."],
                  ["Collaboration", "Design + engineering alignment, fast feedback loops."],
                  ["Reliability", "Idempotency, validation, graceful failure modes."],
                  ["Craft", "Typography, spacing, micro-interactions, delightful UX."],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl border border-white/10 bg-white/4 p-4">
                    <p className="text-sm font-medium text-white">{k}</p>
                    <p className="mt-1 text-sm text-white/65">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-sm font-medium text-white/80">
              Timeline
              <span className="ml-2 text-white/45">
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

