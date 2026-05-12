"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { Download, Mail, Sparkles } from "lucide-react";
import { PROFILE } from "@/constants/portfolio";
import { SocialBar } from "@/components/social-bar";

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
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100/90 px-3 py-2 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-white/4 dark:text-slate-400">
              <Sparkles className="h-4 w-4" />
              {PROFILE.company} · Training & project supervision ·{" "}
              {PROFILE.location}
            </p>

            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
              {PROFILE.name}{" "}
              <span className="text-slate-400 dark:text-slate-500">—</span>{" "}
              <span className="text-gradient">{PROFILE.title}</span>
            </h1>
            <p className="mt-4 text-pretty text-[15px] leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
              {PROFILE.valueProp}
            </p>

            <div className="mt-7 flex flex-col gap-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <ButtonLink href="#projects" variant="primary" size="lg">
                  View projects
                </ButtonLink>
                <ButtonLink href="#contact" variant="secondary" size="lg">
                  <Mail className="h-4 w-4" />
                  Contact me
                </ButtonLink>
                <a
                  href="/resume.pdf"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/8 dark:hover:text-slate-50"
                >
                  <Download className="h-4 w-4" />
                  Download resume
                </a>
              </div>
              <SocialBar />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto w-[min(360px,100%)]">
              <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.32),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.24),transparent_55%)] blur-2xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-700 dark:bg-white/4 dark:shadow-none">
                <div className="flex items-center gap-4">
                  <Image
                    src="/profile.jpg"
                    alt="Developer avatar"
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-2xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5"
                    priority
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {PROFILE.name}
                    </p>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
                      {PROFILE.company}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{PROFILE.title}</p>
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
                      className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4 dark:border-slate-800 dark:bg-white/4"
                    >
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{k}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {v}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Floating tech icons */}
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-3 -top-4 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-white/6 dark:text-slate-300"
                  animate={{ y: [-4, 6], rotate: [-2, 2] }}
                  transition={floatTransition}
                >
                  Next.js
                </motion.div>
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-4 top-[88px] rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-white/6 dark:text-slate-300"
                  animate={{ y: [6, -4], rotate: [2, -2] }}
                  transition={{ ...floatTransition, duration: 7.5 }}
                >
                  TypeScript
                </motion.div>
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-10 -bottom-4 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-white/6 dark:text-slate-300"
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
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100/90 px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 dark:border-slate-800 dark:bg-white/4 dark:text-slate-400 dark:hover:text-slate-100"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
          >
            Scroll
            <motion.span
              aria-hidden="true"
              className="inline-flex h-5 w-3 items-start justify-center rounded-full border border-slate-300 bg-slate-200/80 p-0.5 dark:border-white/18 dark:bg-white/6"
            >
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-slate-600 dark:bg-white/70"
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

