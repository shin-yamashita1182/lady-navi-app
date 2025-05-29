import React, { useState } from "react";

export default function GenerateButtonAILEDY({ onGenerate }) {
  const [location, setLocation] = useState("");
  const [keywords, setKeywords] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/ailedy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ location, keywords }),
      });
      const data = await res.json();
      onGenerate(data.result);
    } catch (err) {
      console.error("💥 API呼び出し失敗:", err);
      onGenerate("エラーが発生しました");
    }
    setLoading(false);
  };

  return (
    <div className="p-4 bg-black text-white rounded-2xl shadow-lg space-y-3">
      <h2 className="text-xl font-bold">🌃 AILADY AI探索</h2>
      <input
        type="text"
        placeholder="📍 地域（例: 中洲・すすきの）"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
      <input
        type="text"
        placeholder="💡 キーワード（例: 落ち着いた, トーク上手）"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
      <button
        onClick={handleGenerate}
        className="w-full p-2 bg-pink-600 rounded font-bold hover:bg-pink-700"
        disabled={loading}
      >
        {loading ? "生成中..." : "🔮 AIでおすすめ表示"}
      </button>
    </div>
  );
}
