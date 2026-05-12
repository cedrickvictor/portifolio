export default function Loading() {
  return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="flex items-center gap-3 text-white/70">
        <div className="h-3 w-3 rounded-full bg-white/70 animate-pulse" />
        <div className="h-3 w-3 rounded-full bg-white/50 animate-pulse [animation-delay:120ms]" />
        <div className="h-3 w-3 rounded-full bg-white/35 animate-pulse [animation-delay:240ms]" />
        <span className="ml-2 text-sm">Loading…</span>
      </div>
    </div>
  );
}

