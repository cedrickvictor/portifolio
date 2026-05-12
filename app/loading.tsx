export default function Loading() {
  return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
        <div className="h-3 w-3 rounded-full animate-pulse bg-slate-400 dark:bg-slate-400" />
        <div className="h-3 w-3 rounded-full animate-pulse bg-slate-300 [animation-delay:120ms] dark:bg-slate-500" />
        <div className="h-3 w-3 rounded-full animate-pulse bg-slate-200 [animation-delay:240ms] dark:bg-slate-600" />
        <span className="ml-2 text-sm">Loading…</span>
      </div>
    </div>
  );
}

