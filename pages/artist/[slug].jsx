import { useRouter } from "next/router";
import ProgressBar from "../../components/ProgressBar";
import ProductCard from "../../components/ProductCard";


function sumSupports(artistId){
const key = `supports:${artistId}`;
const arr = JSON.parse((typeof window!=="undefined" && localStorage.getItem(key)) || "null") || SUPPORTS_INIT.filter(s=>s.artistId===artistId);
return arr.reduce((acc,s)=>acc+s.amount,0);
}


export default function ArtistPage(){
const router = useRouter();
const { slug } = router.query;
const artist = ARTISTS.find(a=>a.slug===slug);
if(!artist) return <div className="p-6">Not found</div>;


const supportsKey = `supports:${artist.id}`;
const supports = typeof window!=="undefined"
? (JSON.parse(localStorage.getItem(supportsKey) || "[]").length ? JSON.parse(localStorage.getItem(supportsKey)) : SUPPORTS_INIT.filter(s=>s.artistId===artist.id))
: SUPPORTS_INIT.filter(s=>s.artistId===artist.id);


const current = typeof window!=="undefined" ? sumSupports(artist.id) : 0;
const goods = PRODUCTS.filter(p=>p.artistId===artist.id);


function handleAdd(product){
const key = `cart`;
const arr = JSON.parse(localStorage.getItem(key) || "[]");
const i = arr.findIndex(it=>it.productId===product.id);
if(i>=0) arr[i].qty += 1; else arr.push({ productId: product.id, qty: 1 });
localStorage.setItem(key, JSON.stringify(arr));
alert("カートに追加しました");
}


return (
<main className="max-w-6xl mx-auto p-6 space-y-6">
<div className="rounded-2xl overflow-hidden shadow bg-white">
<img src={artist.cover} className="w-full h-56 object-cover" />
<div className="p-6">
<div className="flex items-center gap-3">
<img src={artist.avatar} className="w-14 h-14 rounded-full" />
<div>
<h1 className="text-2xl font-bold">{artist.name}</h1>
<div className="text-sm text-slate-600">{artist.bio}</div>
</div>
</div>
<div className="mt-4">
<ProgressBar current={current} total={artist.goal.amount} />
<div className="text-sm text-slate-600 mt-1">期間: {artist.goal.period} / 目標: ¥{artist.goal.amount.toLocaleString()}</div>
</div>
</div>
</div>


<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 space-y-6">
<section>
<h2 className="font-semibold mb-2">物販</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
{goods.map(g=> <ProductCard key={g.id} product={g} onAdd={handleAdd} />)}
</div>
</section>
<section>
<h2 className="font-semibold mb-2">最新サポーター</h2>
<ul className="space-y-2">
{supports.slice(0,10).map(s=> (
<li key={s.id} className="p-3 rounded-xl bg-white shadow flex justify-between">
<div>
<div className="font-medium">{s.nickname}</div>
{s.message && <div className="text-sm text-slate-600">{s.message}</div>}
</div>
<div className="text-right font-semibold">¥{s.amount.toLocaleString()}</div>
</li>
))}
</ul>
</section>
</div>
<div>
<h2 className="font-semibold mb-2">投げ銭</h2>
<SupportForm artistId={artist.id} onSubmitted={()=>location.reload()} />
<a href="/checkout" className="mt-4 block text-center px-4 py-2 rounded-xl bg-emerald-500 text-white shadow">カートへ</a>
</div>
</div>


<div className="text-xs text-slate-500">※ 本サイトはモックです。決済はシミュレーションのみで、請求は発生しません。</div>
</main>
);
}
