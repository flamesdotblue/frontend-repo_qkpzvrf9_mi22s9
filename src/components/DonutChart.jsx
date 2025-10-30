import React from 'react';

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  const d = [
    'M', start.x, start.y,
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
  ].join(' ');
  return d;
}

export default function DonutChart({ size = 120, stroke = 12, segments = [], centerLabel }) {
  const radius = (size - stroke) / 2;
  let cumulative = 0;
  const paths = segments.map((s, idx) => {
    const startAngle = cumulative;
    const angle = (s.value / 100) * 360;
    const endAngle = startAngle + angle;
    cumulative = endAngle;
    return (
      <path
        key={idx}
        d={describeArc(size / 2, size / 2, radius, startAngle, endAngle)}
        stroke={s.color}
        strokeWidth={stroke}
        fill="none"
        strokeLinecap="round"
      />
    );
  });

  return (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={stroke}
          fill="none"
        />
        {paths}
      </svg>
      {centerLabel && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-xl font-semibold text-white">{centerLabel.value}</div>
            <div className="text-xs text-white/60">{centerLabel.label}</div>
          </div>
        </div>
      )}
    </div>
  );
}
