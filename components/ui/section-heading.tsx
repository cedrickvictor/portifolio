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
        <p className="text-xs font-medium tracking-[0.18em] uppercase text-white/50">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-pretty text-sm leading-6 text-white/65 sm:text-[15px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

