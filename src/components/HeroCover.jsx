import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative h-[42vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
      <Spline
        scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white drop-shadow-sm">
          Unified Endpoint Management Dashboard
        </h1>
        <p className="mt-3 max-w-3xl text-sm md:text-base text-white/80">
          Monitor performance, devices, and alerts across your fleet in real time.
        </p>
      </div>
    </section>
  );
}
