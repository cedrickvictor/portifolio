"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { Download, Mail, Sparkles } from "lucide-react";
import { PROFILE } from "@/constants/portfolio";

const floatTransition = {
  duration: 6,
  repeat: Number.POSITIVE_INFINITY,
  repeatType: "mirror" as const,
  ease: [0.42, 0, 0.58, 1] as const,
};

export function HeroSection() {
  return (
    <section className="relative">
      <div className="container-pad pt-24 pb-14 sm:pt-28 sm:pb-16">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-2 text-xs font-medium text-white/70">
              <Sparkles className="h-4 w-4" />
              Available for high-impact builds · {PROFILE.location}
            </p>

            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {PROFILE.name}{" "}
              <span className="text-white/55">—</span>{" "}
              <span className="text-gradient">{PROFILE.title}</span>
            </h1>
            <p className="mt-4 text-pretty text-[15px] leading-7 text-white/65 sm:text-base">
              {PROFILE.valueProp} I focus on proof: case studies, metrics,
              shipping velocity, and code that stays clean under pressure.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="#projects" variant="primary" size="lg">
                View projects
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary" size="lg">
                <Mail className="h-4 w-4" />
                Contact me
              </ButtonLink>
              <a
                href="/resume.pdf"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium text-white/75 hover:text-white hover:bg-white/8"
              >
                <Download className="h-4 w-4" />
                Download resume
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto w-[min(360px,100%)]">
              <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.32),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.24),transparent_55%)] blur-2xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-white/4 p-6">
                <div className="flex items-center gap-4">
                  <Image
                    src="/avatar.svg"
                    alt="Developer avatar"
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-2xl border border-white/10 bg-white/5"
                    priority
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {PROFILE.name}
                    </p>
                    <p className="text-sm text-white/60">{PROFILE.title}</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {[
                    ["Speed", "Ship fast with confidence and clear trade-offs."],
                    ["Quality", "Performance, a11y, and reliability are defaults."],
                    ["Clarity", "Readable code, docs, and smooth handoffs."],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="rounded-2xl border border-white/10 bg-white/4 p-4"
                    >
                      <p className="text-sm font-medium text-white">{k}</p>
                      <p className="mt-1 text-sm leading-6 text-white/65">
                        {v}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Floating tech icons */}
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-3 -top-4 rounded-2xl border border-white/10 bg-white/6 px-3 py-2 text-xs font-medium text-white/75"
                  animate={{ y: [-4, 6], rotate: [-2, 2] }}
                  transition={floatTransition}
                >
                  Next.js
                </motion.div>
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-4 top-[88px] rounded-2xl border border-white/10 bg-white/6 px-3 py-2 text-xs font-medium text-white/75"
                  animate={{ y: [6, -4], rotate: [2, -2] }}
                  transition={{ ...floatTransition, duration: 7.5 }}
                >
                  TypeScript
                </motion.div>
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-10 -bottom-4 rounded-2xl border border-white/10 bg-white/6 px-3 py-2 text-xs font-medium text-white/75"
                  animate={{ y: [-2, 8], rotate: [1, -2] }}
                  transition={{ ...floatTransition, duration: 8.25 }}
                >
                  Tailwind
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <motion.a
            href="#about"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-medium text-white/65 hover:text-white"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
          >
            Scroll
            <motion.span
              aria-hidden="true"
              className="inline-flex h-5 w-3 items-start justify-center rounded-full border border-white/18 bg-white/6 p-0.5"
            >
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-white/70"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

