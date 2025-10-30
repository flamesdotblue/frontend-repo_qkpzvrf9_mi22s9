import React from 'react';
import { Activity, Shield, HardDrive, Globe } from 'lucide-react';
import StatCard from './StatCard';
import BarChart from './BarChart';

export default function SmartPerformance() {
  // Example mock data; in a real app this would come from your API
  const metrics = {
    diskReclaimed: 532,
    tunePcFix: 421,
    malwareFix: 87,
    internetPerf: 764,
  };

  const chartData = [
    { label: 'Disk', value: metrics.diskReclaimed },
    { label: 'Tune PC', value: metrics.tunePcFix },
    { label: 'Malware', value: metrics.malwareFix },
    { label: 'Internet', value: metrics.internetPerf },
  ];

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Smart Performance</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Disk Reclaimed" value={metrics.diskReclaimed} icon={HardDrive} accent="sky" />
        <StatCard title="Tune PC Fix" value={metrics.tunePcFix} icon={Activity} accent="emerald" />
        <StatCard title="Malware Fix" value={metrics.malwareFix} icon={Shield} accent="rose" />
        <StatCard title="Internet Perf" value={metrics.internetPerf} icon={Globe} accent="amber" />
      </div>
      <div className="mt-6">
        <BarChart data={chartData} height={160} />
      </div>
    </section>
  );
}
