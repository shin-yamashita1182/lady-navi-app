import Link from "next/link";
import { ARTISTS } from "../lib/oshidash.mock";


export default function Home() {
return (
<main className="max-w-7xl mx-auto p-6">
<h1 className="text-2xl font-bold mb-4">推し活ダッシュボード</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{ARTISTS.map((a) => (
<Link key={a.id} href={`/artist/${a.slug}`} className="rounded-2xl bg-white shadow overflow-hidden">
<img src={a.cover} className="w-full h-40 object-cover" />
<div className="p-4">
<div className="font-semibold flex items-center gap-2">
<img src={a.avatar} className="w-8 h-8 rounded-full" />{a.name}
</div>
<div className="text-xs text-slate-600 mt-1">{a.tags.join(" · ")}</div>
</div>
</Link>
))}
</div>
</main>
);
}
