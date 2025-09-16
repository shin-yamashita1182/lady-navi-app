// /pages/checkout.jsx — モックチェックアウト
import { PRODUCTS } from "../lib/oshidash.mock.js"; // ← .js
import { useEffect, useState } from "react";


export default function Checkout(){
const [items, setItems] = useState([]);
const [info, setInfo] = useState({ name:"", email:"" });


useEffect(()=>{
const arr = JSON.parse(localStorage.getItem("cart") || "[]");
setItems(arr);
},[]);


const total = items.reduce((acc,it)=>{
const p = PRODUCTS.find(p=>p.id===it.productId); return acc + (p?.price||0)*it.qty;
},0);


async function pay(){
const res = await fetch("/api/mock/checkout",{ method:"POST", headers:{"content-type":"application/json"}, body: JSON.stringify({ items, info }) });
const { orderId } = await res.json();
localStorage.removeItem("cart");
location.href = `/thanks?order=${orderId}`;
}


return (
<main className="max-w-3xl mx-auto p-6 space-y-4">
<h1 className="text-2xl font-bold">チェックアウト（モック）</h1>
<div className="rounded-2xl bg-white shadow">
<table className="w-full">
<thead><tr className="text-left"><th className="p-3">商品</th><th>数量</th><th className="p-3 text-right">金額</th></tr></thead>
<tbody>
{items.map(it=>{
const p = PRODUCTS.find(p=>p.id===it.productId);
return (
<tr key={it.productId} className="border-t"><td className="p-3">{p?.name}</td><td className="text-center">{it.qty}</td><td className="p-3 text-right">¥{((p?.price||0)*it.qty).toLocaleString()}</td></tr>
);
})}
</tbody>
</table>
</div>
<div className="text-right font-semibold">合計: ¥{total.toLocaleString()}</div>


<div className="rounded-2xl bg-white shadow p-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<input className="border rounded px-3 py-2" placeholder="お名前" value={info.name} onChange={(e)=>setInfo({...info, name:e.target.value})} />
<input className="border rounded px-3 py-2" placeholder="メール" value={info.email} onChange={(e)=>setInfo({...info, email:e.target.value})} />
</div>
</div>


<button onClick={pay} className="px-5 py-3 rounded-2xl bg-indigo-600 text-white shadow">モック決済する</button>
</main>
);
}
