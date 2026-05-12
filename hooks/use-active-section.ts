"use client";

import * as React from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = React.useState<string>(sectionIds[0] ?? "");

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          )[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.4, 0.55],
        rootMargin: "-15% 0px -70% 0px",
      },
    );

    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sectionIds]);

  return activeId;
}

