import type { ProjectStatus } from "@/data/site-data";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
      <span className="h-px w-7 bg-cyan-400" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

const statusStyles: Record<ProjectStatus, string> = {
  Completed: "border-emerald-400/25 bg-emerald-400/8 text-emerald-300",
  "In Development": "border-cyan-400/25 bg-cyan-400/8 text-cyan-200",
  Researching: "border-violet-400/25 bg-violet-400/8 text-violet-300",
  Planned: "border-slate-400/20 bg-slate-400/8 text-slate-400",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.08em] ${statusStyles[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

