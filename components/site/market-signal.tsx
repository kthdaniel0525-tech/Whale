const signals = [
  { label: "Market Data", value: "DATA" },
  { label: "Macro", value: "FOMC · CPI" },
  { label: "Companies", value: "EARNINGS" },
  { label: "Sentiment", value: "NEWS · VIX" },
];

export function MarketSignal() {
  return (
    <div className="signal-panel relative overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-[#091723]/80 p-5 shadow-2xl shadow-cyan-950/25 sm:p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Research Scope</p>
          <p className="mt-1.5 text-sm font-medium text-slate-200">Signals, connected.</p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-300/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-cyan-300">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]" />
          Building
        </span>
      </div>

      <div className="relative h-64 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#06101a] sm:h-72">
        <div className="signal-grid absolute inset-0" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 280" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="signalStroke" x1="0" x2="1">
              <stop offset="0" stopColor="#22D3EE" stopOpacity="0.15" />
              <stop offset="0.4" stopColor="#22D3EE" />
              <stop offset="1" stopColor="#38BDF8" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="signalFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#22D3EE" stopOpacity="0.16" />
              <stop offset="1" stopColor="#22D3EE" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 214C38 208 54 222 86 191S142 149 176 169s52-56 91-46 47 38 78 13 43-85 79-65 44 49 96 2V280H0Z" fill="url(#signalFill)" />
          <path d="M0 214C38 208 54 222 86 191S142 149 176 169s52-56 91-46 47 38 78 13 43-85 79-65 44 49 96 2" fill="none" stroke="url(#signalStroke)" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
          {[86, 176, 267, 345, 424].map((x, i) => (
            <circle key={x} cx={x} cy={[191, 169, 123, 136, 71][i]} r="4" fill="#06101A" stroke="#67E8F9" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
        <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-600">
          Not a price chart · System concept
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {signals.map((signal) => (
          <div key={signal.label} className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
            <p className="text-xs text-slate-500">{signal.label}</p>
            <p className="mt-1 font-mono text-xs tracking-wide text-slate-200">{signal.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

