"use client";

import * as React from "react";
import { PROFILE } from "@/constants/portfolio";
import { SocialBar } from "@/components/social-bar";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
      <div className="container-pad flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} {PROFILE.company} · {PROFILE.name}.
            Built with Next.js, Tailwind, and attention to detail.
          </p>
          <SocialBar />
        </div>
      </div>
    </footer>
  );
}
