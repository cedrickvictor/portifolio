"use client";

import * as React from "react";
import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { EXPERIENCE } from "@/constants/portfolio";
import { Reveal } from "@/components/motion/reveal";
import { motion } from "framer-motion";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Ownership across the stack."
          description="A vertical timeline of roles, freelance engagements, and high-leverage projects."
        />
      </Reveal>

      <div className="mt-8 grid gap-4">
        {EXPERIENCE.map((item, idx) => (
          <motion.div
            key={`${item.title}-${item.period}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: idx * 0.04 }}
            className="glass rounded-3xl p-6"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-sm text-white/60">{item.org}</p>
              </div>
              <p className="text-xs font-medium tracking-wide text-white/45">
                {item.period}
              </p>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/70">
              {item.description}
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {item.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-2xl border border-white/10 bg-white/4 p-4 text-sm leading-6 text-white/70"
                >
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

