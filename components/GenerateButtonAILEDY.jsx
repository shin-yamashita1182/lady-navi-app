import React, { useState } from "react";

export default function GenerateButtonAILEDY({
  location,
  genre,
  vibe,
  time,
  setResults,
}) {
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/ailedy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ location, genre, vibe, time }),
      });
      const data = await res.json();
      setResults(data.result); // ← setResultsに直接反映
    } catch (err) {
      console.error("💥 API呼び出し失敗:", err);
      setResults(["エラーが発生しました"]);
    }
    setLoading(false);
  };

  return (
    <button
      onClick={handleGenerate}
      className="w-full p-4 bg-pink-600 rounded-xl text-white font-bold hover:bg-pink-700 mt-4"
      disabled={loading}
    >
      {loading ? "🔄 検索中..." : "🔮 AIで女神を探す"}
    </button>
  );
}
