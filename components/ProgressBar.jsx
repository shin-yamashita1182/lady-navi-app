export default function ProgressBar({ current, total }) {
const pct = Math.min(100, Math.round((current / Math.max(1, total)) * 100));
return (
<div className="w-full bg-slate-100 rounded-full h-3">
<div className="h-3 rounded-full transition-all" style={{ width: `${pct}%` }} />
<div className="mt-1 text-xs text-slate-600">{pct}% 達成</div>
</div>
);
