"use client";

import * as React from "react";
import { NAV } from "@/constants/nav";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

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
            className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-white/90 hover:text-white"
            aria-label="Go to top"
          >
            <span className="text-gradient font-semibold tracking-tight">
              Q.C
            </span>
            <span className="hidden text-white/45 sm:inline">
              Full Stack Developer
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
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:text-white hover:bg-white/8",
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/85 hover:bg-white/10"
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

