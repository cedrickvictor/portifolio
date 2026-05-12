import * as React from "react";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="text-xs font-medium tracking-[0.18em] uppercase text-slate-500 dark:text-slate-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-pretty text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-[15px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

