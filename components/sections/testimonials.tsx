"use client";

import * as React from "react";
import Image from "next/image";
import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TESTIMONIALS } from "@/constants/portfolio";
import { Reveal } from "@/components/motion/reveal";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4"
          fill={i < rating ? "currentColor" : "transparent"}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <Reveal>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trust, from people I’ve shipped with."
          description="Social proof is part of the product. These are the outcomes clients and teammates care about."
        />
      </Reveal>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {TESTIMONIALS.map((t, idx) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: idx * 0.03 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-6"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.24),transparent_60%)] blur-2xl" />
            </div>

            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <Stars rating={t.rating} />
                <span className="text-xs font-medium text-white/45">
                  Verified
                </span>
              </div>

              <blockquote className="mt-4 text-sm leading-7 text-white/70">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={`${t.name} avatar`}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full border border-white/10 bg-white/5"
                />
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/55">
                    {t.role}
                    {t.company ? ` · ${t.company}` : ""}
                  </p>
                </div>
              </figcaption>
            </div>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

