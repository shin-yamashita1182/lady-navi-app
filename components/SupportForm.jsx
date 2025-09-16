import { useState } from "react";
export default function SupportForm({ artistId, onSubmitted }) {
const [amount, setAmount] = useState(1000);
const [nickname, setNickname] = useState("");
const [message, setMessage] = useState("");


const presets = [500, 1000, 3000, 10000];


function submit() {
const s = { artistId, nickname: nickname || "匿名", message, amount: Number(amount) };
const key = `supports:${artistId}`;
const arr = JSON.parse(localStorage.getItem(key) || "[]");
arr.unshift({ ...s, id: `s_${Date.now()}`, createdAt: new Date().toISOString() });
localStorage.setItem(key, JSON.stringify(arr));
onSubmitted?.();
}


return (
<div className="p-4 rounded-2xl bg-white shadow">
<div className="flex gap-2 mb-3">
{presets.map((v) => (
<button key={v} onClick={() => setAmount(v)} className="px-3 py-1 rounded-full border">
¥{v.toLocaleString()}
</button>
))}
</div>
<input className="w-full border rounded px-3 py-2 mb-2" placeholder="ニックネーム" value={nickname} onChange={(e)=>setNickname(e.target.value)} />
<textarea className="w-full border rounded px-3 py-2 mb-2" placeholder="メッセージ（任意）" value={message} onChange={(e)=>setMessage(e.target.value)} />
<div className="flex items-center justify-between">
<input type="number" className="w-40 border rounded px-3 py-2" value={amount} onChange={(e)=>setAmount(e.target.value)} />
<button onClick={submit} className="px-4 py-2 rounded-xl text-white bg-rose-500 shadow">投げ銭する</button>
</div>
</div>
);
}
