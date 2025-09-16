// components/ProgressBar.jsx
export default function ProgressBar({ current = 0, total = 1 }) {
  const safeTotal = Math.max(1, Number(total) || 1);
  const pctNum = Math.min(100, Math.max(0, Math.round((Number(current) || 0) / safeTotal * 100)));
  const barStyle = { width: `${pctNum}%` };

  return (
    <div className="w-full">
      <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
        <div className="h-3 rounded-full transition-all bg-sky-500" style={barStyle} />
      </div>
      <div className="mt-1 text-xs text-slate-600">{pctNum}% 達成</div>
    </div>
  );
}
