import React from 'react';
import { Monitor, Laptop, Factory } from 'lucide-react';
import StatCard from './StatCard';
import DonutChart from './DonutChart';
import BarChart from './BarChart';

export default function DeviceInfo() {
  // Mock data
  const data = {
    totalDevices: 1240,
    installed: 1028,
    notInstalled: 212,
    laptop: 740,
    desktop: 500,
    manufacturers: [
      { name: 'Dell', count: 420 },
      { name: 'HP', count: 360 },
      { name: 'Lenovo', count: 300 },
      { name: 'Apple', count: 120 },
      { name: 'Acer', count: 40 },
    ],
  };

  const installedPct = Math.round((data.installed / data.totalDevices) * 100);
  const notInstalledPct = 100 - installedPct;

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Device Info</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          <StatCard title="Total Devices" value={data.totalDevices} icon={Monitor} accent="violet" />
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-wider text-white/60">Installation Status</p>
            <div className="mt-4 flex items-center gap-6">
              <DonutChart
                size={140}
                stroke={14}
                segments={[
                  { value: installedPct, color: '#34d399' },
                  { value: notInstalledPct, color: '#f59e0b' },
                ]}
                centerLabel={{ value: installedPct + '%', label: 'Installed' }}
              />
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-white">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> Installed: {data.installed}
                </div>
                <div className="flex items-center gap-2 text-white">
                  <span className="h-2 w-2 rounded-full bg-amber-400" /> Not Installed: {data.notInstalled}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <StatCard title="Laptops" value={data.laptop} icon={Laptop} accent="sky" />
            <StatCard title="Desktops" value={data.desktop} icon={Monitor} accent="indigo" />
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-wider text-white/60">Device Mix</p>
            <div className="mt-4">
              <BarChart
                height={140}
                data={[
                  { label: 'Laptop', value: data.laptop },
                  { label: 'Desktop', value: data.desktop },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-wider text-white/60">Manufacturer Mix</p>
            <Factory size={16} className="text-white/60" />
          </div>
          <div className="mt-4 space-y-3">
            {data.manufacturers.map((m) => {
              const pct = Math.round((m.count / data.totalDevices) * 100);
              return (
                <div key={m.name} className="space-y-1">
                  <div className="flex items-center justify-between text-sm text-white">
                    <span>{m.name}</span>
                    <span className="text-white/70">{m.count} ({pct}%)</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded bg-white/10">
                    <div
                      className="h-2 bg-gradient-to-r from-indigo-400 to-sky-400"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
