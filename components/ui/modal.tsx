"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";

export function Modal({
  open,
  onOpenChange,
  title,
  children,
  className,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = React.useRef<HTMLDialogElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onCancel = (e: Event) => {
      e.preventDefault();
      onOpenChange(false);
    };
    el.addEventListener("cancel", onCancel);
    return () => el.removeEventListener("cancel", onCancel);
  }, [onOpenChange]);

  return (
    <dialog
      ref={ref}
      className={cn(
        "backdrop:bg-black/60 backdrop:backdrop-blur-sm",
        "w-[min(900px,calc(100vw-24px))] rounded-3xl border border-slate-200 bg-[--bg-elev] p-0 text-slate-900 shadow-[0_28px_120px_rgba(15,23,42,0.12)] dark:border-slate-700 dark:text-slate-100 dark:shadow-[0_28px_120px_rgba(0,0,0,0.65)]",
        className,
      )}
      onClose={() => onOpenChange(false)}
    >
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-6 py-4 dark:border-slate-800">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{title}</p>
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-950 dark:border-slate-700 dark:bg-white/6 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-slate-50"
          onClick={() => onOpenChange(false)}
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="px-6 py-5">{children}</div>
    </dialog>
  );
}

