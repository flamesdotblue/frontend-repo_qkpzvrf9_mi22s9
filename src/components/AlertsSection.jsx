import React from 'react';
import { AlertTriangle, Battery, Cpu, HardDrive } from 'lucide-react';
import StatCard from './StatCard';
import DonutChart from './DonutChart';

export default function AlertsSection() {
  // Mock data
  const data = {
    critical: 23,
    warning: 112,
    byComponent: {
      CPU: 35,
      HDD: 28,
      RAM: 40,
      Battery: 32,
    },
    topAlerts: [
      { id: 1, title: 'High CPU temperature on LAP-2391', severity: 'Critical', time: '2m ago' },
      { id: 2, title: 'Disk SMART warning on DESK-8821', severity: 'Warning', time: '10m ago' },
      { id: 3, title: 'Low battery health on LAP-7742', severity: 'Warning', time: '14m ago' },
      { id: 4, title: 'Memory pressure on DESK-5523', severity: 'Warning', time: '28m ago' },
      { id: 5, title: 'CPU throttling on LAP-1902', severity: 'Critical', time: '1h ago' },
    ],
  };

  const totalComponentAlerts = Object.values(data.byComponent).reduce((a, b) => a + b, 0);

  const segments = [
    { label: 'CPU', value: Math.round((data.byComponent.CPU / totalComponentAlerts) * 100), color: '#60a5fa' },
    { label: 'HDD', value: Math.round((data.byComponent.HDD / totalComponentAlerts) * 100), color: '#34d399' },
    { label: 'RAM', value: Math.round((data.byComponent.RAM / totalComponentAlerts) * 100), color: '#f472b6' },
    { label: 'Battery', value: Math.round((data.byComponent.Battery / totalComponentAlerts) * 100), color: '#f59e0b' },
  ];

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Alerts</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <StatCard title="Critical" value={data.critical} icon={AlertTriangle} accent="rose" />
            <StatCard title="Warning" value={data.warning} icon={AlertTriangle} accent="amber" />
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-wider text-white/60">Alerts by Components</p>
            <div className="mt-4 flex items-center gap-6">
              <DonutChart
                size={140}
                stroke={14}
                segments={segments}
                centerLabel={{ value: totalComponentAlerts, label: 'Total' }}
              />
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                <LegendItem color="#60a5fa" label="CPU" value={data.byComponent.CPU} Icon={Cpu} />
                <LegendItem color="#34d399" label="HDD" value={data.byComponent.HDD} Icon={HardDrive} />
                <LegendItem color="#f472b6" label="RAM" value={data.byComponent.RAM} Icon={() => <span className="inline-block h-3 w-3 rounded-sm bg-pink-400" />} />
                <LegendItem color="#f59e0b" label="Battery" value={data.byComponent.Battery} Icon={Battery} />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-wider text-white/60">Top 5 Alerts</p>
          </div>
          <ul className="mt-4 divide-y divide-white/10">
            {data.topAlerts.map((a) => (
              <li key={a.id} className="flex items-center justify-between py-3">
                <div className="min-w-0">
                  <p className="truncate text-sm text-white">{a.title}</p>
                  <p className="text-xs text-white/60">{a.time}</p>
                </div>
                <span
                  className={`ml-3 inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                    a.severity === 'Critical' ? 'bg-rose-500/10 text-rose-300' : 'bg-amber-500/10 text-amber-300'
                  }`}
                >
                  {a.severity}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function LegendItem({ color, label, value, Icon }) {
  return (
    <div className="flex items-center gap-2 text-white">
      <span className="inline-flex items-center justify-center">
        {Icon ? <Icon size={14} className="opacity-80" /> : <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: color }} />}
      </span>
      <span className="text-white/80">{label}</span>
      <span className="ml-auto text-white/60">{value}</span>
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
    </div>
  );
}
