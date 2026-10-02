export function WhaleMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="44" height="44" rx="13" fill="#06B6D4" />
      <path
        d="M9 14.5c2.5 0 4.6 1.1 6.2 3.4 1.8-3.2 4-5 6.8-5 2.8 0 5 1.8 6.8 5 1.6-2.3 3.7-3.4 6.2-3.4-.6 6.1-4.1 9.3-9.5 9.7-.8 3.9-2 6.2-3.5 6.9-1.5-.7-2.7-3-3.5-6.9-5.4-.4-8.9-3.6-9.5-9.7Z"
        fill="#06121D"
      />
    </svg>
  );
}

export function WhaleWordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <WhaleMark className={compact ? "h-8 w-8" : "h-9 w-9"} />
      <span className="font-display text-lg font-semibold tracking-[0.16em] text-white">
        WHALE
      </span>
    </span>
  );
}

