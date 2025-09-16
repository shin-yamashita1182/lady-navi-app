// /components/ProductCard.jsx
export default function ProductCard({ product, onAdd }) {
return (
<div className="rounded-2xl bg-white shadow overflow-hidden">
<img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
<div className="p-4">
<div className="font-semibold">{product.name}</div>
<div className="text-sm text-slate-600">¥{product.price.toLocaleString()}</div>
<button onClick={()=>onAdd(product)} className="mt-3 w-full px-4 py-2 rounded-xl border hover:bg-slate-50">カートに追加</button>
</div>
</div>
);
}
