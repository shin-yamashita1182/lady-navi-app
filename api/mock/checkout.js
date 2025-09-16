export default async function handler(req,res){
if(req.method!=="POST") return res.status(405).end();
const { items, info } = req.body || {};
// 本当はここでDB保存/メール送信など。今はVercelログに書くだけ。
console.log("[MOCK CHECKOUT]", { items, info, at: new Date().toISOString() });
// 注文IDは時刻ベースでOK（モック）
const orderId = `OD${Date.now().toString(36).toUpperCase()}`;
res.json({ orderId });
}
