import React from 'react';

export default function BarChart({ data = [], height = 140, showAxis = true }) {
  const maxVal = Math.max(...data.map(d => d.value), 1);
  return (
    <div className="w-full">
      <div className="flex items-end gap-3" style={{ height }}>
        {data.map((d, i) => {
          const h = Math.round((d.value / maxVal) * (height - 24));
          return (
            <div key={i} className="flex-1">
              <div className="flex items-end justify-center">
                <div
                  className="w-full rounded-md bg-gradient-to-t from-white/15 to-white/30"
                  style={{ height: h }}
                />
              </div>
              <div className="mt-2 text-center text-[10px] text-white/70 truncate">{d.label}</div>
            </div>
          );
        })}
      </div>
      {showAxis && (
        <div className="mt-2 h-px w-full bg-white/10" />
      )}
    </div>
  );
}
