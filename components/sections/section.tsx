import * as React from "react";
import { cn } from "@/lib/cn";

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "container-pad scroll-mt-24 py-[72px] sm:py-[88px] text-slate-900 dark:text-slate-100",
        className,
      )}
    >
      {children}
    </section>
  );
}

