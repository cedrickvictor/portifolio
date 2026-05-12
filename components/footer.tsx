"use client";

import * as React from "react";
import { PROFILE } from "@/constants/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-pad flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/55">
          © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js,
          Tailwind, and attention to detail.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-white/65 hover:text-white"
          >
            GitHub
          </a>
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-white/65 hover:text-white"
          >
            LinkedIn
          </a>
          <a href={PROFILE.links.email} className="text-white/65 hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

