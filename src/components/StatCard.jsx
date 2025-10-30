import React from 'react';

export default function StatCard({ title, value, delta, icon: Icon, accent = 'indigo' }) {
  const accentMap = {
    indigo: 'from-indigo-500/20 to-indigo-500/5',
    emerald: 'from-emerald-500/20 to-emerald-500/5',
    amber: 'from-amber-500/20 to-amber-500/5',
    rose: 'from-rose-500/20 to-rose-500/5',
    blue: 'from-blue-500/20 to-blue-500/5',
    violet: 'from-violet-500/20 to-violet-500/5',
    sky: 'from-sky-500/20 to-sky-500/5',
  };

  return (
    <div className="relative rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4">
      <div className={`absolute -inset-px rounded-xl bg-gradient-to-br ${accentMap[accent] || accentMap.indigo} opacity-60 blur-2xl`} />
      <div className="relative flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-white/60">{title}</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-semibold text-white">{value}</span>
            {delta != null && (
              <span className={`text-xs ${delta >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {delta >= 0 ? '+' : ''}{delta}
              </span>
            )}
          </div>
        </div>
        {Icon && (
          <div className="rounded-lg bg-white/5 p-2 text-white/80">
            <Icon size={22} />
          </div>
        )}
      </div>
    </div>
  );
}
