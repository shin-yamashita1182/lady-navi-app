import { useRouter } from "next/router";
export default function Thanks(){
const { query } = useRouter();
return (
<main className="max-w-xl mx-auto p-6 text-center space-y-4">
<h1 className="text-2xl font-bold">ありがとうございます！</h1>
<p className="text-slate-600">注文番号: <span className="font-mono">{query.order}</span></p>
<a className="inline-block px-4 py-2 rounded-xl border" href="/">トップへ戻る</a>
</main>
);
}
