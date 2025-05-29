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
      setResults(data.result);
    } catch (err) {
      console.error("\uD83D\uDCA5 API呼び出し失敗:", err);
      setResults(["エラーが発生しました"]);
    }
    setLoading(false);
  };

  return (
    <button
      onClick={handleGenerate}
      className="w-full p-4 bg-pink-600 hover:bg-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-pink-500/40 transition duration-300 animate-pulse"
      disabled={loading}
    >
      {loading ? "\uD83D\uDD04 女神を召喚中..." : "\u2728 AIで女神を探す"}
    </button>
  );
}
