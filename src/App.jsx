import React from 'react';
import HeroCover from './components/HeroCover';
import SmartPerformance from './components/SmartPerformance';
import DeviceInfo from './components/DeviceInfo';
import AlertsSection from './components/AlertsSection';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0d12] text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 md:py-8">
        <HeroCover />

        <div className="mt-8 grid grid-cols-1 gap-8">
          <SmartPerformance />
          <DeviceInfo />
          <AlertsSection />
        </div>

        <footer className="mt-10 text-center text-xs text-white/50">
          Powered by Flames UEM • Demo data for visualization
        </footer>
      </div>
    </div>
  );
}

export default App;
