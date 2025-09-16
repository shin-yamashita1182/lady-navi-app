// /pages/api/mock/export.csv.js — 集計CSV（ローカルStorageはサーバーからは読めないため、将来はDB化）
// 当面はダミーCSVを返す。
export default function handler(_,res){
const csv = `date,artist,kind,label,amount\n2025-09-16,まっちゃん,donation,投げ銭,2000`;
res.setHeader('Content-Type','text/csv');
res.setHeader('Content-Disposition','attachment; filename="export.csv"');
res.send(csv);
}
