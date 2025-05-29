// ✅ AILADY結果表示コンポーネント
import React from "react";

export default function AiledyResult({ results }) {
  if (!results || results.length === 0) return null;

  const cards = results
    .join("\n")
    .split(/\n\d+\.\s/) // 「1. 店名〜」の改行＋番号で区切る
    .filter((text) => text.trim() !== "")
    .map((entry, index) => {
      const lines = entry.trim().split("\n").filter(Boolean);
      const name = lines[0] || `女神スポット ${index + 1}`;
      const details = lines.slice(1).join("\n");

      return (
        <div
          key={index}
          className="bg-pink-900 rounded-xl p-4 mb-4 text-white shadow-lg"
        >
          <h2 className="text-xl font-bold mb-2">💋 {name}</h2>
          <pre className="whitespace-pre-wrap text-sm">{details}</pre>
        </div>
      );
    });

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">💎 女神スポット一覧</h2>
      {cards}
    </div>
  );
}
