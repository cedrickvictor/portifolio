"use client";

import * as React from "react";
import { NAV } from "@/constants/nav";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { PROFILE } from "@/constants/portfolio";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const ids = React.useMemo(() => NAV.map((n) => n.id), []);
  const activeId = useActiveSection(ids);
  const [scrolled, setScrolled] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="container-pad">
        <div
          className={cn(
            "mt-4 flex items-center justify-between gap-3 rounded-full px-3 py-2 transition",
            scrolled ? "glass" : "bg-transparent",
          )}
        >
          <button
            type="button"
            onClick={() => scrollToId("home")}
            className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-800 hover:text-slate-950 dark:text-slate-100/90 dark:hover:text-slate-50"
            aria-label="Go to top"
          >
            <span className="text-gradient font-semibold tracking-tight">
              {PROFILE.company}
            </span>
            <span className="hidden text-slate-500 dark:text-slate-400 sm:inline">
              {PROFILE.navSubtitle}
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {NAV.map((item) => {
              const active = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm transition",
                    active
                      ? "bg-slate-200 text-slate-900 dark:bg-white/10 dark:text-slate-100"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/8 dark:hover:text-slate-100",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-800 hover:bg-slate-200 dark:border-slate-800 dark:bg-white/6 dark:text-slate-100/85 dark:hover:bg-white/10"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 hidden dark:block" />
              <Moon className="h-4 w-4 dark:hidden" />
            </button>
            <ButtonLink href="#projects" variant="primary" size="sm">
              View work
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}

